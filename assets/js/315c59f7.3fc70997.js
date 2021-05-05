(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(345)),c={title:"1.25.4",sidebar_label:"1.25.4"},o={unversionedId:"release-notes/1.25.4",id:"release-notes/1.25.4",isDocsHomePage:!1,title:"1.25.4",description:"General",source:"@site/../docs/release-notes/1.25.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.4",permalink:"/documentation/release-notes/1.25.4",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620232255,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.25.4",frontMatter:{title:"1.25.4",sidebar_label:"1.25.4"}},l=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],s={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Archive information on dataset level ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4385"},"#4385"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Change prerequisites for move_rule ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4222"},"#4222")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Replace usages of Thread.isAlive ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4585"},"#4585")),Object(a.b)("li",{parentName:"ul"},"Deletion: Removing last replica which is a constituent ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2213"},"#2213"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Deletion: Handling of Archives in the Reaper ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1431"},"#1431")),Object(a.b)("li",{parentName:"ul"},"Deletion: When multiple Reaper instances are running on the same node, the RSE configuration somehow gets mixed ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4069"},"#4069")),Object(a.b)("li",{parentName:"ul"},"Replicas: Core list_replicas() does not make use of ignore_availability ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4353"},"#4353")),Object(a.b)("li",{parentName:"ul"},"Replicas: The replica sorting ignores the protocol priority ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4546"},"#4546")),Object(a.b)("li",{parentName:"ul"},"Replicas: Python 3 bug in core list_replicas ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4583"},"#4583")),Object(a.b)("li",{parentName:"ul"},"Transfers: Conveyor : Fix bug affecting http+srm protocol ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4540"},"#4540"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: ",Object(a.b)("inlineCode",{parentName:"li"},"rucio --help")," fails on misconfigured sites ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1911"},"#1911"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: R2D2 wrongly creates a container if the list of dids is containing only files ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/583"},"#583"))))}u.isMDXComponent=!0},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(h,o(o({ref:t},s),{},{components:r})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);