(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(425)),c=["components"],o={title:"1.20.0"},l={unversionedId:"release-notes/1.20.0",id:"release-notes/1.20.0",isDocsHomePage:!1,title:"1.20.0",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/1.20.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.0",permalink:"/documentation/release-notes/1.20.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.0.md",version:"current",frontMatter:{title:"1.20.0"}},s=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],b={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"long-term-support-lts"},"Long Term Support (LTS)"),Object(a.b)("p",null,"This release marks the start of the 1.20 ",Object(a.b)("strong",{parentName:"p"},"Long Term Support (LTS)")," release line. This release line will be supported with security and critical patches until at least ",Object(a.b)("strong",{parentName:"p"},"June 2021"),"."),Object(a.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(a.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(a.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),Object(a.b)("p",null,"The following changes are necessary and are covered by the ",Object(a.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Changing size of ",Object(a.b)("inlineCode",{parentName:"p"},"extended_attributes")," column in ",Object(a.b)("inlineCode",{parentName:"p"},"rse_protocols")," table (Alembic revision ",Object(a.b)("inlineCode",{parentName:"p"},"8523998e2e76"),")")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Adding ",Object(a.b)("inlineCode",{parentName:"p"},"comments")," column to ",Object(a.b)("inlineCode",{parentName:"p"},"subscriptions_history")," table (Alembic revision ",Object(a.b)("inlineCode",{parentName:"p"},"b8caac94d7f0"),")")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Removal of replica state ",Object(a.b)("inlineCode",{parentName:"p"},"SOURCE (S)")," since it is not used (Alembic revision ",Object(a.b)("inlineCode",{parentName:"p"},"b7d287de34fd"),")"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Adapting ",Object(a.b)("inlineCode",{parentName:"li"},"REPLICAS_STATE_CHK")," constraint in ",Object(a.b)("inlineCode",{parentName:"li"},"replicas")," table"),Object(a.b)("li",{parentName:"ul"},"Adapting ",Object(a.b)("inlineCode",{parentName:"li"},"COLLECTION_REPLICAS_STATE_CHK")," constraint in ",Object(a.b)("inlineCode",{parentName:"li"},"collection_replicas")," table"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Adding new column to ",Object(a.b)("inlineCode",{parentName:"p"},"heartbeats")," table (Alembic revision ",Object(a.b)("inlineCode",{parentName:"p"},"cebad904c4dd"),")"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Adding ",Object(a.b)("inlineCode",{parentName:"li"},"payload")," column"),Object(a.b)("li",{parentName:"ul"},"Dropping ",Object(a.b)("inlineCode",{parentName:"li"},"HEARTBEATS_UPDATED_AT")," index"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Adding ",Object(a.b)("inlineCode",{parentName:"p"},"volume")," column to ",Object(a.b)("inlineCode",{parentName:"p"},"rse_transfer_limits")," table (Alembic revision ",Object(a.b)("inlineCode",{parentName:"p"},"2cbee484dcf9"),")"))),Object(a.b)("p",null,"The following change is only executed on PostgreSQL databases:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Changing all ENUM column types to varchar and adding the respective constraint checks (Alembic revision ",Object(a.b)("inlineCode",{parentName:"li"},"f1b14a8c2ac1"),")")),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Core & Internals: Size of the "extended_attributes" field of the "rse_protocols" table ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1543"},"#1543")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Bring S3 and Swift signature support in line with rest of code ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1787"},"#1787")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Changing sql-alchemy enginge to create PostgreSQL check_constraints instead of ENUMS ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2436"},"#2436")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Include payload functionality in heartbeats ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2443"},"#2443")),Object(a.b)("li",{parentName:"ul"},"Deletion: Use signed URLs when deleting from object stores ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2411"},"#2411")),Object(a.b)("li",{parentName:"ul"},"Recovery: Automatic recovery of suspicious files that have more than one replica ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/403"},"#403")),Object(a.b)("li",{parentName:"ul"},"Release management: Alembic script for comments column in subscription_history table needed ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2238"},"#2238")),Object(a.b)("li",{parentName:"ul"},"Release management: Security vulnerability with Jinja2 CVE-2019-10906 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2493"},"#2493")),Object(a.b)("li",{parentName:"ul"},"Release management: Security vulnerability with SQLAlchemy CVE-2019-7164 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2494"},"#2494")),Object(a.b)("li",{parentName:"ul"},"Transfers: Throttler mechanic to release transfers based on a strategy (FIFO) ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2220"},"#2220"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: ReplicaState.SOURCE is not used and should be removed ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1874"},"#1874")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Upgrade of CHECK_CONSTRAINT of replicas table missing in alembic revision b96a1c7e1cc4 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2166"},"#2166")),Object(a.b)("li",{parentName:"ul"},"Dataset deletion: Pause dids in the undertaker which raise nowait errors ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2355"},"#2355")),Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: Migrate Nagios probes to a separate repository ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1638"},"#1638")),Object(a.b)("li",{parentName:"ul"},"Recovery: Optimize the update of the final states in the necromancer ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2601"},"#2601")),Object(a.b)("li",{parentName:"ul"},"Release management: Adress security in pycrpyto ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1475"},"#1475")),Object(a.b)("li",{parentName:"ul"},"Release management: Dependency upgrade for 1.20.0 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2460"},"#2460")),Object(a.b)("li",{parentName:"ul"},"Release management: Security vulnerability with urllib3 CVE-2019-11324 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2501"},"#2501"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Infrastructure: wrong configuration docker dev ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2576"},"#2576")),Object(a.b)("li",{parentName:"ul"},"Infrastructure: double requirement definition ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2579"},"#2579")),Object(a.b)("li",{parentName:"ul"},"Rebalancing: File size not returned in decomission mode ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2591"},"#2591")),Object(a.b)("li",{parentName:"ul"},"Testing: Test error with python3.6.3 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2154"},"#2154")),Object(a.b)("li",{parentName:"ul"},"Testing: Fix Python 3.6 syntax test ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2496"},"#2496")),Object(a.b)("li",{parentName:"ul"},"Testing: wrong python version in python3 travis test ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2541"},"#2541"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"features-1"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Implement pcaches into clients. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2039"},"#2039"))),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Client: expose replicalocks to client ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2112"},"#2112"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Compiling issues with Python 3 (3.6.8) and hash sum calculation ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2480"},"#2480"))))}u.isMDXComponent=!0},425:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?i.a.createElement(h,o(o({ref:t},s),{},{components:n})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);