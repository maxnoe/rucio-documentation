(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{413:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(425)),a=["components"],i={title:"Rucio account"},u={unversionedId:"rucio_account",id:"rucio_account",isDocsHomePage:!1,title:"Rucio account",description:"A Rucio account is the unit of assigning privileges in Rucio. It can",source:"@site/../docs/rucio_account.md",sourceDirName:".",slug:"/rucio_account",permalink:"/documentation/rucio_account",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/rucio_account.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1654031600,formattedLastUpdatedAt:"5/31/2022",frontMatter:{title:"Rucio account"},sidebar:"docs",previous:{title:"Requirements",permalink:"/documentation/requirements"},next:{title:"Files, Datasets, and Containers",permalink:"/documentation/file_dataset_container"}},s=[],p={toc:s};function l(e){var t=e.components,i=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A Rucio account is the unit of assigning privileges in Rucio. It can\nrepresent individual users (such as user1, user2, user3, ",".","..), a group\nof users (such as group1, group2, group3, ",".","..) or a centralized\nproduction activity such as service accounts for data generation\n(datagen) or the workflow management systems (wfms). A Rucio account is\nidentified by a string."),Object(c.b)("p",null,"All interactions with Rucio are always conducted by a Rucio account. A\nRucio user is authenticated by credentials, such as X509 certificates,\nusername/password, SSH, OIDC, or tokens. Credentials can map to one or\nmore accounts (N:M mapping). The Rucio authentication system checks if\nthe used credentials are authorized to use the supplied Rucio account.\nThe figure below gives an example of the mapping between credentials and\nRucio accounts:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"Figure 1",src:n(503).default})))}l.isMDXComponent=!0},425:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||c;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},503:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/accounts-93d4b277c0d0aa69863a288edf7227ba.png"}}]);