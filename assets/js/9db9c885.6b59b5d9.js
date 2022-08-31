(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),s=(n(0),n(441)),o=["components"],i={title:"Replication rule examples"},c={unversionedId:"replication_rules_examples",id:"replication_rules_examples",isDocsHomePage:!1,title:"Replication rule examples",description:"Replica management is based on replication rules defined on data identifiers. A",source:"@site/../docs/replication_rules_examples.md",sourceDirName:".",slug:"/replication_rules_examples",permalink:"/documentation/replication_rules_examples",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/replication_rules_examples.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1661943496,formattedLastUpdatedAt:"8/31/2022",frontMatter:{title:"Replication rule examples"},sidebar:"docs",previous:{title:"Replica management with replication rules",permalink:"/documentation/replica_management"},next:{title:"RSE Expressions",permalink:"/documentation/rse_expressions"}},l=[{value:"Examples",id:"examples",children:[{value:"I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs",id:"i-want-to-have-2-replicas-of-first_dataset-and-second_dataset-on-tier-1-rses",children:[]},{value:"I want to have 2 replicas on whatever T2 RSEs in the UK but not in Glasgow",id:"i-want-to-have-2-replicas-on-whatever-t2-rses-in-the-uk-but-not-in-glasgow",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Replica management is based on replication rules defined on data identifiers. A\nreplication rule gets resolved and issues replica locks on the physical\nreplicas."),Object(s.b)("p",null,"A replication rule consists (besides other parameters) of a factor representing\nthe numbers of replicas wanted and a Rucio Storage Element Expression that\nallows to select a set of probable RSEs to store the replicas."),Object(s.b)("p",null,"The ",Object(s.b)("a",{parentName:"p",href:"/documentation/rse_expressions"},Object(s.b)("strong",{parentName:"a"},"RSE Expression"))," gets resolved into a set of RSEs,\nwhich are possible destination RSEs for the number of replicas the user wants to\ncreate."),Object(s.b)("p",null,"Is possible to find detailed information and examples about how to write RSE\nExpressions ",Object(s.b)("a",{parentName:"p",href:"/documentation/rse_expressions"},Object(s.b)("strong",{parentName:"a"},"here")),"."),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"i-want-to-have-2-replicas-of-first_dataset-and-second_dataset-on-tier-1-rses"},"I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs"),Object(s.b)("p",null,"The number 2 ",Object(s.b)("em",{parentName:"p"},"second_dataset")," is the number of copies expected. At the end, the\nRSE Expression select all the Tier 1 RSEs as possible targets to store the\nreplicas.:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'tier=1'\n")),Object(s.b)("p",null,"To see all the possible targets, ",Object(s.b)("strong",{parentName:"p"},"rucio list-rses")," command can be used:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio list-rses --rses 'tier=1'\n")),Object(s.b)("h3",{id:"i-want-to-have-2-replicas-on-whatever-t2-rses-in-the-uk-but-not-in-glasgow"},"I want to have 2 replicas on whatever T2 RSEs in the UK but not in Glasgow"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'country=uk\\site=GLASGOW'\n")))}u.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||s;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);