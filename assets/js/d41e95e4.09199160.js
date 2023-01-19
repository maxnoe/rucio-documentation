(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{388:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),c=n(7),r=(n(0),n(457)),o=["components"],i={id:"using_the_admin_client",title:"Using the Admin Client"},l={unversionedId:"using_the_admin_client",id:"using_the_admin_client",isDocsHomePage:!1,title:"Using the Admin Client",description:"Rucio provides a CLI for administrative tasks. The get methods can be executed",source:"@site/../docs/using_the_admin_client.md",sourceDirName:".",slug:"/using_the_admin_client",permalink:"/documentation/using_the_admin_client",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/using_the_admin_client.md",version:"current",lastUpdatedBy:"Rizart Dona",lastUpdatedAt:1674120966,formattedLastUpdatedAt:"1/19/2023",frontMatter:{id:"using_the_admin_client",title:"Using the Admin Client"},sidebar:"docs",previous:{title:"Using the Client",permalink:"/documentation/using_the_client"},next:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"}},s=[{value:"Account and identity methods",id:"account-and-identity-methods",children:[]},{value:"Scope methods",id:"scope-methods",children:[]},{value:"RSE methods",id:"rse-methods",children:[]},{value:"Replica methods",id:"replica-methods",children:[]}],u={toc:s};function d(e){var t=e.components,n=Object(c.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Rucio provides a CLI for administrative tasks. The get methods can be executed\nby any user, but the set methods require some admin privileges. See the\n",Object(r.b)("a",{parentName:"p",href:"/documentation/bin/rucio-admin"},"rucio-admin help page"),"."),Object(r.b)("h2",{id:"account-and-identity-methods"},"Account and identity methods"),Object(r.b)("p",null,"To create a new account::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe\n")),Object(r.b)("p",null,"You can choose different types in the list USER, GROUP, SERVICE. Different\npolicies/permissions can be set depending on the account type.  Once the account\nis created, you need to create and attach an identity to this account::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin identity add --type X509 --id "/DC=blah/DC=blih/OU=Organic \\\n    Units/OU=Users/CN=jdoe" --email jdoe@blahblih.com --account jdoe\n')),Object(r.b)("p",null,"The list of possible identity types is X509, GSS, USERPASS, SSH::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-identities jdoe\n  Identity: /DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe,        type: X509\n")),Object(r.b)("p",null,"You can set attributes to the users::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add-attribute --key country --value xyz jdoe\n")),Object(r.b)("p",null,"And list these attributes::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-attributes jdoe\n  +---------+-------+\n  | Key     | Value |\n  |---------+-------|\n  | country | xyz   |\n  +---------+-------+\n")),Object(r.b)("p",null,"You can also list all the accounts matching a certain attribute using the filter\noption::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin account list --filters "country=xyz"\n  jdoe\n')),Object(r.b)("p",null,"To set the quota for one account on a given RSE::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account set-limits jdoe SITE2_SCRATCH 10000000000000\n  Set account limit for account jdoe on RSE SITE2_SCRATCH: 10.000 TB\n  $ rucio-admin account get-limits dcameron SITE2_SCRATCH\n  Quota on SITE2_SCRATCH for jdoe : 10 TB\n")),Object(r.b)("h2",{id:"scope-methods"},"Scope methods"),Object(r.b)("p",null,"To create a new scope::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope add --account jdoe --scope user.jdoe\n")),Object(r.b)("p",null,"Only the owner of the scope or privileged users can write into the scope."),Object(r.b)("p",null,"To list all the scopes::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope list\n  user.janedoe\n  user.jdoe\n")),Object(r.b)("h2",{id:"rse-methods"},"RSE methods"),Object(r.b)("p",null,"To create a new RSE::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse add SITE2_SCRATCH\n")),Object(r.b)("p",null,"To add a RSE attribute::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse set-attribute --rse SITE2_SCRATCH --key country --value xyz\n")),Object(r.b)("p",null,"To check an RSE attribute::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse get-attribute SITE2_SCRATCH\n  country: xyz\n")),Object(r.b)("h2",{id:"replica-methods"},"Replica methods"),Object(r.b)("p",null,"To declare bad (i.e. corrupted or lost replicas)::"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin replicas declare-bad --reason "File corrupted" https//path/to/lost/file\n')))}d.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?c.a.createElement(m,i(i({ref:t},s),{},{components:n})):c.a.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[b]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);