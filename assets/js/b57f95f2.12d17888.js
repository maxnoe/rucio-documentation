"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5969],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>h});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,h=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},12137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(58168),i=r(98587),a=(r(96540),r(15680)),o=["components"],s={title:"1.18.7"},l=void 0,u={unversionedId:"release-notes/1.18.7",id:"release-notes/1.18.7",title:"1.18.7",description:"General",source:"@site/../docs/release-notes/1.18.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.7",permalink:"/documentation/release-notes/1.18.7",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.7.md",tags:[],version:"current",frontMatter:{title:"1.18.7"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:p},g="wrapper";function h(e){var t=e.components,r=(0,i.A)(e,o);return(0,a.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: list_replicas needs to return dataset information for client_extract mode ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1677"},"#1677")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Minor repository cleanup ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1841"},"#1841")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Typos and other small fixes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1853"},"#1853")),(0,a.yg)("li",{parentName:"ul"},"Probes & Alarms: Voms collector must change the emails according to the email defined in ldap  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1656"},"#1656")),(0,a.yg)("li",{parentName:"ul"},"Probes & Alarms: Probe to automatically recover suspicious files that have multiple replicas ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1871"},"#1871")),(0,a.yg)("li",{parentName:"ul"},"Rebalancing: Several small BB8 optimisiations ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/425"},"#425"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: import of builtins not Python 2.6 compatible in downloadclient ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1845"},"#1845")),(0,a.yg)("li",{parentName:"ul"},"Probes & Alarms: \u2018expired\u2019 and \u2018obsolete\u2019 counters are not correctly updated ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1849"},"#1849")),(0,a.yg)("li",{parentName:"ul"},"Traces: Suspicious file reporting broken in Kronos ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1870"},"#1870")),(0,a.yg)("li",{parentName:"ul"},"Traces: Protection against bad traces ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1882"},"#1882")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Wrongly handled exception makes the poller crash ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1788"},"#1788")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Conveyor submitter fts error message wrong ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1835"},"#1835"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: Improve output of get-metadata, list-rse-attributes and stat  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1842"},"#1842")),(0,a.yg)("li",{parentName:"ul"},"Clients: Last python3 fixes for clients ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1888"},"#1888")),(0,a.yg)("li",{parentName:"ul"},"Clients: Client migration to Python3 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/819"},"#819"))),(0,a.yg)("h2",{id:"webui"},"WebUI"),(0,a.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: Add the possibility to remove suspicious files from the bad files summary plots ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1864"},"#1864"))))}h.isMDXComponent=!0}}]);