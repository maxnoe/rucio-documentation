"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[517],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return n?o.createElement(m,a(a({ref:e},s),{},{components:n})):o.createElement(m,a({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:r,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83055:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(87462),r=n(63366),l=(n(67294),n(3905)),a=["components"],i={title:"AccountLimitClient"},c=void 0,u={unversionedId:"client_api/accountlimitclient",id:"client_api/accountlimitclient",title:"AccountLimitClient",description:"set\\account\\limit",source:"@site/../docs/client_api/accountlimitclient.md",sourceDirName:"client_api",slug:"/client_api/accountlimitclient",permalink:"/documentation/client_api/accountlimitclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/accountlimitclient.md",tags:[],version:"current",frontMatter:{title:"AccountLimitClient"},sidebar:"docs",previous:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"},next:{title:"BaseClient",permalink:"/documentation/client_api/baseclient"}},s={},p=[{value:"set_account_limit",id:"set_account_limit",level:2},{value:"delete_account_limit",id:"delete_account_limit",level:2},{value:"set_local_account_limit",id:"set_local_account_limit",level:2},{value:"delete_local_account_limit",id:"delete_local_account_limit",level:2},{value:"set_global_account_limit",id:"set_global_account_limit",level:2},{value:"delete_global_account_limit",id:"delete_global_account_limit",level:2}],d={toc:p},k="wrapper";function m(t){var e=t.components,n=(0,r.Z)(t,a);return(0,l.kt)(k,(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"set_account_limit"},"set","_","account","_","limit"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Sets an account limit for a given limit scope."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rse"),": The rse name."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"locality"),": The scope of the account limit. 'local' or 'global'."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,"  True if quota was created successfully else False.")))))),(0,l.kt)("h2",{id:"delete_account_limit"},"delete","_","account","_","limit"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Deletes an account limit for a given limit scope."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rse"),": The rse name."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"locality"),": The scope of the account limit. 'local' or 'global'."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,"  True if quota was created successfully else False.")))))),(0,l.kt)("h2",{id:"set_local_account_limit"},"set","_","local","_","account","_","limit"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Sends the request to set an account limit for an account."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rse"),": The rse name."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,"  True if quota was created successfully else False.")))))),(0,l.kt)("h2",{id:"delete_local_account_limit"},"delete","_","local","_","account","_","limit"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Sends the request to remove an account limit."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rse"),": The rse name."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raises"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,"  True if quota was removed successfully. False otherwise.")))))),(0,l.kt)("h2",{id:"set_global_account_limit"},"set","_","global","_","account","_","limit"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Sends the request to set a global account limit for an account."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rse_expression"),": The rse expression."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,"  True if quota was created successfully else False.")))))),(0,l.kt)("h2",{id:"delete_global_account_limit"},"delete","_","global","_","account","_","limit"),(0,l.kt)("span",{style:{"white-space":"pre"}},(0,l.kt)("p",null,"Sends the request to remove a global account limit."),(0,l.kt)("table",{style:{border:"none"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rse_expression"),": The rse expression."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raises"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),(0,l.kt)("tr",{style:{border:"none"}},(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":")),(0,l.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.kt)("p",null,"  True if quota was removed successfully. False otherwise.")))))))}m.isMDXComponent=!0}}]);