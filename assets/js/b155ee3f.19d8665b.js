(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(373)),i=["components"],c={title:"1.21.10",sidebar_label:"1.21.10"},l={unversionedId:"release-notes/1.21.10",id:"release-notes/1.21.10",isDocsHomePage:!1,title:"1.21.10",description:"General",source:"@site/../docs/release-notes/1.21.10.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.10",permalink:"/documentation/release-notes/1.21.10",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.10.md",version:"current",lastUpdatedBy:"Mario Lassnig",lastUpdatedAt:1639741241,formattedLastUpdatedAt:"12/17/2021",sidebar_label:"1.21.10",frontMatter:{title:"1.21.10",sidebar_label:"1.21.10"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Deletion: Add file to content history when the last replica is deleted by the reaper ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/37"},"#37")),Object(o.b)("li",{parentName:"ul"},"Transfers: Enable the possibility to specify strict_copy ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3315"},"#3315"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Deletion: New Reaper implementation can unintentionally act as if in greedy mode. ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3284"},"#3284")),Object(o.b)("li",{parentName:"ul"},"Deletion: New reaper not handling ",Object(o.b)("inlineCode",{parentName:"li"},"ConfigNotFound"),"  ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3308"},"#3308")),Object(o.b)("li",{parentName:"ul"},"Transfers: Bug in the selection of compatible checksum in the conveyor ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3314"},"#3314"))))}p.isMDXComponent=!0},373:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);