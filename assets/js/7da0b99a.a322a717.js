(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(446)),o=["components"],s={title:"Files, Datasets, and Containers"},l={unversionedId:"file_dataset_container",id:"file_dataset_container",isDocsHomePage:!1,title:"Files, Datasets, and Containers",description:"As data is physically stored in files, files are also the smallest operational",source:"@site/../docs/file_dataset_container.md",sourceDirName:".",slug:"/file_dataset_container",permalink:"/documentation/file_dataset_container",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/file_dataset_container.md",version:"current",lastUpdatedBy:"maany",lastUpdatedAt:1666782442,formattedLastUpdatedAt:"10/26/2022",frontMatter:{title:"Files, Datasets, and Containers"},sidebar:"docs",previous:{title:"Rucio account",permalink:"/documentation/rucio_account"},next:{title:"Rucio Storage Element",permalink:"/documentation/rucio_storage_element"}},c=[{value:"Data identifiers and scope",id:"data-identifiers-and-scope",children:[]},{value:"File, dataset, and container status",id:"file-dataset-and-container-status",children:[{value:"File status",id:"file-status",children:[]},{value:"Dataset/Container status",id:"datasetcontainer-status",children:[]}]},{value:"Footnotes",id:"footnotes",children:[]}],d={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As data is physically stored in files, files are also the smallest operational\nunit of data in Rucio. Sub-file operations are currently not possible. Rucio\nenables users to identify and access on any arbitrary set of files."),Object(r.b)("p",null,"Files can be grouped into datasets (a named set of files) and datasets can be\ngrouped into containers (a named set of datasets or, recursively,\ncontainers). All three types of names refer to data so the term 'data\nidentifier' (DID) is used to represent any set of files, datasets or container\nidentifiers. A data identifier is just the name of a single file, dataset or\ncontainer."),Object(r.b)("h2",{id:"data-identifiers-and-scope"},"Data identifiers and scope"),Object(r.b)("p",null,"Files, datasets and containers follow an identical naming scheme which is\ncomposed of two strings: the scope and a name. The combination of both is called\na data identifier (DID). Thus for files, the Logical File Name (LFN), a term\ncommonly used in DataGrid terminology to identify files is equivalent to the DID\nin Rucio."),Object(r.b)("p",null,"The scope string partitions the namespace into several sub namespaces.  The\nprimary use case for this is to easily separate centrally created data from\nindividual user data."),Object(r.b)("p",null,"By default, accounts have read access to all scopes and write access only to\ntheir own scope. Privileged accounts have write access to multiple scopes, e.g.,\nthe Workload Management System is allowed to write into official data scopes."),Object(r.b)("p",null,"Files, datasets and containers are uniquely identified over all time.  This\nmeans that a data identifier, once used, can never be reused to refer to\nanything else at all, not even if the data it referred to has been deleted from\nthe system."),Object(r.b)("h2",{id:"file-dataset-and-container-status"},"File, dataset, and container status"),Object(r.b)("h3",{id:"file-status"},"File status"),Object(r.b)("p",null,"The following status attributes are supported for files:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"availability"),": LOST/DELETED/AVAILABLE")),Object(r.b)("p",null,"A file is LOST if there are no known replicas of the file in Rucio, while at the\nsame time at least one account requested a replica; a file is DELETED if no\naccount requested a replica; otherwise the file is AVAILABLE. This is a derived\nattribute."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"suppressed"),": True/False")),Object(r.b)("p",null,"This is a user settable flag. It indicates that the owner of the scope no longer\nneeds the name to be present in the scope. Files that are suppressed (by\ndefault) do not show up in search and list operations on the scope. Note however\nthat this flag will be ignored when explicitly listing contents of\ndatasets/containers."),Object(r.b)("h3",{id:"datasetcontainer-status"},"Dataset/Container status"),Object(r.b)("p",null,"The dataset/container status is reflected by a set of attributes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"open"),": True/False")),Object(r.b)("p",null,"If a dataset/container is open, content can be added to it.  Datasets/containers\nare created open and once closed, they cannot be opened again",Object(r.b)("sup",{parentName:"p",id:"fnref-1"},Object(r.b)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"monotonic"),": True/False")),Object(r.b)("p",null,"If the monotonic attribute is set, content cannot be removed from an open\ndataset/container. Datasets/containers are, by default, created\nnon-monotonic. Once set to monotonic, this cannot be reversed."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"complete"),": True/False")),Object(r.b)("p",null,"A dataset/container where all files have replicas available is complete.  Any\ndataset/container which contains files without replicas is incomplete. This is a\nderived attribute."),Object(r.b)("h2",{id:"footnotes"},"Footnotes"),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol",id:"fn-1"},"Datasets from which files have been lost can be repaired when replacement\nfiles are available, even if Open=False. The replacements need not be binary\nidentical to the lost files.",Object(r.b)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,b=u["".concat(o,".").concat(f)]||u[f]||p[f]||r;return n?i.a.createElement(b,s(s({ref:t},c),{},{components:n})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);