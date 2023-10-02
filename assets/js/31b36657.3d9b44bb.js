"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"transfers-overview",title:"Transfers Overview"},l=void 0,p={unversionedId:"operator/transfers/transfers-overview",id:"operator/transfers/transfers-overview",title:"Transfers Overview",description:"Rucio has a set of daemons in charge of transfers between rucio storage elements",source:"@site/../docs/operator/transfers/transfers_overview.md",sourceDirName:"operator/transfers",slug:"/operator/transfers/transfers-overview",permalink:"/documentation/operator/transfers/transfers-overview",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/transfers_overview.md",tags:[],version:"current",lastUpdatedBy:"Anton Schwarz",lastUpdatedAt:1696237956,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"transfers-overview",title:"Transfers Overview"},sidebar:"docs",previous:{title:"Configuration parameters",permalink:"/documentation/operator/configuration_parameters"},next:{title:"Transfers Preparer",permalink:"/documentation/operator/transfers/transfers-preparer"}},c={},u=[{value:"Daemon overview",id:"daemon-overview",level:2}],d={toc:u},f="wrapper";function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)(f,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rucio has a set of daemons in charge of transfers between rucio storage elements\n(RSE). Historically, these daemons were grouped under the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor"),",\nso a big part of the documentation and source code still uses this naming\nwhen referring to the transfer machinery."),(0,o.kt)("p",null,"Rucio doesn't execute the actual physical data movement between storage\nelements. It relies on external tools for this scope. Currently, rucio supports\n",(0,o.kt)("a",{parentName:"p",href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/overview.html"},"fts3")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.globus.org/data-transfer"},"globus"),'. Rucio builds on top of these\n"TransferTools" and provides additional services like recovery from a transfer\nfailure by using another copy from another storage element, multi-hopping\nusing multiple transfertools (or multiple instances of the same transfertool\ntype) and others.'),(0,o.kt)("h2",{id:"daemon-overview"},"Daemon overview"),(0,o.kt)("p",null,"The following transfer-related daemons exist in rucio, presented in the order\nthey intervene in a transfer lifecycle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"preparer"),": a strongly recommended optional daemon which is required for\nmany advanced usages, like multiple transfertools together.\nIt is also required to be able to use throttler. If active, performs part\nof the source selection and path computation work instead of the submitter.\nFor all new rucio installation, it is recommended to run this daemon and\nactivate it by setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"conveyor/use_preparer = True")," configuration\noption."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"throttler"),": an optional daemon which can throttle request submissions\nto/from an RSE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"submitter"),", ",(0,o.kt)("strong",{parentName:"li"},"stager"),": perform the actual submission of transfers to the\nexternal transfertool. If used without preparer, also perform path computation\nand source replica selection. Stager is a specialized submitter for issuing\nstagein operations to tape archives."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"receiver"),": optional daemons which listens for events published into a\nqueueing system (activemq) by the external transfertool and reacts to those\nevents to mark transfers as successful or failed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"poller"),": regularly polls the external transfertool for the status of\npending transfers and marks them as successful/failed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"finisher"),": acts on successful or failed transfers. For example, by\nre-scheduling a new attempt.")),(0,o.kt)("p",null,"The minimal list of daemons needed for transfer execution is:\n",(0,o.kt)("inlineCode",{parentName:"p"},"submitter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"poller")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"finisher"),"."),(0,o.kt)("h1",{id:"lifecycle-of-transfer-requests"},"Lifecycle of transfer requests"),(0,o.kt)("p",null,"There is no user-facing way to schedule a transfer. All transfer requests are\ncreated internally by rucio as result of rule evaluations. The lifetime of a\nrucio transfer is thus strongly bound to the rule which created it.\nHereafter is a simple example which gives the intuition of how rucio proceeds\nwith a replication/transfer of a file as part of a rule."),(0,o.kt)("p",null,"In the rest of this example we'll assume the following 4 rucio storage\nelements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510   5    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502      \u2502\n\u2502 RSE1 \u2502        \u2502 RSE2 \u2502\n\u2502      \u2502    \u250c\u2500\u2500\u25ba\u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n   \u25b2        \u2502\n   \u2502100     \u25023\n   \u25bc        \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2518   \u2502      \u2502\n\u2502 RSE3 \u2502        \u2502 RSE4 \u2502\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518   2    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"The numbers on the arrows represent the administrative cost which is set\nby the rucio administrator. Cost is unidirectional, but, in this example,\nwe assume that the cost was configured identical in both directions.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rucio-admin rse add-distance --distance 5 RSE1 RSE2\nrucio-admin rse add-distance --distance 5 RSE2 RSE1\n# Note: before rucio 1.30 (as a consequence: also in the current LTS release 1.29),\n# the --ranking option was used for the same purpose. The --distance option\n# could still be set and was mentioned in documentation alongside --ranking\n# but was completely ignored by rucio.\n# On 1.29, you'll have to use the following command:\nrucio-admin rse add-distance --ranking 5 RSE1 RSE2\nrucio-admin rse add-distance --ranking 5 RSE2 RSE1\n")),(0,o.kt)("p",null,"Assume a certain dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"someScope:dsName"),", which has two files\n",(0,o.kt)("inlineCode",{parentName:"p"},"someScope:file1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"someScope:file2"),", and both files are located on ",(0,o.kt)("inlineCode",{parentName:"p"},"RSE1"),"."),(0,o.kt)("p",null,"The destination of the transfer will be decided on the rule evaluation phase,\nFor example the user adds a rule to ensure that rucio maintains two copies\nfor each of the files on any of the RSEs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rucio add-rule someScope:dsName 2 '*'\n")),(0,o.kt)("p",null,"The rule evaluation mechanism detects that a copy is already available\non RSE1, but one additional copy is needed to respect the rule requirements of\n2 copies. It will thus create a transfer request to one of the other 3 rses.\nAs of time of writing, the selection of the destination is random as\nlong as it respects the RSE expression. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," matches any RSE.\nFor the seek of the example, lets assume that RSE4 was selected."),(0,o.kt)("p",null,"The rule evaluation mechanism will then create two transfer requests, which\nwill be picked by the transfer machinery. Depending on the configuration value\n",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor/use_preparer"),", the transfer will be either handled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"preparer"),"\nor by the ",(0,o.kt)("inlineCode",{parentName:"p"},"submitter")," directly."),(0,o.kt)("p",null,"At this stage, the transfer machinery finds all the possible sources. It\nfilters out the ones which don't match different rule criterias (for example:\nsource RSE expression) and administrative constraints (for example:\nskip blocklisted RSEs). It then computes the paths. In the previous example,\nthe path ",(0,o.kt)("inlineCode",{parentName:"p"},"RSE1 -> RSE2 -> RSE3 -> RSE4")," will be picked due to cost constraints.\nNote that it's possible to make rucio prefer shorter parts by setting the RSE\nattribute ",(0,o.kt)("inlineCode",{parentName:"p"},"hop_penalty"),", or the global configuration value with the same name.\nFor more details about how a source is selected, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/operator/transfers/transfers-preparer"},"Preparer"),"\ndocumentation."),(0,o.kt)("p",null,"The path will be then submitted to the transfertool either in its integrity,\nif transfertool supports multi-hopping, or in multiple iterations."),(0,o.kt)("p",null,"The final steps are for the ",(0,o.kt)("inlineCode",{parentName:"p"},"reciver")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"poller")," to monitor the transfer's\ncompletion in transfertool and ",(0,o.kt)("inlineCode",{parentName:"p"},"finisher")," to mark the transfers as completed.\nWe only described here a simple case, when the transfer is successful on the\nfirst try. In case of errors, multiple transitions are possible between\ndifferent daemons. Check the following request state transition diagram\nfor a more detailed view:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Request State Transition Chart",src:r(35547).Z,width:"3164",height:"7090"})))}m.isMDXComponent=!0},35547:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/request_state_transition_chart-adf4afba4ad2e53208df41f90a719725.svg"}}]);