"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],a={title:"ConfigClient"},c=void 0,p={unversionedId:"client_api/configclient",id:"client_api/configclient",title:"ConfigClient",description:"get\\_config",source:"@site/../docs/client_api/configclient.md",sourceDirName:"client_api",slug:"/client_api/configclient",permalink:"/documentation/client_api/configclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/configclient.md",tags:[],version:"current",frontMatter:{title:"ConfigClient"},sidebar:"docs",previous:{title:"Client",permalink:"/documentation/client_api/client"},next:{title:"CredentialClient",permalink:"/documentation/client_api/credentialclient"}},s={},d=[{value:"get_config",id:"get_config",level:2},{value:"set_config_option",id:"set_config_option",level:2},{value:"delete_config_option",id:"delete_config_option",level:2}],u={toc:d},g="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(g,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get_config"},"get","_","config"),(0,i.kt)("span",{style:{"white-space":"pre"}},(0,i.kt)("p",null,"Sends the request to get the matching configuration."),(0,i.kt)("table",{style:{border:"none"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",{style:{border:"none"}},(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"section"),": the optional name of the section."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"option"),": the optional option within the section."))),(0,i.kt)("tr",{style:{border:"none"}},(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":")),(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,"  dictionary containing the configuration.")))))),(0,i.kt)("h2",{id:"set_config_option"},"set","_","config","_","option"),(0,i.kt)("span",{style:{"white-space":"pre"}},(0,i.kt)("p",null,"Sends the request to create or set an option within a section. Missing sections will be created."),(0,i.kt)("table",{style:{border:"none"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",{style:{border:"none"}},(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"section"),": the name of the section."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"option"),": the name of the option."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"value"),": the value to set on the config option"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"use_body_for_params"),': send parameters in a json-encoded request body instead of url-encoded\nTODO: remove this parameter\nThe format of the /config endpoint was recently changed. We migrated from performing a PUT on\n"/config/\\<section',">","/\\<option",">","/\\<value",">",'" to sending the parameters using a json-encoded body.\nThis was done to fix multiple un-wanted side effects related to how the middleware treats\nvalues encoded in a path.\nFor a smooth transition, we allow both cases for now, but we should migrate to only passing\nvalues via the request body.'))),(0,i.kt)("tr",{style:{border:"none"}},(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":")),(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,"  True if option was removed successfully. False otherwise.")))))),(0,i.kt)("h2",{id:"delete_config_option"},"delete","_","config","_","option"),(0,i.kt)("span",{style:{"white-space":"pre"}},(0,i.kt)("p",null,"Sends the request to remove an option from a section"),(0,i.kt)("table",{style:{border:"none"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",{style:{border:"none"}},(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"section"),": the name of the section."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"option"),": the name of the option."))),(0,i.kt)("tr",{style:{border:"none"}},(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":")),(0,i.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,i.kt)("p",null,"  True if option was removed successfully. False otherwise.")))))))}f.isMDXComponent=!0}}]);