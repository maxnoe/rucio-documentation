"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6514],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,y=u["".concat(i,".").concat(g)]||u[g]||d[g]||l;return n?o.createElement(y,c(c({ref:t},s),{},{components:n})):o.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=g;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:r,c[1]=a;for(var p=2;p<l;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=n(58168),r=n(98587),l=(n(96540),n(15680)),c=["components"],a={title:"ScopeClient"},i=void 0,p={unversionedId:"client_api/scopeclient",id:"client_api/scopeclient",title:"ScopeClient",description:"add\\_scope",source:"@site/../docs/client_api/scopeclient.md",sourceDirName:"client_api",slug:"/client_api/scopeclient",permalink:"/documentation/client_api/scopeclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/scopeclient.md",tags:[],version:"current",frontMatter:{title:"ScopeClient"},sidebar:"docs",previous:{title:"RuleClient",permalink:"/documentation/client_api/ruleclient"},next:{title:"SubscriptionClient",permalink:"/documentation/client_api/subscriptionclient"}},s={},u=[{value:"add_scope",id:"add_scope",level:2},{value:"list_scopes",id:"list_scopes",level:2},{value:"list_scopes_for_account",id:"list_scopes_for_account",level:2}],d={toc:u},g="wrapper";function y(e){var t=e.components,n=(0,r.A)(e,c);return(0,l.yg)(g,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"add_scope"},"add","_","scope"),(0,l.yg)("span",{style:{"white-space":"pre"}},(0,l.yg)("p",null,"Sends the request to add a new scope."),(0,l.yg)("table",{style:{border:"none"}},(0,l.yg)("tbody",null,(0,l.yg)("tr",{style:{border:"none"}},(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments"),":")),(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"account"),": the name of the account to add the scope to."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"scope"),": the name of the new scope."))),(0,l.yg)("tr",{style:{border:"none"}},(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Raises"),":")),(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"Duplicate"),": if scope already exists."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),(0,l.yg)("tr",{style:{border:"none"}},(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),":")),(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,"  True if scope was created successfully.")))))),(0,l.yg)("h2",{id:"list_scopes"},"list","_","scopes"),(0,l.yg)("span",{style:{"white-space":"pre"}},(0,l.yg)("p",null,"Sends the request to list all scopes."),(0,l.yg)("table",{style:{border:"none"}},(0,l.yg)("tbody",null,(0,l.yg)("tr",{style:{border:"none"}},(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),":")),(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,"  a list containing the names of all scopes.")))))),(0,l.yg)("h2",{id:"list_scopes_for_account"},"list","_","scopes","_","for","_","account"),(0,l.yg)("span",{style:{"white-space":"pre"}},(0,l.yg)("p",null,"Sends the request to list all scopes for a rucio account."),(0,l.yg)("table",{style:{border:"none"}},(0,l.yg)("tbody",null,(0,l.yg)("tr",{style:{border:"none"}},(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments"),":")),(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"account"),": the rucio account to list scopes for."))),(0,l.yg)("tr",{style:{border:"none"}},(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Raises"),":")),(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ScopeNotFound"),": if no scopes exist for account."))),(0,l.yg)("tr",{style:{border:"none"}},(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),":")),(0,l.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,l.yg)("p",null,"  a list containing the names of all scopes for a rucio account.")))))))}y.isMDXComponent=!0}}]);