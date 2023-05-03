"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1726],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"Permission model"},c=void 0,p={unversionedId:"started/concepts/permission_model",id:"started/concepts/permission_model",title:"Permission model",description:"Rucio assigns permissions to accounts. Permissions are boolean flags",source:"@site/../docs/started/concepts/permission_model.md",sourceDirName:"started/concepts",slug:"/started/concepts/permission_model",permalink:"/documentation/started/concepts/permission_model",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/permission_model.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1683105700,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Permission model"},sidebar:"docs",previous:{title:"Metadata attributes",permalink:"/documentation/started/concepts/metadata_attributes"},next:{title:"Replica management with replication rules",permalink:"/documentation/started/concepts/replica_management"}},l={},m=[],u={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rucio assigns permissions to accounts. Permissions are boolean flags\ndesignating whether an account may perform a certain action (read,\nwrite, delete) on a resource (RSE, account, replica, etc.)."),(0,i.kt)("p",null,"Rucio comes with a generic permission policy including a typical set of\npermissions. This policy can be replaced with a more fitting permission\nfile representing the policies of the community using Rucio."))}f.isMDXComponent=!0}}]);