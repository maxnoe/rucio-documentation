"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5970],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,y=p["".concat(u,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(58168),a=r(98587),i=(r(96540),r(15680)),o=["components"],s={title:"1.14.1.post1"},u=void 0,l={unversionedId:"release-notes/1.14.1.post1",id:"release-notes/1.14.1.post1",title:"1.14.1.post1",description:"Rucio",source:"@site/../docs/release-notes/1.14.1.post1.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.1.post1",permalink:"/documentation/release-notes/1.14.1.post1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.1.post1.md",tags:[],version:"current",frontMatter:{title:"1.14.1.post1"}},c={},p=[{value:"Rucio",id:"rucio",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},g="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,o);return(0,i.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"rucio"},"Rucio"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Release management: Create a script which automatically compiles release notes based on github milestones ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/213"},"#213"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Infrastructure: Restructure Dockerfile ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/246"},"#246")),(0,i.yg)("li",{parentName:"ul"},"RSE Manager: root: force GSI authentication ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/83"},"#83")),(0,i.yg)("li",{parentName:"ul"},"Release management: Removing duplicate packages in pip-requires ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/214"},"#214")),(0,i.yg)("li",{parentName:"ul"},"Release management: Removed kerberos from requirements to enable buildthedocs ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/237"},"#237")),(0,i.yg)("li",{parentName:"ul"},"Testing: Fix pylint tests on travis ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/209"},"#209")),(0,i.yg)("li",{parentName:"ul"},"Testing: remove instant client installation from travis dockerfile ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/258"},"#258"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Alarms: check_quota probe does not create quota for new SCRATCHDISKS for old accounts ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/199"},"#199")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: db: fix outer join read lock for PostgreSQL ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/262"},"#262")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: lifetime: circular dependency ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/77"},"#77")),(0,i.yg)("li",{parentName:"ul"},"Release management: Remove import rucio from webui setup.py ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/227"},"#227"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Add eventType and usrDN parameters to CLI up/download ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/211"},"#211"))),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Error when adding dataset with lifetime ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/244"},"#244"))))}y.isMDXComponent=!0}}]);