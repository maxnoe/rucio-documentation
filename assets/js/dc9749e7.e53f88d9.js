(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{382:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(437)),o=["components"],s={id:"transfers-submitter",title:"Transfers Submitter"},c={unversionedId:"transfers-submitter",id:"transfers-submitter",isDocsHomePage:!1,title:"Transfers Submitter",description:"The conveyor-submitter (transfer submitter) is the rucio daemon in charge",source:"@site/../docs/transfers_submitter.md",sourceDirName:".",slug:"/transfers-submitter",permalink:"/documentation/transfers-submitter",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/transfers_submitter.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1660824701,formattedLastUpdatedAt:"8/18/2022",frontMatter:{id:"transfers-submitter",title:"Transfers Submitter"},sidebar:"docs",previous:{title:"Transfers Overview",permalink:"/documentation/transfers-overview"},next:{title:"Configure Rucio To Use Globus Online as a Transfer Tool",permalink:"/documentation/configure-rucio-globus"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"conveyor-submitter")," (transfer submitter) is the rucio daemon in charge\nof submitting transfers for execution by an external third-party-copy\ntrasfertool. As input, it gets the transfer requests in ",Object(a.b)("inlineCode",{parentName:"p"},"queued")," state and\nperforms multiple tasks on them with the end goal of submitting the actual\ntransfer to one or more transfertools. It:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"finds all source RSEs which have a replica of the desired file"),Object(a.b)("li",{parentName:"ul"},"filters out the source RSEs which don't respect administrative constraints"),Object(a.b)("li",{parentName:"ul"},"ensures protocol compatibility between sources and destination"),Object(a.b)("li",{parentName:"ul"},"performs path computations to find the best sources"),Object(a.b)("li",{parentName:"ul"},"generates the full URIs to be used by the transfertool"),Object(a.b)("li",{parentName:"ul"},"performs the actual submission of the transfer")),Object(a.b)("h1",{id:"source-replica-selection"},"Source replica selection"),Object(a.b)("p",null,"One of the main jobs done by the submitter is the selection of the replica\nto be used as a transfer sources. For that, it relies on multiple RSE\nattributes and on the configured protocols. This section provides a summary\nof what configuration parameters can influence the submitter at this stage."),Object(a.b)("p",null,"We will use the notation ",Object(a.b)("inlineCode",{parentName:"p"},"section/option")," to speak about a configuration\nvalue to be set in ",Object(a.b)("inlineCode",{parentName:"p"},"rucio.cfg")," like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"[section]\noption = value\n")),Object(a.b)("p",null,"The submitter will start by retrieving all the possible sources from the\ndatabase. If the configuration value ",Object(a.b)("inlineCode",{parentName:"p"},"conveyor/filter_transfertool")," is set, it\nwill avoid source RSEs which don't have the ",Object(a.b)("inlineCode",{parentName:"p"},"transfertool")," RSE attribute\nset to the correct value. Except for a particular case: when submitter is\nrun with a list of transfertools in ",Object(a.b)("inlineCode",{parentName:"p"},"conveyor/transfertool")," and multi-hoping\nis enabled. In this case the ",Object(a.b)("inlineCode",{parentName:"p"},"transfertool")," RSE attribute will be ignored at\nthis stage, because we assume a will to multi-hop between transfertools."),Object(a.b)("p",null,"In the following step, the submitter will skip all sources which don't\nrespect the administrative constraints. For example, it will ignore source\nRSEs with ",Object(a.b)("inlineCode",{parentName:"p"},"availability_read=False")," (unless the submitter is run with\n",Object(a.b)("inlineCode",{parentName:"p"},"--ignore-availability"),"). It also respects the ",Object(a.b)("inlineCode",{parentName:"p"},"restricted_read")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"restricted_write")," RSE attributes for the source and the destination."),Object(a.b)("p",null,"Some request attributes will impact the source selection. For example, submitter\nwill skip source RSEs which don't match the ",Object(a.b)("inlineCode",{parentName:"p"},"source_replica_expression")," or\n",Object(a.b)("inlineCode",{parentName:"p"},"allow_tape_source")," conditions. It will also ignore requests witch require a\n",Object(a.b)("inlineCode",{parentName:"p"},"transfertool")," that this submitter cannot use. The request attributes are\neither inherited from the rule, or set by another transfer daemon\n(for example: preparer)"),Object(a.b)("p",null,"The next step is to perform the path computation. At this stage, submitter\nuses the distance between RSEs to perform shortest-path computations. If\nmulti-hopping is enabled via ",Object(a.b)("inlineCode",{parentName:"p"},"transfers/use_multihop"),", then the configuration\nvalue ",Object(a.b)("inlineCode",{parentName:"p"},"transfers/hop_penalty")," + the RSE attributes ",Object(a.b)("inlineCode",{parentName:"p"},"available_for_multihop"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"hop_penalty")," will influence the distances for multi-hop paths.\nEach hop, even for single-hop transfers, must respect the protocol\ncompatibility between the source of the hop and its destination. The\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/1b8ca368523d13fd11bc0b32c14528f2fcec778b/lib/rucio/common/constants.py#L48"},"SCHEME_MAP"),"\nconstant defines the compatibility between protocols. Only protocols with\nnon-zero ",Object(a.b)("inlineCode",{parentName:"p"},"third_party_copy_read")," will be considered for source RSEs, ordered\nby priority. Same for the destination: ",Object(a.b)("inlineCode",{parentName:"p"},"third_party_copy_write")," is used."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": distances between RSEs which are set by the administrator via"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"rucio-admin rse add-distance --distance 1 --ranking 1 RSE1 RSE2\n")),Object(a.b)("p",null,"Once all valid paths are found, after all the filtering done previously,\nthe paths are ordered using the following simple\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/608c9b1dc834f07396cc49dfcbc3daa613b61d56/lib/rucio/core/transfer.py#L905"},"rules"),"\n:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the source ranking is compared first. Source ranking is an integer which is\ndecreased each time a particular source is found to have an issue to perform\nthis particular transfer. It is thus equal to 0 at first try, and decreased\nat transfer failure before re-trying the transfer. This ensures that\nproblematic sources are much less likely to be re-used."),Object(a.b)("li",{parentName:"ul"},"On equal source ranking, the RSE type is checked. Disk sources are preferred\nover tape."),Object(a.b)("li",{parentName:"ul"},"On equal source RSE type, the distance between the source RSE and the\ndestination RSE is compared."),Object(a.b)("li",{parentName:"ul"},"On equal distance, we prefer single-hop paths.")),Object(a.b)("p",null,"In its final step before submission, submitter will check in order the\npaths from the previous steps until it finds one which can be submitted by\nany of the transfertools configured in ",Object(a.b)("inlineCode",{parentName:"p"},"conveyor/transfertool"),". Here\ntransfertool-specific RSE attributes enter into the equation. For example,\nthe fts3 transfertool requires an ",Object(a.b)("inlineCode",{parentName:"p"},"fts")," RSE attribute with a list of fts\nservers; while the globus transfertool requires the ",Object(a.b)("inlineCode",{parentName:"p"},"globus_endpoint_id"),"\nattribute on both source and destination RSE."),Object(a.b)("p",null,"If a path can be submitted, all missing hops are created into the database,\nand submitter goes to the submission step, which is straightforward and\nconsists of calling the transfertool with the correct arguments."))}p.isMDXComponent=!0},437:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return r?i.a.createElement(h,s(s({ref:t},l),{},{components:r})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);