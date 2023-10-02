"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"Permission model"},s=void 0,p={unversionedId:"started/concepts/permission_model",id:"started/concepts/permission_model",title:"Permission model",description:"Rucio assigns permissions to accounts. Permissions are boolean flags",source:"@site/../docs/started/concepts/permission_model.md",sourceDirName:"started/concepts",slug:"/started/concepts/permission_model",permalink:"/documentation/started/concepts/permission_model",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/permission_model.md",tags:[],version:"current",lastUpdatedBy:"Anton Schwarz",lastUpdatedAt:1696237956,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{title:"Permission model"},sidebar:"docs",previous:{title:"Metadata attributes",permalink:"/documentation/started/concepts/metadata_attributes"},next:{title:"Replica management with replication rules",permalink:"/documentation/started/concepts/replica_management"}},l={},m=[],u={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rucio assigns permissions to accounts. Permissions are boolean flags\ndesignating whether an account may perform a certain action (read,\nwrite, delete) on a resource (RSE, account, replica, etc.)."),(0,i.kt)("p",null,"Rucio comes with a generic permission policy including a typical set of\npermissions. This policy can be replaced with a more fitting permission\nfile representing the policies of the community using Rucio."))}f.isMDXComponent=!0}}]);