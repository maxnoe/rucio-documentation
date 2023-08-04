"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||n;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),o=["components"],s={title:"32.0.0rc2"},l=void 0,u={unversionedId:"release-notes/32.0.0rc2",id:"release-notes/32.0.0rc2",title:"32.0.0rc2",description:"Release Candidate",source:"@site/../docs/release-notes/32.0.0rc2.md",sourceDirName:"release-notes",slug:"/release-notes/32.0.0rc2",permalink:"/documentation/release-notes/32.0.0rc2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/32.0.0rc2.md",tags:[],version:"current",frontMatter:{title:"32.0.0rc2"}},c={},p=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"Helm chart changes",id:"helm-chart-changes",level:2},{value:"breaking change: rework of the additionalSecrets section",id:"breaking-change-rework-of-the-additionalsecrets-section",level:3},{value:"breaking change introduced in the previous release: <code>1.31.x</code> of <code>rucio-servers</code> helm chart is incompatible with old values",id:"breaking-change-introduced-in-the-previous-release-131x-of-rucio-servers-helm-chart-is-incompatible-with-old-values",level:3},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],h={toc:p},m="wrapper";function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)(m,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"release-candidate"},"Release Candidate"),(0,n.kt)("p",null,"This is a release candidate! Only to be used in testing environments!"),(0,n.kt)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,n.kt)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,n.kt)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),(0,n.kt)("p",null,"The following changes are necessary and are covered by the ",(0,n.kt)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Renaming index ",(0,n.kt)("inlineCode",{parentName:"p"},"RULES_STUCKSTATE_IDX")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"RULES_STATE_IDX")," (Alembic revision ",(0,n.kt)("inlineCode",{parentName:"p"},"a6eb23955c28"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Adding ",(0,n.kt)("inlineCode",{parentName:"p"},"last_processed_by")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"last_processed_at")," column to ",(0,n.kt)("inlineCode",{parentName:"p"},"requests")," table (Alembic revision ",(0,n.kt)("inlineCode",{parentName:"p"},"295289b5a800"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drop of indices ",(0,n.kt)("inlineCode",{parentName:"p"},"REPLICAS_TOMBSTONE_IDX")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"REPLICAS_RSE_ID_IDX")," (Alembic revision ",(0,n.kt)("inlineCode",{parentName:"p"},"27e3a68927fb"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Only for ATLAS and CMS, because they run specific oracle database schemas which diverge from the standard SQLAlchemy schema in alembic: Some additional steps have to be performed during database schema update by these two communities. See the relevant commit message: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/commit/81bacae53dbe2486bcff87d55feb0dc65daa7ac0"},"https://github.com/rucio/rucio/commit/81bacae53dbe2486bcff87d55feb0dc65daa7ac0")))),(0,n.kt)("h2",{id:"important-changes"},"Important changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Drop support for python \\< 3.9. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The temporary tables workflow is now mandatory. This feature was gradually introduced over many previous releases. First it was opt-in, since 1.31.0 it is an opt-out. Starting the current release, the old behavior is completely removed and the usage of temporary tables is mandatory. The update should be transparent, but requires the database user used by rucio to be allowed to create temporary tables in the database. The configuration switch ",(0,n.kt)("inlineCode",{parentName:"p"},"[core]use_temp_tables=[True|False]")," can now be removed, as it does not do anything.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The configuration switch ",(0,n.kt)("inlineCode",{parentName:"p"},"[transfers]use_multihop=[True|False]")," isn't used by rucio anymore and can be removed. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"[transfers]multihop_rse_expression=\\<some_rse_expression\\>")," to define which RSEs can be used for multihop. It defaults to the RSE-expression ",(0,n.kt)("inlineCode",{parentName:"p"},"available_for_multihop=true"),", meaning that the update should be transparent for everybody. Communities who did not use multi-hop should not have any RSEs with this attribute set. Communities who used multi-hop already had this attribute set on all required RSEs, as it was mandatory for multi-hopping to work correctly. To explicitly disable multi-hopping, set ",(0,n.kt)("inlineCode",{parentName:"p"},"[transfers]multihop_rse_expression=")," to an empty value.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The transfers(conveyor) daemons where subjected to a huge internal re-design. The ",(0,n.kt)("inlineCode",{parentName:"p"},"--threads N")," CLI switch now has a slightly different meaning. Instead of having N threads getting data from database and working on the retrieved data, there will now be 1 thread getting data from the database + N threads working on that data. This change should have no particular impact. "))),(0,n.kt)("h2",{id:"helm-chart-changes"},"Helm chart changes"),(0,n.kt)("p",null,"Note: Technically, rucio ",(0,n.kt)("inlineCode",{parentName:"p"},"32.0.0")," can still be run with the last helm charts of the 1.31 line. You are not required to update the helm values at the same time you update rucio if you want to dissociate updating rucio from updating the helm charts. However, it's strongly advised to update helm charts rapidly after rucio update. We don't guarantee that this compatibility will be maintained in rucio 32.1.0+  "),(0,n.kt)("h3",{id:"breaking-change-rework-of-the-additionalsecrets-section"},"breaking change: rework of the additionalSecrets section"),(0,n.kt)("p",null,"This change was anounced in previous rucio release ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/releases/tag/1.31.0"},"1.31.0"),". The current release makes the new behavior mandatory. Follow the instructions from the previous release to substitute the ",(0,n.kt)("inlineCode",{parentName:"p"},"additionalSecrets")," sections in helm values with ",(0,n.kt)("inlineCode",{parentName:"p"},"secretMounts")," sections."),(0,n.kt)("h3",{id:"breaking-change-introduced-in-the-previous-release-131x-of-rucio-servers-helm-chart-is-incompatible-with-old-values"},"breaking change introduced in the previous release: ",(0,n.kt)("inlineCode",{parentName:"h3"},"1.31.x")," of ",(0,n.kt)("inlineCode",{parentName:"h3"},"rucio-servers")," helm chart is incompatible with old values"),(0,n.kt)("p",null,"If you are updating from a helm chart prior to 1.31.0, please follow the instruction from the previous rucio release ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/releases/tag/1.31.0"},"1.31.0")," to upgrade the value of the rucio-server helm charts. "),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Authentication & Authorisation: Replace all instances of X509 identities presented in the legacy format ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6182"},"#6182")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: make temporary tables mandatory ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6238"},"#6238")),(0,n.kt)("li",{parentName:"ul"},"Database: Exchange of function-based indices with normal index ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6143"},"#6143")),(0,n.kt)("li",{parentName:"ul"},"Release management: drop support for python 3.6, 3.7 and 3.8 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6251"},"#6251")),(0,n.kt)("li",{parentName:"ul"},"Transfers: New dispatcher logic for conveyors ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6190"},"#6190"))),(0,n.kt)("h3",{id:"enhancements"},"Enhancements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Authentication & Authorisation: Extend /auth/x509 endpoint for browser-based clients ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6048"},"#6048")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Protocol Priority Renumbering ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6083"},"#6083")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: finalize migration to unified config table + config file ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6107"},"#6107")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Customisable replica sorter algorithm ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6114"},"#6114")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Support protocols with NULL priority ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6201"},"#6201")),(0,n.kt)("li",{parentName:"ul"},"Core & Internals: Remove prefixes for unicode string literals ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6268"},"#6268")),(0,n.kt)("li",{parentName:"ul"},"Messaging: Get rid of hermes-legacy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6213"},"#6213")),(0,n.kt)("li",{parentName:"ul"},"Remove deprecated constructs from the ",(0,n.kt)("inlineCode",{parentName:"li"},"typing")," module ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6276"},"#6276")),(0,n.kt)("li",{parentName:"ul"},"Replicas: remove REPLICAS_TOMBSTONE_IDX and REPLICAS_RSE_ID_IDX indexes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6287"},"#6287")),(0,n.kt)("li",{parentName:"ul"},"Transfers: get rid of the ",(0,n.kt)("inlineCode",{parentName:"li"},"use_multihop")," configuration option ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6164"},"#6164")),(0,n.kt)("li",{parentName:"ul"},"Transfers: internal refactoring in the conveyor ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6207"},"#6207"))),(0,n.kt)("h3",{id:"bugs"},"Bugs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Authentication & Authorisation: Restrict permissions for adding scopes or manipulating identities ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6267"},"#6267")),(0,n.kt)("li",{parentName:"ul"},"Metadata: set_metadata_bulk doesn't work for external postgres / mongo metadata plugins ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6246"},"#6246")),(0,n.kt)("li",{parentName:"ul"},"x509 authentication fails for baseclient.py ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6294"},"#6294")),(0,n.kt)("li",{parentName:"ul"},"Protocols: CMS LFN to PFN translation gives double hosts ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6096"},"#6096"))),(0,n.kt)("h2",{id:"clients"},"Clients"),(0,n.kt)("h3",{id:"bugs-1"},"Bugs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clients: broken stats retrieval in the xrootd rse protocol ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6265"},"#6265"))))}d.isMDXComponent=!0}}]);