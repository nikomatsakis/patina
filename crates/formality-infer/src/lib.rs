use formality_macros::term;
use formality_types::db::Db;
use formality_types::derive_links;
use formality_types::{
    cast::Upcast,
    derive_links::Variable,
    grammar::{
        AtomicRelation, Binder, Fallible, Goal, InferenceVar, Parameter, ParameterKind,
        PlaceholderVar, Ty, Universe, VarSubstitution,
    },
    term::Term,
};

use self::query::{querify, Query};

mod eq;
mod occurs;
mod outlives;
mod query;
mod rigid;
mod simple_sub;
mod sub;
mod test;

#[term]
pub struct Env {
    universe: Universe,
    inference_data: Vec<InferenceVarData>,
    coherence_mode: CoherenceMode,
}

#[term]
pub enum CoherenceMode {
    Yes,
    No,
}

impl Default for Env {
    fn default() -> Self {
        Self {
            universe: Universe::ROOT,
            inference_data: Default::default(),
            coherence_mode: CoherenceMode::No,
        }
    }
}

#[term]
struct InferenceVarData {
    /// Type, lifetime, etc
    kind: ParameterKind,

    /// Universe in which this variable was created.
    universe: Universe,

    /// If `Some`, then this variable must be equal to the specific value
    /// given, and the other fields will all be empty.
    mapped_to: Option<Parameter>,

    /// Types that this variable is a subtype of.
    ///
    /// If this is a lifetime variable, this will be empty.
    subtype_of: Vec<Ty>,

    /// Types that are subtypes of this variable.
    ///
    /// If this is a lifetime variable, this will be empty.
    supertype_of: Vec<Ty>,

    /// Types or lifetimes that this variable outlives.
    ///
    /// Values here will always have the same kind as this variable.
    outlives: Vec<Parameter>,

    /// Types or lifetimes that outlive this variable.
    ///
    /// Values here will always have the same kind as this variable.
    outlived_by: Vec<Parameter>,
}

impl Env {
    /// Returns the same environment, but in coherence mode.
    pub fn in_coherence_mode(self) -> Self {
        Env {
            coherence_mode: CoherenceMode::Yes,
            ..self
        }
    }

    /// Increment the universe counter and return the resulting universe.
    fn next_universe(&mut self) -> Universe {
        self.universe.index += 1;
        self.universe
    }

    /// Create a new inference variable with the given `kind` (type, lifetime, etc) in the given universe.
    fn next_inference_variable(&mut self, kind: ParameterKind, universe: Universe) -> InferenceVar {
        let index = self.inference_data.len();
        self.inference_data.push(InferenceVarData {
            kind,
            universe,
            mapped_to: None,
            subtype_of: vec![],
            supertype_of: vec![],
            outlives: vec![],
            outlived_by: vec![],
        });
        InferenceVar { index }
    }

    fn data(&self, var: InferenceVar) -> &InferenceVarData {
        &self.inference_data[var.index]
    }

    fn is_mapped(&self, var: InferenceVar) -> bool {
        self.inference_data[var.index].mapped_to.is_some()
    }

    /// Replace all bound variables in `binder` with universal placeholders in a fresh universe.
    pub fn instantiate_universally<T: Term>(&mut self, binder: &Binder<T>) -> T {
        let universe = self.next_universe();
        binder.instantiate(|kind, var_index| {
            PlaceholderVar {
                universe,
                var_index,
            }
            .into_parameter(kind)
        })
    }

    /// Replace all bound variables in `binder` with existential inference variables in the current universe.
    pub fn instantiate_existentially<T: Term>(&mut self, binder: &Binder<T>) -> T {
        binder.instantiate(|kind, _var_index| {
            self.next_inference_variable(kind, self.universe)
                .into_parameter(kind)
        })
    }

    /// Replace any mapped inference variables in `term` with the values they are mapped to.
    pub fn refresh_inference_variables<T: Term>(&self, term: &T) -> T {
        term.substitute(&mut |_kind, var| {
            if let Variable::InferenceVar(var) = var {
                self.data(*var).mapped_to.clone()
            } else {
                None
            }
        })
    }

    /// Returns the universe of a (free) variable.
    pub fn universe(&self, var: Variable) -> Universe {
        assert!(var.is_free());

        match var {
            Variable::PlaceholderVar(pv) => pv.universe,
            Variable::InferenceVar(iv) => self.data(iv).universe,
            Variable::BoundVar(_) => panic!("bound variable not expected"),
        }
    }

    /// Maps the inference var `var` to the value `value`. This may fail, if parameter contains
    /// values that are not in a suitable universe for `var`. It may also produce a list of goals that
    /// must be proven, if `var` had acquired constraints.
    fn map_to(&mut self, var: InferenceVar, value: impl Upcast<Parameter>) -> Fallible<Vec<Goal>> {
        let value = value.upcast();

        assert_eq!(self.data(var).kind, value.kind());

        // If var is already mapped, then equate the value we were mapped to with the new value.
        if let Some(m) = &self.data(var).mapped_to {
            return Ok(vec![Goal::eq(m.clone(), value)]);
        }

        let mut goals = self.occurs_check(var, &value)?;

        let InferenceVarData {
            kind: _,
            universe: _,
            mapped_to,
            subtype_of,
            supertype_of,
            outlives,
            outlived_by,
        } = &mut self.inference_data[var.index];

        // Convert all the relations we've stored up on this variable to goals
        // that relate to the variable's mapped value.
        goals.extend(
            std::iter::empty()
                .chain(
                    std::mem::replace(subtype_of, vec![])
                        .into_iter()
                        .map(|t| Goal::sub(value.clone(), t)),
                )
                .chain(
                    std::mem::replace(supertype_of, vec![])
                        .into_iter()
                        .map(|t| Goal::sub(t, value.clone())),
                )
                .chain(
                    std::mem::replace(outlives, vec![])
                        .into_iter()
                        .map(|t| Goal::outlives(value.clone(), t)),
                )
                .chain(
                    std::mem::replace(outlived_by, vec![])
                        .into_iter()
                        .map(|t| Goal::outlives(t, value.clone())),
                ),
        );

        *mapped_to = Some(value);

        Ok(goals)
    }

    fn parameter(&self, var: InferenceVar) -> Parameter {
        var.into_parameter(self.data(var).kind)
    }

    /// Creates a *query* from the given goal in this environment, along
    /// with a mapping from the variables defined in that query to the
    /// variables in this environment.
    ///
    /// A *query* packages up portions of this environment along with the goal
    /// into a canonical wrapper that is independent of this environment.
    ///
    /// The goal can then be solved and the resulting solution can be applied
    /// back onto this original environment via the `VarSubstitution`.
    pub fn query(&self, goal: &Goal) -> (Query, VarSubstitution) {
        querify(self, goal)
    }

    /// Apply a relation using the builtin rules, returning
    /// either an error (if they cannot be equated) or a new environment
    /// plus a list of goals that must still be proven.
    pub fn apply_relation(&self, db: &Db, r: &AtomicRelation) -> Fallible<(Env, Vec<Goal>)> {
        match r {
            AtomicRelation::Equals(a, b) => self.eq(db, a, b),
            AtomicRelation::Sub(a, b) => self.sub(db, a, b),
            AtomicRelation::Outlives(a, b) => self.outlives(db, a, b),
        }
    }
}