use std::sync::Arc;

use formality_core::{
    cast_impl, set, term, Cons, DowncastFrom, DowncastTo, Set, Upcast, UpcastFrom, Upcasted,
};

use crate::grammar::PR;

use super::{Binder, BoundVar, Const, Parameter, Predicate, Relation, TraitRef};

#[term($set)]
#[derive(Default)]
pub struct Wcs {
    set: Set<Wc>,
}

#[derive(Debug, Clone, PartialEq)]
pub enum ExhaustiveState {
    ExactMatch,
    ConstCover(Vec<Const>),
}

impl Wcs {
    pub fn t() -> Self {
        set![].upcast()
    }

    /// Goal(s) to prove `a` and `b` are equal (they must have equal length)
    pub fn all_eq(a: impl Upcast<Vec<Parameter>>, b: impl Upcast<Vec<Parameter>>) -> Wcs {
        let a: Vec<Parameter> = a.upcast();
        let b: Vec<Parameter> = b.upcast();
        assert_eq!(a.len(), b.len());
        a.into_iter()
            .zip(b)
            .map(|(a, b)| Relation::equals(a, b))
            .upcasted()
            .collect()
    }
    /// Goal(s) to prove `a` and `b` are equal (they must have equal length)
    pub fn eq_or_cover(
        candidate: impl Upcast<Vec<Parameter>>,
        trait_impl: impl Upcast<Vec<Parameter>>,
        covering_items: &mut [ExhaustiveState],
    ) -> Wcs {
        let a: Vec<Parameter> = candidate.upcast();
        let b: Vec<Parameter> = trait_impl.upcast();
        assert_eq!(a.len(), b.len());
        a.into_iter()
            .zip(b)
            .enumerate()
            .filter_map(|(i, (a, b))| match (&a, &b) {
                (Parameter::Const(ct), Parameter::Const(param)) if param.is_variable() => {
                    if covering_items[i] == ExhaustiveState::ExactMatch {
                        covering_items[i] = ExhaustiveState::ConstCover(vec![]);
                    }
                    let ExhaustiveState::ConstCover(ref mut c) = &mut covering_items[i] else {
                        panic!();
                    };
                    c.push(ct.clone());
                    None
                }
                _ => {
                    assert!(matches!(covering_items[i], ExhaustiveState::ExactMatch));
                    Some(Relation::equals(a, b))
                }
            })
            .upcasted()
            .collect()
    }
}

impl<'w> IntoIterator for &'w Wcs {
    type Item = Wc;

    type IntoIter = Box<dyn Iterator<Item = Wc> + 'w>;

    fn into_iter(self) -> Self::IntoIter {
        Box::new(self.set.iter().cloned())
    }
}

impl IntoIterator for Wcs {
    type Item = Wc;

    type IntoIter = Box<dyn Iterator<Item = Wc>>;

    fn into_iter(self) -> Self::IntoIter {
        Box::new(self.set.into_iter())
    }
}

impl FromIterator<Wc> for Wcs {
    fn from_iter<T: IntoIterator<Item = Wc>>(iter: T) -> Self {
        Wcs {
            set: iter.into_iter().collect(),
        }
    }
}

macro_rules! tuple_upcast {
    ($($name:ident),*) => {
        #[allow(non_snake_case)]
        impl<$($name,)*> UpcastFrom<($($name,)*)> for Wcs
        where
            $($name: Upcast<Wcs>,)*
        {
            fn upcast_from(($($name,)*): ($($name,)*)) -> Self {
                let c = None.into_iter();
                $(
                    let $name: Wcs = $name.upcast();
                    let c = c.chain($name);
                )*
                c.collect()
            }
        }
    }
}

tuple_upcast!(A, B);
tuple_upcast!(A, B, C);
tuple_upcast!(A, B, C, D);

impl DowncastTo<Cons<Wc, Wcs>> for Wcs {
    fn downcast_to(&self) -> Option<Cons<Wc, Wcs>> {
        let Cons(wc, set) = self.set.downcast_to()?;
        Some(Cons(wc, set.upcast()))
    }
}

impl UpcastFrom<()> for Wcs {
    fn upcast_from((): ()) -> Self {
        Wcs::default()
    }
}

impl DowncastTo<()> for Wcs {
    fn downcast_to(&self) -> Option<()> {
        if self.set.is_empty() {
            Some(())
        } else {
            None
        }
    }
}

#[term($data)]
pub struct Wc {
    data: Arc<WcData>,
}

impl Wc {
    pub fn data(&self) -> &WcData {
        &self.data
    }

    pub fn for_all(names: &[BoundVar], data: impl Upcast<Wc>) -> Self {
        WcData::ForAll(Binder::new(names, data.upcast())).upcast()
    }
}

#[term]
pub enum WcData {
    #[cast]
    PR(PR),

    #[grammar(for $v0)]
    ForAll(Binder<Wc>),

    #[grammar(if $v0 $v1)]
    Implies(Wcs, Wc),
}

// ---

impl UpcastFrom<WcData> for Wc {
    fn upcast_from(v: WcData) -> Self {
        Wc { data: Arc::new(v) }
    }
}

impl UpcastFrom<Wc> for WcData {
    fn upcast_from(v: Wc) -> Self {
        v.data().clone()
    }
}

impl DowncastFrom<Wc> for WcData {
    fn downcast_from(t: &Wc) -> Option<Self> {
        Some(t.data().clone())
    }
}

// ---

cast_impl!((PR) <: (WcData) <: (Wc));
cast_impl!((Relation) <: (PR) <: (Wc));
cast_impl!((Predicate) <: (PR) <: (Wc));
cast_impl!((TraitRef) <: (PR) <: (Wc));

impl UpcastFrom<Wc> for Wcs {
    fn upcast_from(term: Wc) -> Self {
        Wcs { set: set![term] }
    }
}

impl DowncastTo<Wc> for Wcs {
    fn downcast_to(&self) -> Option<Wc> {
        if self.set.len() == 1 {
            self.set.iter().next().cloned()
        } else {
            None
        }
    }
}

cast_impl!((PR) <: (Wc) <: (Wcs));
cast_impl!((Relation) <: (Wc) <: (Wcs));
cast_impl!((Predicate) <: (Wc) <: (Wcs));
cast_impl!((TraitRef) <: (Wc) <: (Wcs));
