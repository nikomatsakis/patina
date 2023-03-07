use expect_test::expect;
use formality_macros::test;
use formality_types::parse::term;

use crate::program::Program;

use super::test_prove;

/// Simple example program consisting only of two trait declarations.
fn program() -> Program {
    Program {
        max_size: Program::DEFAULT_MAX_SIZE,
        trait_decls: vec![term("trait Foo<ty Self> where {}")],
        impl_decls: vec![term("impl<ty T> Foo(Vec<T>) where {}")],
        alias_eq_decls: vec![],
        alias_bound_decls: vec![],
    }
}

/// Test that `X = Vec<X>` cannot be solved
#[test]
fn direct_cycle() {
    let constraints = test_prove(program(), term("<ty A> ({}, {A = Vec<A>})"));
    expect![[r#"
        {}
    "#]]
    .assert_debug_eq(&constraints);
}

/// Test that `X = Vec<Y>` can be solved
#[test]
fn eq_variable_to_rigid() {
    let constraints = test_prove(program(), term("<ty X, ty Y> ({}, {X = Vec<Y>})"));
    expect![[r#"
        {
            (
                Env {
                    variables: [
                        ?ty_3_U(0),
                        ?ty_1_U(0),
                        ?ty_2_U(0),
                    ],
                },
                Constraints {
                    result: (),
                    known_true: true,
                    substitution: {
                        ?ty_1_U(0) => (rigid (adt Vec) ?ty_3_U(0)),
                        ?ty_2_U(0) => ?ty_3_U(0),
                    },
                },
            ),
        }
    "#]]
    .assert_debug_eq(&constraints);
}

/// Test that `Vec<Y> = X` can be solved
#[test]
fn eq_rigid_to_variable() {
    let constraints = test_prove(program(), term("<ty X, ty Y> ({}, {Vec<Y> = X})"));
    expect![[r#"
        {
            (
                Env {
                    variables: [
                        ?ty_3_U(0),
                        ?ty_1_U(0),
                        ?ty_2_U(0),
                    ],
                },
                Constraints {
                    result: (),
                    known_true: true,
                    substitution: {
                        ?ty_1_U(0) => (rigid (adt Vec) ?ty_3_U(0)),
                        ?ty_2_U(0) => ?ty_3_U(0),
                    },
                },
            ),
        }
    "#]]
    .assert_debug_eq(&constraints);
}

/// Test that `X = Vec<X>` cannot be solved (when constructed over several steps)
#[test]
fn indirect_cycle_1() {
    let constraints = test_prove(program(), term("<ty A, ty B> ({}, {A = Vec<B>, B = A})"));
    expect![[r#"
        {}
    "#]]
    .assert_debug_eq(&constraints);
}

/// Test that `X = Vec<X>` cannot be solved (when constructed over several steps)
#[test]
fn indirect_cycle_2() {
    let constraints = test_prove(program(), term("<ty A, ty B> ({}, {B = A, A = Vec<B>})"));
    expect![[r#"
        {}
    "#]]
    .assert_debug_eq(&constraints);
}
