"use strict";(self.webpackChunka_mir_formality=self.webpackChunka_mir_formality||[]).push([[20],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),y=c(r),u=o,f=y["".concat(s,".").concat(u)]||y[u]||p[u]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},741:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="Layers of Formality",c={unversionedId:"how-formality-works/layers",id:"how-formality-works/layers",title:"Layers of Formality",description:"Formality is structured into several layers.",source:"@site/docs/how-formality-works/layers.md",sourceDirName:"how-formality-works",slug:"/how-formality-works/layers",permalink:"/a-mir-formality/docs/how-formality-works/layers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-formality-works/layers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How formality works",permalink:"/a-mir-formality/docs/category/how-formality-works"},next:{title:"A closer look at `formality-ty`",permalink:"/a-mir-formality/docs/how-formality-works/closer-look-ty"}},m={},p=[{value:"The types layer (<code>formality-ty</code>)",id:"the-types-layer-formality-ty",level:2},{value:"The declarations layer (<code>formality-decl</code>)",id:"the-declarations-layer-formality-decl",level:2},{value:"The MIR type system layer (<code>formality-mir</code>)",id:"the-mir-type-system-layer-formality-mir",level:2},{value:"The MIR operational semantics layer (<code>formality-mir-op</code>)",id:"the-mir-operational-semantics-layer-formality-mir-op",level:2}],y={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"layers-of-formality"},"Layers of Formality"),(0,a.kt)("p",null,"Formality is structured into several layers.\nThese layers are meant to map fairly closely onto Chalk and the eventual Rust trait solver implementation.\nIdeally, one should be able to map back and forth between Formality and corresponding Rust code with relative ease."),(0,a.kt)("h2",{id:"the-types-layer-formality-ty"},"The types layer (",(0,a.kt)("inlineCode",{parentName:"h2"},"formality-ty"),")"),(0,a.kt)("p",null,'Defines Rust types and functions for equating/relating them.\nThe representation is meant to cover all Rust types,\nbut is optimized for extracting their "essential properties".'),(0,a.kt)("p",null,"Defines core logical predicates (",(0,a.kt)("inlineCode",{parentName:"p"},"Implemented(T: Trait)"),", etc) and solvers.\nThis layer does not define what they ",(0,a.kt)("em",{parentName:"p"},"mean")," -- i.e., the conditions in which they are true."),(0,a.kt)("h2",{id:"the-declarations-layer-formality-decl"},"The declarations layer (",(0,a.kt)("inlineCode",{parentName:"h2"},"formality-decl"),")"),(0,a.kt)("p",null,'Defines Rust\'s "top-level items" and their semantics.\nThis includes crates, structs, traits, impls, but excludes function bodies.'),(0,a.kt)("p",null,"Semantics are defined by converting Rust items into predicates.\nFor example, ",(0,a.kt)("inlineCode",{parentName:"p"},"impl<T: Eq> Eq for Vec<T>"),' becomes a "program clause" (axiom)\nlike ',(0,a.kt)("inlineCode",{parentName:"p"},"forall<T> { Implemented(T: Eq) => HasImpl(Vec<T>: Eq) }"),".\n(The distinction between ",(0,a.kt)("inlineCode",{parentName:"p"},"HasImpl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Implemented")," is covered below.)"),(0,a.kt)("p",null,"This layer also defines the well-formedness checks for those items.\nFor example, ",(0,a.kt)("inlineCode",{parentName:"p"},"struct Foo { f1: T1 }")," is well-formed if ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," is well-formed."),(0,a.kt)("h2",{id:"the-mir-type-system-layer-formality-mir"},"The MIR type system layer (",(0,a.kt)("inlineCode",{parentName:"h2"},"formality-mir"),")"),(0,a.kt)("p",null,"Defines the MIR and rules for its type checker.\nThis corresponds roughly to the MIR borrow checker + polonius."),(0,a.kt)("h2",{id:"the-mir-operational-semantics-layer-formality-mir-op"},"The MIR operational semantics layer (",(0,a.kt)("inlineCode",{parentName:"h2"},"formality-mir-op"),")"),(0,a.kt)("p",null,"Extends the above level with an operational semantics.\nBasically equivalent to miri."))}u.isMDXComponent=!0}}]);