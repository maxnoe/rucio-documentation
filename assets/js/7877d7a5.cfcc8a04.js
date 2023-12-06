"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"1.14.2"},s=void 0,c={unversionedId:"release-notes/1.14.2",id:"release-notes/1.14.2",title:"1.14.2",description:"Rucio",source:"@site/../docs/release-notes/1.14.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.2",permalink:"/documentation/release-notes/1.14.2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.2.md",tags:[],version:"current",frontMatter:{title:"1.14.2"}},u={},p=[{value:"Rucio",id:"rucio",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],m={toc:p},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rucio"},"Rucio"),(0,a.kt)("h3",{id:"enhancements"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core & Internals: db: fix sqlalchemy text conversion ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/288"},"#288")),(0,a.kt)("li",{parentName:"ul"},"Documentation: Adapt setup.py for buildthedocs ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/285"},"#285")),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: Include postgres client into the CC7 docker image ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/282"},"#282")),(0,a.kt)("li",{parentName:"ul"},"Probes: Upload/download probe for rucio-clients ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/272"},"#272")),(0,a.kt)("li",{parentName:"ul"},"Release management: Add Extras dependency on the possible rucio backend (oracle, mysql, postgresql) ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/281"},"#281")),(0,a.kt)("li",{parentName:"ul"},"Testing: Enable travis postgresql tests ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/280"},"#280"))),(0,a.kt)("h3",{id:"bugs"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core & Internals: Make all queries fully postgresql compatible ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/265"},"#265")),(0,a.kt)("li",{parentName:"ul"},"Documentation: Fixed badly merged conf.py file  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/307"},"#307"))),(0,a.kt)("h2",{id:"webui"},"WebUI"),(0,a.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WebUI: Policy-based generation of RucioUI pages ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/245"},"#245"))))}d.isMDXComponent=!0}}]);