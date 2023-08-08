"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),k=o,f=d["".concat(c,".").concat(k)]||d[k]||u[k]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},24943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),a=["components"],i={title:"LockClient"},c=void 0,s={unversionedId:"client_api/lockclient",id:"client_api/lockclient",title:"LockClient",description:"get\\dataset\\locks",source:"@site/../docs/client_api/lockclient.md",sourceDirName:"client_api",slug:"/client_api/lockclient",permalink:"/documentation/client_api/lockclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/lockclient.md",tags:[],version:"current",frontMatter:{title:"LockClient"},sidebar:"docs",previous:{title:"LifetimeClient",permalink:"/documentation/client_api/lifetimeclient"},next:{title:"MetaClient",permalink:"/documentation/client_api/metaclient"}},p={},d=[{value:"get_dataset_locks",id:"get_dataset_locks",level:2},{value:"get_locks_for_dids",id:"get_locks_for_dids",level:2},{value:"get_dataset_locks_by_rse",id:"get_dataset_locks_by_rse",level:2}],u={toc:d},k="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get_dataset_locks"},"get","_","dataset","_","locks"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Get a dataset locks of the specified dataset."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scope"),": the scope of the did of the locks to list."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"name"),": the name of the did of the locks to list.")))))),(0,l.kt)("h2",{id:"get_locks_for_dids"},"get","_","locks","_","for","_","dids"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Get list of locks for for all the files found, recursively, in the listed datasets or containers."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dids"),': list of dictionaries {"scope":..., "name":..., "type":...}\ntype can be either "dataset" or "container"\ntype is optional, but if specified, improves the query performance'))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,"  list of dictionaries with lock info")))))),(0,l.kt)("h2",{id:"get_dataset_locks_by_rse"},"get","_","dataset","_","locks","_","by","_","rse"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Get all dataset locks of the specified rse."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rse"),": the rse of the locks to list.")))))))}f.isMDXComponent=!0}}]);