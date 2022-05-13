"use strict";(self.webpackChunka_mir_formality=self.webpackChunka_mir_formality||[]).push([[259],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4984:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="A closer look at `formality-ty`",p={unversionedId:"how-formality-works/closer-look-ty",id:"how-formality-works/closer-look-ty",title:"A closer look at `formality-ty`",description:"Let's take a closer look at the formality-ty layer.",source:"@site/docs/how-formality-works/closer-look-ty.md",sourceDirName:"how-formality-works",slug:"/how-formality-works/closer-look-ty",permalink:"/a-mir-formality/docs/how-formality-works/closer-look-ty",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-formality-works/closer-look-ty.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Layers of Formality",permalink:"/a-mir-formality/docs/how-formality-works/layers"},next:{title:"A closer look at `formality-decl`",permalink:"/a-mir-formality/docs/how-formality-works/closer-look-decl"}},u={},c=[{value:"Defining Rust types",id:"defining-rust-types",level:3},{value:"Type unification",id:"type-unification",level:3},{value:"Predicates",id:"predicates",level:3},{value:"Goals versus clauses",id:"goals-versus-clauses",level:4},{value:"Solver",id:"solver",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a-closer-look-at-formality-ty"},"A closer look at ",(0,r.kt)("inlineCode",{parentName:"h1"},"formality-ty")),(0,r.kt)("p",null,"Let's take a closer look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"formality-ty")," layer."),(0,r.kt)("h3",{id:"defining-rust-types"},"Defining Rust types"),(0,r.kt)("p",null,"The current definition of types looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define-language formality-ty\n  ...\n  (Ty :=\n      (TyApply TyName Parameters) ; Application type\n      VarId                       ; Bound or existential (inference) variable\n      (! VarId)                   ; Universal (placeholder) variable\n      )\n  (TyName :=\n          AdtId           ; enum/struct/union\n          TraitId         ; trait\n          AssociatedTy    ; Associated type\n          ScalarId        ; Something like i32, u32, etc\n          (Ref MaybeMut)  ; `&mut` or `&`, expects a lifetime + type parameter\n          (Tuple number)  ; tuple of given arity\n          )\n   ...\n   (ScalarId := i8 u8 i16 u16 i32 u32 i64 u64 i128 u128 bool)\n   ...\n   (AssociatedTy := (TraitId AssociatedTyId))\n   ...\n   (Parameters := (Parameter ...))\n   (Parameter := Ty Lt)\n   ...\n   ((AdtId VarId TraitId AssociatedTyId AnyId) := variable-not-otherwise-mentioned)\n)\n")),(0,r.kt)("span",{class:"caption"},"[Source](https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/ty/grammar.rkt#L25-L37)"),(0,r.kt)("p",null,'This definition is far from complete,\nbut it should give you some idea for the level of abstraction we are shooting for\nand also how PLT Redex works.\nThe idea here is that a type is either a variable,\na placeholder that represents a generic type,\nor an "application" of a type name to some parameters.\nLet\'s see some examples:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A generic type like ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," could either be ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"(! T)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"T")," is used when the generic has yet to be substituted, e.g., as part of a declaration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(! T)"),' is used as a placeholder to "any type ',(0,r.kt)("inlineCode",{parentName:"li"},"T"),'".'))),(0,r.kt)("li",{parentName:"ul"},"A type like ",(0,r.kt)("inlineCode",{parentName:"li"},"Vec<T>")," in Rust would be represented therefore as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(TyApply Vec (T))"),", in a declaration; or,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(TyApply Vec ((! T)))")," when checking it."))),(0,r.kt)("li",{parentName:"ul"},"A scalar type like ",(0,r.kt)("inlineCode",{parentName:"li"},"i32")," is represented as ",(0,r.kt)("inlineCode",{parentName:"li"},"(TyApply i32 ())"),".")),(0,r.kt)("p",null,"As I said, this defintion of types is woefully incomplete. I expect it to eventually include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"alias types" like associated types and type aliases'),(0,r.kt)("li",{parentName:"ul"},'"existential" types like ',(0,r.kt)("inlineCode",{parentName:"li"},"dyn")),(0,r.kt)("li",{parentName:"ul"},'"forall" quantifies to cover ',(0,r.kt)("inlineCode",{parentName:"li"},"for<'a> ...")),(0,r.kt)("li",{parentName:"ul"},'"function" types ',(0,r.kt)("inlineCode",{parentName:"li"},"fn(A1...An) -> R")),(0,r.kt)("li",{parentName:"ul"},'"implication" types ',(0,r.kt)("inlineCode",{parentName:"li"},"where(...) T")," (these don't exist in Rust\u2014yet)")),(0,r.kt)("p",null,'You can also see that the definition of types is aligned to highlight their "essential" characteristics\nand not necessarily for convenience elsewhere.\nAlmost every Rust type, for example, boils down to ',(0,r.kt)("em",{parentName:"p"},"some"),' kind of "application"\n(it\'s likely that we can even represent ',(0,r.kt)("inlineCode",{parentName:"p"},"fn")," types this way)."),(0,r.kt)("h3",{id:"type-unification"},"Type unification"),(0,r.kt)("p",null,"A key part of the type layer is that it includes ",(0,r.kt)("em",{parentName:"p"},"type unification"),".\nThat is, it defines the rules for making types equal.\nThis will eventually have to be extended to cover subtyping (more on that a bit later)\nso that we can properly handle variance."),(0,r.kt)("p",null,'Unification is accomplished in PLT Redex with a "',(0,r.kt)("a",{parentName:"p",href:"https://docs.racket-lang.org/redex/reference.html#%28form._%28%28lib._redex%2Freduction-semantics..rkt%29._define-metafunction%29%29"},"metafunction"),'",\nwhich just means a function that operates on terms\n(versus a function in the Rust program being analyzed):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define-metafunction formality-ty\n  most-general-unifier : Env TermPairs -> EnvSubstitution or Error\n")),(0,r.kt)("p",null,"This function takes an environment ",(0,r.kt)("inlineCode",{parentName:"p"},"Env")," and a list of pairs of terms that should be equated and gives back either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a new environment and substitution from inference variables to values that will make the two terms syntactically equal; or,"),(0,r.kt)("li",{parentName:"ul"},"the term ",(0,r.kt)("inlineCode",{parentName:"li"},"Error"),", if they cannot be unified.")),(0,r.kt)("p",null,"The unifier is a bit smarter than the traditional unification\nin that it knows about ",(0,r.kt)("em",{parentName:"p"},"universes"),' and so can handle "forall" proofs and things\n(that\'s what is found in the environment).\nThis is the same as chalk and rustc.'),(0,r.kt)("p",null,"I won't cover the details but I'll just give an example.\nThis is actually modified from a unit test from the code\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/ty/unify.rkt#L254-L269"},"source"),").\nInvoking ",(0,r.kt)("inlineCode",{parentName:"p"},"most-general-unifier")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(most-general-unifier Env_2 ((A X)\n                             (X (TyApply Vec (Y)))\n                             (Y (TyApply i32 ()))))\n")),(0,r.kt)("p",null,"corresponds to saying that ",(0,r.kt)("inlineCode",{parentName:"p"},"[A = X, X = Vec<Y>, Y = i32]")," must all be true,\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," are inference variables.\nThe resulting output is a substitution that maps ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"X"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," to the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A -> Vec<i32>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X -> Vec<i32>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Y -> i32"))),(0,r.kt)("h3",{id:"predicates"},"Predicates"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"formality-ty")," also defines the core predicates used to define Rust semantics.\nThe current definition is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme,ignore"},"{{#include ../../src/ty/grammar.rkt:Predicates}}\n")),(0,r.kt)("p",null,'These core predicates are then used to define a richer vocabulary of goals (things that can be proven)\nand various kinds of "clauses" (things that are assumed to be true, axioms):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme,ignore"},"{{#include ../../src/logic/grammar.rkt:GoalsAndHypotheses}}\n")),(0,r.kt)("p",null,"Importantly, the ",(0,r.kt)("em",{parentName:"p"},"types layer"),' defines a solver that gives semantics to all the "meta" parts of goals and clauses -- e.g., it defines what it means to prove ',(0,r.kt)("inlineCode",{parentName:"p"},"(All (G1 G2))")," (prove both ",(0,r.kt)("inlineCode",{parentName:"p"},"G1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"G2"),", duh). But it doesn't have any rules for what it means to prove the ",(0,r.kt)("em",{parentName:"p"},"core")," predicates true -- so it could never prove ",(0,r.kt)("inlineCode",{parentName:"p"},"(Implemented (Debug ((! T))))"),'. Those rules all come from the declaration layer and are given to the types layer as part of the "environment".'),(0,r.kt)("h4",{id:"goals-versus-clauses"},"Goals versus clauses"),(0,r.kt)("p",null,"You might be curious about the distinction between goal and clause\nand why there are so many names for clauses (hypothesis, clause, invariant, etc).\nLet's talk briefly about that."),(0,r.kt)("p",null,"The role of ",(0,r.kt)("inlineCode",{parentName:"p"},"ForAll")," in goals and clauses is different.\nProving ","\\","( \\forall X. G ","\\",") requires proving that ",(0,r.kt)("inlineCode",{parentName:"p"},"G")," is true for any value of ",(0,r.kt)("inlineCode",{parentName:"p"},"X"),"\n(i.e., for a placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"(! X)"),", in our setup).\nBy contrast, if you know ","\\","( \\forall X. G ","\\",") as an axiom,\nit means that you can give ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," any value ",(0,r.kt)("inlineCode",{parentName:"p"},"X1"),' you want.\nClauses have a limited structure between that keeps the solver tractable.\nThe idea is that they are always "ways to prove a single predicate" true;\nwe don\'t allow a clause like ',(0,r.kt)("inlineCode",{parentName:"p"},"(Any (A B))"),' as a clause,\nsince that would mean "A or B is true but you don\'t know which".\nThat would then be a second way to prove an ',(0,r.kt)("inlineCode",{parentName:"p"},"Any")," goal like ",(0,r.kt)("inlineCode",{parentName:"p"},"(Any ...)"),"\nand introduce lots of complications (we got enough already, thanks)."),(0,r.kt)("p",null,'Further distinctions between "hypotheses", "clauses", and "invariants"\nare used to express and capture implied bounds.\nWe\'ll defer a detailed analysis until the section below, but briefly:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Hypotheses" are where-clauses that are assumed to be true in this section of the code.'),(0,r.kt)("li",{parentName:"ul"},'"Clauses" are global rules that are always true (derived, e.g., from an impl).'),(0,r.kt)("li",{parentName:"ul"},'"Invariants" express implied bounds (e.g., supertrait relationships like "if ',(0,r.kt)("inlineCode",{parentName:"li"},"T: Eq"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"T: PartialEq"),'").')),(0,r.kt)("h3",{id:"solver"},"Solver"),(0,r.kt)("p",null,"Putting all this together, the types layer currently includes a relatively simple solver called ",(0,r.kt)("inlineCode",{parentName:"p"},"cosld-solve"),".\nThe name refers to the classic ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SLD_resolution"},"SLD Resolution Algorithm")," that powers Prolog,\nalthough the version of it that we've implemented is extended in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is coinductive (hence ",(0,r.kt)("inlineCode",{parentName:"li"},"cosld"),") as ",(0,r.kt)("a",{parentName:"li",href:"https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.102.9618&rep=rep1&type=pdf"},"described by Luke Simon et al."),".\nThis means it permits cycles, roughly speaking."),(0,r.kt)("li",{parentName:"ul"},"It covers hereditary Harrop predicates using the ",(0,r.kt)("a",{parentName:"li",href:"https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.107.2510&rep=rep1&type=pdf"},"techniques described by Gopalan Nadathur"),".")),(0,r.kt)("p",null,'In terms of chalk solvers, it is "similar" to slg, but much simpler in its structure (it doesn\'t do any caching).'),(0,r.kt)("p",null,"All those fancy words aside, it's really quite simple.\nIt's defined via induction rules, which PLT Redex lets us write in a natural style with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.racket-lang.org/redex/reference.html#%28form._%28%28lib._redex%2Freduction-semantics..rkt%29._define-judgment-form%29%29"},(0,r.kt)("inlineCode",{parentName:"a"},"define-judgment-form")),".\nThe definition begins like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define-judgment-form formality-ty\n  #:mode (prove I I I O)\n  #:contract (prove Env Predicates_stack Goal EnvSubstitution)\n")),(0,r.kt)("p",null,"This says that we are trying to prove something written as ",(0,r.kt)("inlineCode",{parentName:"p"},"(prove Env Predciates Goal EnvSubstitution)"),",\nwhere the first three are 'inputs' and the final name is an 'output'\n(the input vs output distinction is often left implicit in Prolog and other languages).\nThe idea is that we will prove that ",(0,r.kt)("inlineCode",{parentName:"p"},"Goal")," is true in some environment ",(0,r.kt)("inlineCode",{parentName:"p"},"Env"),";\nthe environment contains our hypotheses and clauses, as well as information about the variables in scope.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Predicates")," list is the stack of things we are solving, it's used to detect cycles.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"EnvSubstitution")," is the ",(0,r.kt)("em",{parentName:"p"},"output"),", it is a modified environment\npaired with a substitution that potentially gives new values to inference variables found in ",(0,r.kt)("inlineCode",{parentName:"p"},"Goal"),"."),(0,r.kt)("p",null,"Here is a simple rule.\nIt defines the way we prove ",(0,r.kt)("inlineCode",{parentName:"p"},"Any")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nikomatsakis/a-mir-formality/blob/main/src/ty/cosld-solve/prove.rkt#L62-L65"},"source"),').\nThe notation is as follows.\nThe stuff "above the line" are the conditions that have to be proven;\nthe thing "under the line" is the conclusion that we can draw.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},'  [(prove Env Predicates_stack Goal_1 EnvSubstitution_out)\n   ------------------------------------------------------- "prove-any"\n   (prove Env Predicates_stack (Any (Goal_0 ... Goal_1 Goal_2 ...)) EnvSubstitution_out)\n   ]\n')),(0,r.kt)("p",null,"This rule says:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Given some goal ",(0,r.kt)("inlineCode",{parentName:"li"},"(Any (Goal_0 ... Goal_1 Goal_2 ...))")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"Goal_1")," is found somewhere in that list...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if we can prove ",(0,r.kt)("inlineCode",{parentName:"li"},"Goal_1")," to be true, then the ",(0,r.kt)("inlineCode",{parentName:"li"},"Any")," goal is true.")))),(0,r.kt)("p",null,"Or read another way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we can prove ",(0,r.kt)("inlineCode",{parentName:"li"},"Goal_1")," to be true, then we can prove ",(0,r.kt)("inlineCode",{parentName:"li"},"(Any Goals)")," to be true so long as ",(0,r.kt)("inlineCode",{parentName:"li"},"Goal_1")," is somewhere in ",(0,r.kt)("inlineCode",{parentName:"li"},"Goals"),".")),(0,r.kt)("p",null,'It shows you a bit of the power of PLT Redex (and Racket\'s pattern matching), as well. We are able to write the rule in a "non-deterministic" way -- saying, "pick any goal from the list" and prove it. Redex will search all the possibilities.'))}m.isMDXComponent=!0}}]);