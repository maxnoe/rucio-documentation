(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{425:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(h,c(c({ref:t},u),{},{components:r})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(425)),o=["components"],c={title:"1.24.2"},s={unversionedId:"release-notes/1.24.2",id:"release-notes/1.24.2",isDocsHomePage:!1,title:"1.24.2",description:"General",source:"@site/../docs/release-notes/1.24.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.2",permalink:"/documentation/release-notes/1.24.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.2.md",version:"current",frontMatter:{title:"1.24.2"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transfers: Add deadline for Globus Online transfers to complete ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4110"},"#4110"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Database: remove unnecessary prints from session.py ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4234"},"#4234")),Object(i.b)("li",{parentName:"ul"},"Deletion: Temporarily exclude RSEs with a timeout to not impact general deletion rate ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/528"},"#528"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Consistency checks: Auditor does not work with Python 3 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4247"},"#4247")),Object(i.b)("li",{parentName:"ul"},"Consistency checks: Dark Reaper does not work with Python 3 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4256"},"#4256")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Minos does not work for non-deterministic RSEs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4209"},"#4209")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Cannot declare bad PFNs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4265"},"#4265")),Object(i.b)("li",{parentName:"ul"},"Multi VO: Rucio single-VO should not check for permission on access_rule_vo ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4253"},"#4253")),Object(i.b)("li",{parentName:"ul"},"Protocols: delete/rename function of rsemanager broken ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4246"},"#4246")),Object(i.b)("li",{parentName:"ul"},"Recovery: PFNs that can\u2019t be matched to an RSE remain in the BadPFNs table forever ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4208"},"#4208")),Object(i.b)("li",{parentName:"ul"},"Testing: Throttler tests have a weird understanding of time ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4232"},"#4232"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"features-1"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Tape replicas when downloading. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4193"},"#4193"))))}b.isMDXComponent=!0}}]);