use formality_rust::test_program_ok;

const PROGRAM_BROKEN: &str = "[
    crate Foo {
        trait Foo<ty T> where [T: Bar<Self>] {}

        trait Bar<ty T> where [T: Baz<>] {}
        
        trait Baz<> where [] {}
    }
]";

const PROGRAM_OK: &str = "[
    crate Foo {
        trait Foo<ty T> where [T: Bar<Self>, Self: Baz<>] {}

        trait Bar<ty T> where [T: Baz<>] {}
        
        trait Baz<> where [] {}
    }
]";

#[test]
fn test_broken() {
    expect_test::expect![[r#"
        Err(
            Error {
                context: "check_trait(Foo)",
                source: Error {
                    context: "prove_where_clause_well_formed([is_implemented(Bar(!U(1)_1, !U(1)_0))] => is_implemented(Bar(!U(1)_1, !U(1)_0))",
                    source: "could not prove `well_formed_trait_ref(Bar(!U(1)_1, !U(1)_0))`",
                },
            },
        )
    "#]].assert_debug_eq(&test_program_ok(PROGRAM_BROKEN));
}

#[test]
fn test_ok() {
    expect_test::expect![[r#"
        Ok(
            (),
        )
    "#]].assert_debug_eq(&test_program_ok(PROGRAM_OK));
}