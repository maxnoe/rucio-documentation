"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"sig_qualityofservice",title:"SIG Quality of Service"},l=void 0,s={unversionedId:"sig_qualityofservice",id:"sig_qualityofservice",title:"SIG Quality of Service",description:"Objective",source:"@site/../docs/sig_qualityofservice.md",sourceDirName:".",slug:"/sig_qualityofservice",permalink:"/documentation/sig_qualityofservice",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/sig_qualityofservice.md",tags:[],version:"current",lastUpdatedBy:"Anton Schwarz",lastUpdatedAt:1692782632,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{id:"sig_qualityofservice",title:"SIG Quality of Service"}},u={},p=[{value:"Objective",id:"objective",level:2},{value:"Expected End-Date",id:"expected-end-date",level:2},{value:"Means to achieve the objective",id:"means-to-achieve-the-objective",level:2},{value:"Convener",id:"convener",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objective"},"Objective"),(0,a.kt)("p",null,"The purpose of this SIG is to allow a RSE handle in an automatic manner storage\nwith two different qualitiy of services based on access latency. Initial work in\nthis area differentiates between disk and tape within the same RSE. New data files\nare initially pinned on disk either for the lifetime of the rule or up to the\nmaximum set by the storage site. After the pin expires the local storage system is\nfree to stage the file to tape for further access. When Rucio needs to access such\nfiles again, the bring on line command is given to the RSE and the file is\ntransferred from tape to disk if needed. Currently this is being tested with dCache.\nIn the future, it can be extended to other storage systems where appropriate.\nAt the end of this SIG a report will be written documenting the outcome/benefit of this\nactivity. "),(0,a.kt)("h2",{id:"expected-end-date"},"Expected End-Date"),(0,a.kt)("p",null,"September 30, 2023"),(0,a.kt)("h2",{id:"means-to-achieve-the-objective"},"Means to achieve the objective"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mattermost channel: ",(0,a.kt)("a",{parentName:"li",href:"https://mattermost.web.cern.ch/rucio/channels/QoS"},"#QoS")),(0,a.kt)("li",{parentName:"ul"},"eMail list: ",(0,a.kt)("a",{parentName:"li",href:"mailto:rucio-sig-qos@cern.ch"},"rucio-sig-qos@cern.ch")),(0,a.kt)("li",{parentName:"ul"},"biweekly meetings with interested communities either over Zoom or asynchronously\nover Mattermost.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://indico.cern.ch/category/14213/"},"Meeting series in Indico")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codimd.web.cern.ch/MfDv9yRMQmOrwGEwhlGXpQ#"},"Meeting notes"))))),(0,a.kt)("h2",{id:"convener"},"Convener"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"mailto:douglas.benjamin@cern.ch"},"Doug Benjamin")))}m.isMDXComponent=!0}}]);