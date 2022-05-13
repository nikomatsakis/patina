"use strict";(self.webpackChunka_mir_formality=self.webpackChunka_mir_formality||[]).push([[280],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6586:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:3},s="A closer look at `formality-decl`",c={unversionedId:"how-formality-works/closer-look-decl",id:"how-formality-works/closer-look-decl",title:"A closer look at `formality-decl`",description:"Now that we've surveyed the type layer, let's look at the declaration layer.",source:"@site/docs/how-formality-works/closer-look-decl.md",sourceDirName:"how-formality-works",slug:"/how-formality-works/closer-look-decl",permalink:"/a-mir-formality/docs/how-formality-works/closer-look-decl",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-formality-works/closer-look-decl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"A closer look at `formality-ty`",permalink:"/a-mir-formality/docs/how-formality-works/closer-look-ty"},next:{title:"What formality can do",permalink:"/a-mir-formality/docs/category/what-formality-can-do"}},m={},p=[{value:"Declaring traits in <code>FormalityDecl</code>",id:"declaring-traits-in-formalitydecl",level:3},{value:"Lowering crate items to clauses",id:"lowering-crate-items-to-clauses",level:3},{value:"Generating the clauses for a single crate item",id:"generating-the-clauses-for-a-single-crate-item",level:3},{value:"Generating the &quot;ok goals&quot; for a crate",id:"generating-the-ok-goals-for-a-crate",level:3}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"a-closer-look-at-formality-decl"},"A closer look at ",(0,l.kt)("inlineCode",{parentName:"h1"},"formality-decl")),(0,l.kt)("p",null,"Now that we've surveyed the type layer, let's look at the declaration layer.\nIt begins by defining an \"extended\" language ",(0,l.kt)("inlineCode",{parentName:"p"},"formality-decl"),"\nthat adds new stuff to ",(0,l.kt)("inlineCode",{parentName:"p"},"formality-ty"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(define-extended-language formality-decl formality-ty ...)\n")),(0,l.kt)("span",{class:"caption"},"[Source](https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/decl/grammar.rkt#L5)"),(0,l.kt)("p",null,"For example, a set of crates looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme,ignore"},"{{#include ../../src/decl/grammar.rkt:Crates}}\n")),(0,l.kt)("p",null,"Basically a crate ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," is represented as a list of items like ",(0,l.kt)("inlineCode",{parentName:"p"},"(a (crate (item1 item2 item3)))"),"\nwhere ",(0,l.kt)("inlineCode",{parentName:"p"},"item{1,2,3}")," are either structs/enums (",(0,l.kt)("inlineCode",{parentName:"p"},"AdtDecl"),"), traits (",(0,l.kt)("inlineCode",{parentName:"p"},"TraitDecl"),"), or impls (",(0,l.kt)("inlineCode",{parentName:"p"},"TraitImplDecl"),")."),(0,l.kt)("h3",{id:"declaring-traits-in-formalitydecl"},"Declaring traits in ",(0,l.kt)("inlineCode",{parentName:"h3"},"FormalityDecl")),(0,l.kt)("p",null,"Let's look more closely at one of those kinds of items.\nA trait declaration looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme,ignore"},"{{#include ../../src/decl/grammar.rkt:Traits}}\n")),(0,l.kt)("p",null,"Here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TraitId")," is the name of the trait"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"KindedVarIds")," is a list of generic parameters like ",(0,l.kt)("inlineCode",{parentName:"li"},"((TyVar Self) (TyVar T))"),".\nNote that the ",(0,l.kt)("inlineCode",{parentName:"li"},"Self")," parameter is made explicit. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WhereClauses")," is a list of where-clauses, which are currently just ",(0,l.kt)("inlineCode",{parentName:"li"},"T: Foo")," trait references\n(though potentially higher-ranked)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TraitItems")," are the contents of the trait, currently not used for anything.")),(0,l.kt)("p",null,"So the following Rust trait"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"trait Foo<T: Ord>: Bar { }\n")),(0,l.kt)("p",null,"would be represented as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(Foo (trait ; KindedVarIds -- the generics:\n            ((TyKind Self) (TyKind T))\n            ; where clauses, including supertraits:\n            ((Implemented (Ord (T))) (Implemented (Bar (Self))))\n            ; trait items, empty list:\n            ()\n            ))\n")),(0,l.kt)("h3",{id:"lowering-crate-items-to-clauses"},"Lowering crate items to clauses"),(0,l.kt)("p",null,"The next part of ",(0,l.kt)("inlineCode",{parentName:"p"},"formality-decl")," is the metafunction ",(0,l.kt)("inlineCode",{parentName:"p"},"env-with-crate-decls"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(define-metafunction formality-decl\n  ;; Add the clauses/hypothesis from multiple crates\n  ;; into the environment, where CrateId names the current crate.\n  env-with-crate-decls : Env CrateDecls CrateId -> Env\n  ; ...\n  )\n")),(0,l.kt)("span",{class:"caption"},"[Source](https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/decl/decl-to-clause.rkt#L20-L23)"),(0,l.kt)("p",null,"This metafunction converts ",(0,l.kt)("em",{parentName:"p"},"Rust declarations")," into the ",(0,l.kt)("em",{parentName:"p"},"environment")," from the type layer.\nNote that it takes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a base environment ",(0,l.kt)("inlineCode",{parentName:"li"},"Env")," (typically just the constant ",(0,l.kt)("inlineCode",{parentName:"li"},"EmptyEnv"),")"),(0,l.kt)("li",{parentName:"ul"},"a set of crates ",(0,l.kt)("inlineCode",{parentName:"li"},"CrateDecls")," (this is meant to include the imports)"),(0,l.kt)("li",{parentName:"ul"},"the ID of the current crate ",(0,l.kt)("inlineCode",{parentName:"li"},"CrateId"),".\nThis is because the set of rules we generate for a particular item\ncan be different depending on whether we are compiling the crate where it was declared or from some other crate\n(consider e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"#[non_exhaustive]"),").")),(0,l.kt)("h3",{id:"generating-the-clauses-for-a-single-crate-item"},"Generating the clauses for a single crate item"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"env-with-crate-decls")," function iterates over all the items in all the crates\nand ultimately invokes this helper function, ",(0,l.kt)("inlineCode",{parentName:"p"},"crate-item-decl-rules"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(define-metafunction formality-decl\n  ;; Given a crate item, return a tuple of:\n  ;;\n  ;; * The clauses that hold in all crates due to this item\n  ;; * The invariants that hold in all crates due to this item\n  ;; * The invariants that hold only in the crate that declared this item\n  crate-item-decl-rules : CrateDecls CrateItemDecl -> (Clauses Invariants Invariants)\n")),(0,l.kt)("span",{class:"caption"},"[Source](https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/decl/decl-to-clause.rkt#L57-L63)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"crate-item-decl-rules")," takes "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the full set of crates ",(0,l.kt)("inlineCode",{parentName:"li"},"CrateDecls")," and"),(0,l.kt)("li",{parentName:"ul"},"the declaration of a single item ",(0,l.kt)("inlineCode",{parentName:"li"},"CrateItemDecl"))),(0,l.kt)("p",null,"and it returns a 3-tuple.\nAs the comment says, this contains both clauses (rules that can be used to derive true facts)\nalong with two sets of invariants.\nWe'll cover the invariants later."),(0,l.kt)("p",null,'Metafunctions are basically a gigantic match statement.\nThey consist of a series of clauses,\neach of which begins with a "pattern match" against the arguments. '),(0,l.kt)("p",null,"To see how it works, let's look at the case for an ",(0,l.kt)("inlineCode",{parentName:"p"},"impl")," from that section.\nTo begin with, here is the comment explaining what we aim to do:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"}," [;; For an trait impl declared in the crate C, like the following:\n   ;;\n   ;;     impl<'a, T> Foo<'a, T> for i32 where T: Ord { }\n   ;;\n   ;; We consider `HasImpl` to hold if (a) all inputs are well formed and (b) where\n   ;; clauses are satisfied:\n   ;;\n   ;;     (ForAll ((LtKind 'a) (TyKind T))\n   ;;         (HasImpl (Foo (i32 'a u32))) :-\n   ;;             (WellFormed (TyKind i32))\n   ;;             (WellFormed (TyKind i32))\n   ;;             (Implemented (Ord T)))\n")),(0,l.kt)("p",null,"The actual code for this\nbegins by matching the item that we are generating rules for:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(crate-item-decl-rules CrateDecls (impl KindedVarIds_impl TraitRef WhereClauses_impl ImplItems))\n")),(0,l.kt)("span",{class:"caption"},"[Source](https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/decl/decl-to-clause.rkt#L141-L166)"),(0,l.kt)("p",null,"The next line is the final result.\nThe function this is part of  -- this says we will produce one global clause"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"((Clause) () ())\n")),(0,l.kt)("p",null,"This final result is allowed to refer to variables defined on the following lines, shown below.\nA ",(0,l.kt)("inlineCode",{parentName:"p"},"(where/error <pattern> <value>)")," clause is effectively just ",(0,l.kt)("inlineCode",{parentName:"p"},"let <pattern> = <value>"),", in Rust terms;\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"/error"),' part means "if this pattern doesn\'t match, generate an error".\nYou can also write ',(0,l.kt)("inlineCode",{parentName:"p"},"(where <pattern> <value>)"),", but that means that if the pattern doesn't match,\nthe metafunction should to see if the next rule works."),(0,l.kt)("p",null,"The impl code begins by pattern matching against the ",(0,l.kt)("inlineCode",{parentName:"p"},"TraitRef")," that the impl is implementing\n(in the example from the comment, that would be ",(0,l.kt)("inlineCode",{parentName:"p"},"(Foo (i32 'a T))"),").\nWe extract out the ",(0,l.kt)("inlineCode",{parentName:"p"},"TraitId")," and the self type ",(0,l.kt)("inlineCode",{parentName:"p"},"Parameter_trait"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"   (where/error (TraitId (Parameter_trait ...)) TraitRef)\n")),(0,l.kt)("p",null,"Next we look up the definition of the trait itself to find out its generics, using a helper function ",(0,l.kt)("inlineCode",{parentName:"p"},"item-with-id"),".\nThis matches and extracts out the parameter kinds (lifetimes vs types, in this code):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"   (where/error (trait KindedVarIds_trait _ _) (item-with-id CrateDecls TraitId))\n   (where/error ((ParameterKind_trait _) ...) KindedVarIds_trait)\n")),(0,l.kt)("p",null,"Next we convert the where clauses (e,g, ",(0,l.kt)("inlineCode",{parentName:"p"},"T: Ord"),") into goals, using a helper function ",(0,l.kt)("inlineCode",{parentName:"p"},"where-clauses->goals")," (described below):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"   (where/error (Goal_wc ...) (where-clauses->goals WhereClauses_impl))\n")),(0,l.kt)("p",null,"Finally we can generate that variable ",(0,l.kt)("inlineCode",{parentName:"p"},"Clause")," that was referenced in the final result.\nNote that we use the ",(0,l.kt)("inlineCode",{parentName:"p"},"..."),' notation to "flatten" together the list of goals from the where-clauses (',(0,l.kt)("inlineCode",{parentName:"p"},"Goal_wc ..."),")\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"WellFormed"),"-ness goals that we must prove\n(i.e., to use the impl, we must show that its input types are well-formed):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"   (where/error Clause (ForAll KindedVarIds_impl\n                               (Implies\n                                ((WellFormed (ParameterKind_trait Parameter_trait)) ...\n                                 Goal_wc ...\n                                 )\n                                (HasImpl TraitRef))))\n   ]\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"where-clause->goal")," helper is fairly simple.\nHere is the source, I'll leave puzzling it out as an exercise to the reader:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(define-metafunction formality-decl\n  ;; Convert a where clause `W` into a goal that proves `W` is true.\n  where-clause->goal : WhereClause -> Goal\n\n  ((where-clause->goal (Implemented TraitRef))\n   (Implemented TraitRef)\n   )\n\n  ((where-clause->goal (ForAll KindedVarIds WhereClause))\n   (ForAll KindedVarIds Goal)\n   (where/error Goal (where-clause->goal WhereClause))\n   )\n\n  ; FIXME: Support lifetimes, projections\n  )\n")),(0,l.kt)("span",{class:"caption"},"[Source](https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/decl/decl-to-clause.rkt#L197-L211)"),(0,l.kt)("h3",{id:"generating-the-ok-goals-for-a-crate"},'Generating the "ok goals" for a crate'),(0,l.kt)("p",null,'In addition to "clauses", there is also a function ',(0,l.kt)("inlineCode",{parentName:"p"},"crate-ok-goal"),"\nthat generate goals for each crate item in a given crate:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},'(define-metafunction formality-decl\n  ;; Given a set of crates and the decl for the current crate,\n  ;; generate the goal that proves all declarations in the current crate are\n  ;; "ok". Other crates are assumed to be "ok".\n  crate-ok-goal : CrateDecls CrateDecl -> Goal\n')),(0,l.kt)("span",{class:"caption"},"[Source](https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/decl/decl-ok.rkt#L7-L11)"),(0,l.kt)("p",null,'The idea is that the crate is "ok" (i.e., passes the type check) if these goals are satisfied.\nFor the declarations layer, these goals correspond roughly to rustc\'s ',(0,l.kt)("inlineCode",{parentName:"p"},"wfcheck"),".\nHere is the rule for impls:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"  [;; For a trait impl declared in the crate C, like the following:\n   ;;\n   ;;     impl<'a, T> Foo<'a, T> for u32 { }\n   ;;\n   ;; we require that the trait is implemented.\n   (crate-item-ok-goal _ (impl KindedVarIds_impl TraitRef WhereClauses_impl ImplItems))\n   (ForAll KindedVarIds_impl\n           (Implies ((WellFormed KindedVarId_impl) ... WhereClause_impl ...)\n                    (All ((Implemented TraitRef)))))\n\n   (where/error (KindedVarId_impl ...) KindedVarIds_impl)\n   (where/error (WhereClause_impl ...) WhereClauses_impl)\n   ]\n  )\n")),(0,l.kt)("span",{class:"caption"},"[Source](https://github.com/nikomatsakis/a-mir-formality/blob/47eceea34b5f56a55d781acc73dca86c996b15c5/src/decl/decl-ok.rkt#L59-L71)"),(0,l.kt)("p",null,"In short, an ",(0,l.kt)("inlineCode",{parentName:"p"},"impl")," is well-formed if the trait is fully implemented.\nWe'll look at the definition of ",(0,l.kt)("em",{parentName:"p"},"implemented")," in more detail in ",(0,l.kt)("a",{parentName:"p",href:"../what-formality-can-do/case-study"},"the next section"),",\nbut for now it suffices to say that a trait is implemented if\n(a) it has an impl and\n(b) all of its where-clauses are satisfied.\nSince we know there is an impl (we're checking it right now!) this is equivalent to saying\n\"all of the trait's where clauses are satisfied\"."))}u.isMDXComponent=!0}}]);