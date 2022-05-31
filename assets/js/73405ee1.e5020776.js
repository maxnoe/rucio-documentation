(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{223:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(425)),o=["components"],c={title:"1.14.8.post1"},s={unversionedId:"release-notes/1.14.8.post1",id:"release-notes/1.14.8.post1",isDocsHomePage:!1,title:"1.14.8.post1",description:"Rucio",source:"@site/../docs/release-notes/1.14.8.post1.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.8.post1",permalink:"/documentation/release-notes/1.14.8.post1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.8.post1.md",version:"current",frontMatter:{title:"1.14.8.post1"}},u=[{value:"Rucio",id:"rucio",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"rucio"},"Rucio"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: Move the methods calls in check_rse_attributes from the API to the core ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/519"},"#519")),Object(a.b)("li",{parentName:"ul"},"RSE Manager: Remove \\<operation",">","_protocol entries in rse_settings ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/508"},"#508")),Object(a.b)("li",{parentName:"ul"},"RSE Manager: rsemanager add domain to all method signatures ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/62"},"#62")),Object(a.b)("li",{parentName:"ul"},"Rules: Possibility to give reason when denying a rule ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/487"},"#487")),Object(a.b)("li",{parentName:"ul"},"Transfers: Conveyor should only use schemes compatible to the destination scheme ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/73"},"#73"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: set_metadata should update guid both in did and content table ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/413"},"#413")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Creating incomplete message for datasets does not work ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/464"},"#464")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Postgres error in conveyor-finisher ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/480"},"#480")),Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: Probe setting the naming convention is broken ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/522"},"#522")),Object(a.b)("li",{parentName:"ul"},"Recovery: Crash when declaring bad file replicas already declared bad on a non-deterministic RSE ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/457"},"#457")),Object(a.b)("li",{parentName:"ul"},"Traces: heartbeats do not work correctly for kronos dataset thread ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/510"},"#510")),Object(a.b)("li",{parentName:"ul"},"Transfers: Conveyor receiver does not consume messages ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/513"},"#513"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: update-rule --lifetime command does not work ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/496"},"#496"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Force GSI authentication for root fix did not work ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/467"},"#467")),Object(a.b)("li",{parentName:"ul"},"Clients: Automatic protocol failover broken in rucio download ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/502"},"#502"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: WebUI: Preview logfiles in browser ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/344"},"#344")," ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/344"},"#344")),Object(a.b)("li",{parentName:"ul"},"WebUI: Rucio UI Account admin view ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/81"},"#81"))),Object(a.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: Admin interface in Rucio UI ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/78"},"#78"))))}b.isMDXComponent=!0},425:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(h,c(c({ref:t},u),{},{components:r})):i.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);