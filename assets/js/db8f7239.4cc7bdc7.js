(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{383:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(441)),a=["components"],c={title:"Permission model"},s={unversionedId:"permission_model",id:"permission_model",isDocsHomePage:!1,title:"Permission model",description:"Rucio assigns permissions to accounts. Permissions are boolean flags",source:"@site/../docs/permission_model.md",sourceDirName:".",slug:"/permission_model",permalink:"/documentation/permission_model",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/permission_model.md",version:"current",lastUpdatedBy:"maany",lastUpdatedAt:1661786023,formattedLastUpdatedAt:"8/29/2022",frontMatter:{title:"Permission model"},sidebar:"docs",previous:{title:"Metadata attributes",permalink:"/documentation/metadata_attributes"},next:{title:"Replica management with replication rules",permalink:"/documentation/replica_management"}},p=[],u={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rucio assigns permissions to accounts. Permissions are boolean flags\ndesignating whether an account may perform a certain action (read,\nwrite, delete) on a resource (RSE, account, replica, etc.)."),Object(i.b)("p",null,"Rucio comes with a generic permission policy including a typical set of\npermissions. This policy can be replaced with a more fitting permission\nfile representing the policies of the community using Rucio."))}l.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(a,".").concat(d)]||l[d]||m[d]||i;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);