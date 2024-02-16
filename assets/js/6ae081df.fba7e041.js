"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4948],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(58168),a=n(98587),i=(n(96540),n(15680)),l=["components"],o={title:"1.25.0rc2"},s=void 0,u={unversionedId:"release-notes/1.25.0rc2",id:"release-notes/1.25.0rc2",title:"1.25.0rc2",description:"Release Candidate",source:"@site/../docs/release-notes/1.25.0rc2.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.0rc2",permalink:"/documentation/release-notes/1.25.0rc2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.25.0rc2.md",tags:[],version:"current",frontMatter:{title:"1.25.0rc2"}},c={},p=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Bugs",id:"bugs-2",level:3}],g={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,a.A)(e,l);return(0,i.yg)(d,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"release-candidate"},"Release Candidate"),(0,i.yg)("p",null,"This is a release candidate! Only to be used in testing environments!"),(0,i.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.yg)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),(0,i.yg)("p",null,"The following changes are necessary and are covered by the ",(0,i.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Ading new column and indices to ",(0,i.yg)("inlineCode",{parentName:"li"},"requests")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"requests_history")," tables. (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"li"},"f85a2962b021"),")")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"transfertool")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"requests")," table"),(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"transfertool")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"requests_history")," table"),(0,i.yg)("li",{parentName:"ul"},"Adding new ",(0,i.yg)("inlineCode",{parentName:"li"},"REQUESTS_TYP_STA_TRA_ACT_IDX")," index to ",(0,i.yg)("inlineCode",{parentName:"li"},"requests")," table")),(0,i.yg)("h2",{id:"important-changes"},"Important changes"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"This release removed the deprecated ",(0,i.yg)("inlineCode",{parentName:"li"},"reaper1")," daemon, which now has been fully replaced by the ",(0,i.yg)("inlineCode",{parentName:"li"},"reaper2"),"daemon.")),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Deletion: Deprecate reaper1 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4213"},"#4213")),(0,i.yg)("li",{parentName:"ul"},"Release management: urllib3 dependency upgrade ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4163"},"#4163")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Stronger integration of Globus Online transfer tool ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4216"},"#4216"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"REST & API: Flask dynamic endpoint loading ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4043"},"#4043")),(0,i.yg)("li",{parentName:"ul"},"Testing: Functional download/upload tests with xrootd containers ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2311"},"#2311"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Configuration: set doesn't work properly if '.' is provided as a value ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3283"},"#3283")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: imp / importlib incompatibility ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4361"},"#4361"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: replica client: expose signature_lifetime ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3972"},"#3972")),(0,i.yg)("li",{parentName:"ul"},"Clients: new logger in client broke pilot compatibility ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4359"},"#4359"))),(0,i.yg)("h2",{id:"webui"},"WebUI"),(0,i.yg)("h3",{id:"bugs-2"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WebUI: Account quota cannot be changed if it's not set at all ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4080"},"#4080"))))}m.isMDXComponent=!0}}]);