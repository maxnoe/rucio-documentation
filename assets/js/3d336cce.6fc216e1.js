(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(373)),c=["components"],o={title:"1.16.0 'Doctor Donkey'",sidebar_label:"1.16.0 'Doctor Donkey'"},s={unversionedId:"release-notes/1.16.0",id:"release-notes/1.16.0",isDocsHomePage:!1,title:"1.16.0 'Doctor Donkey'",description:"General",source:"@site/../docs/release-notes/1.16.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.16.0",permalink:"/documentation/release-notes/1.16.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.16.0.md",version:"current",lastUpdatedBy:"Mario Lassnig",lastUpdatedAt:1639741241,formattedLastUpdatedAt:"12/17/2021",sidebar_label:"1.16.0 'Doctor Donkey'",frontMatter:{title:"1.16.0 'Doctor Donkey'",sidebar_label:"1.16.0 'Doctor Donkey'"}},u=[{value:"General",id:"general",children:[{value:"Update Instructions",id:"update-instructions",children:[]},{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"update-instructions"},"Update Instructions"),Object(i.b)("p",null,"This feature release requires a database schema update. Please consult the documentation about updating your database schema."),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Documentation: Add new unique index to oracle schema file ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/762"},"#762")),Object(i.b)("li",{parentName:"ul"},"Transfers: Define a proper interface for the rucio transfertool ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/954"},"#954"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Add client tests and packaging validation for python 2.6, 2,7, 3.4, 3.5, 3.6 in travis ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1017"},"#1017")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Fix permissions for CMS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1005"},"#1005")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: CMS schema is too permissive ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1007"},"#1007")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: core package updates ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1080"},"#1080")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add rucio daemons CLIS as command-Line applications and entry points ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/992"},"#992")),Object(i.b)("li",{parentName:"ul"},"Documentation: add documentation build validation in travis ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1025"},"#1025")),Object(i.b)("li",{parentName:"ul"},"Documentation: Add release notes to repository ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/912"},"#912")),Object(i.b)("li",{parentName:"ul"},"remove unused file from common ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1083"},"#1083")),Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: nagios: sync root internal proxies ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1032"},"#1032")),Object(i.b)("li",{parentName:"ul"},"Release management: Add python2.7 conditional requirements to core dependencies to support pip py3 installation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1009"},"#1009")),Object(i.b)("li",{parentName:"ul"},"Release management: flake8 package update to 3.5.0 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1012"},"#1012")),Object(i.b)("li",{parentName:"ul"},"Release management: Extend setup.py with dev requirements/dependencies in extra-requires ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1020"},"#1020")),Object(i.b)("li",{parentName:"ul"},"Release management: setuptools package update to 39.0.1    ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1024"},"#1024")),Object(i.b)("li",{parentName:"ul"},"Testing: Extend travis with matrix expansion to tests in parallel several configurations (py26, 27, 3, mysql, oracle, postgresl, etc )  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1018"},"#1018")),Object(i.b)("li",{parentName:"ul"},"Testing: Add flake8 and pylint python 3 syntax check for rucio (allow_failures mode) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1019"},"#1019")),Object(i.b)("li",{parentName:"ul"},"Testing: add sqlite backend tests to Travis ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1022"},"#1022")),Object(i.b)("li",{parentName:"ul"},"Testing: Change pep8 to pycodestyle ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1039"},"#1039"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals:  Adding existing files to archive fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1051"},"#1051")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: core: rse add protocols does not set third_party_copy ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1057"},"#1057")),Object(i.b)("li",{parentName:"ul"},"Transfers: Transfer : verify_checksum is not properly passed to FTS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1040"},"#1040")),Object(i.b)("li",{parentName:"ul"},"Transfers: Transfer : Fix compatible transfers mapping ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1060"},"#1060"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"features-1"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Possibility to pass a timeout for a protocol ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/27"},"#27"))),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Clients: configurable transfer_timeout in rucio.cfg ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1038"},"#1038")),Object(i.b)("li",{parentName:"ul"},"Clients: package updates ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1078"},"#1078")),Object(i.b)("li",{parentName:"ul"},"Clients: Documentation and cleanup of downloadclient and uploadclient ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/717"},"#717"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Automatic file transfers for non-WebDAV enabled sites ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/666"},"#666"))))}b.isMDXComponent=!0},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(h,o(o({ref:t},u),{},{components:r})):a.a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);