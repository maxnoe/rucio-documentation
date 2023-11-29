"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"using_the_admin_client",title:"Using the Admin Client"},l=void 0,s={unversionedId:"user/using_the_admin_client",id:"user/using_the_admin_client",title:"Using the Admin Client",description:"Rucio provides a CLI for administrative tasks. The get methods can be executed",source:"@site/../docs/user/using_the_admin_client.md",sourceDirName:"user",slug:"/user/using_the_admin_client",permalink:"/documentation/user/using_the_admin_client",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/using_the_admin_client.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1701259286,formattedLastUpdatedAt:"Nov 29, 2023",frontMatter:{id:"using_the_admin_client",title:"Using the Admin Client"},sidebar:"docs",previous:{title:"Using the Client",permalink:"/documentation/user/using_the_client"},next:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"}},u={},d=[{value:"Account and identity methods",id:"account-and-identity-methods",level:2},{value:"Scope methods",id:"scope-methods",level:2},{value:"RSE methods",id:"rse-methods",level:2},{value:"Replica methods",id:"replica-methods",level:2}],p={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rucio provides a CLI for administrative tasks. The get methods can be executed\nby any user, but the set methods require some admin privileges. See the\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/bin/rucio-admin"},"rucio-admin help page"),"."),(0,o.kt)("h2",{id:"account-and-identity-methods"},"Account and identity methods"),(0,o.kt)("p",null,"To create a new account::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe\n")),(0,o.kt)("p",null,"You can choose different types in the list USER, GROUP, SERVICE. Different\npolicies/permissions can be set depending on the account type.  Once the account\nis created, you need to create and attach an identity to this account::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin identity add --type X509 \\\n      --id "CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah" \\\n      --email jdoe@blahblih.com --account jdoe\n')),(0,o.kt)("p",null,"The list of possible identity types is X509, GSS, USERPASS, SSH::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-identities jdoe\n  Identity: CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah,        type: X509\n")),(0,o.kt)("p",null,"You can set attributes to the users::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add-attribute --key country --value xyz jdoe\n")),(0,o.kt)("p",null,"And list these attributes::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-attributes jdoe\n  +---------+-------+\n  | Key     | Value |\n  |---------+-------|\n  | country | xyz   |\n  +---------+-------+\n")),(0,o.kt)("p",null,"You can also list all the accounts matching a certain attribute using the filter\noption::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin account list --filters "country=xyz"\n  jdoe\n')),(0,o.kt)("p",null,"To set the quota for one account on a given RSE::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account set-limits jdoe SITE2_SCRATCH 10000000000000\n  Set account limit for account jdoe on RSE SITE2_SCRATCH: 10.000 TB\n  $ rucio-admin account get-limits dcameron SITE2_SCRATCH\n  Quota on SITE2_SCRATCH for jdoe : 10 TB\n")),(0,o.kt)("h2",{id:"scope-methods"},"Scope methods"),(0,o.kt)("p",null,"To create a new scope::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope add --account jdoe --scope user.jdoe\n")),(0,o.kt)("p",null,"Only the owner of the scope or privileged users can write into the scope."),(0,o.kt)("p",null,"To list all the scopes::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope list\n  user.janedoe\n  user.jdoe\n")),(0,o.kt)("h2",{id:"rse-methods"},"RSE methods"),(0,o.kt)("p",null,"To create a new RSE::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse add SITE2_SCRATCH\n")),(0,o.kt)("p",null,"To add a RSE attribute::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse set-attribute --rse SITE2_SCRATCH --key country --value xyz\n")),(0,o.kt)("p",null,"To check an RSE attribute::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse get-attribute SITE2_SCRATCH\n  country: xyz\n")),(0,o.kt)("h2",{id:"replica-methods"},"Replica methods"),(0,o.kt)("p",null,"To declare bad (i.e. corrupted or lost replicas)::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin replicas declare-bad --reason "File corrupted" https//path/to/lost/file\n')))}h.isMDXComponent=!0}}]);