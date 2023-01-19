(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(457)),i=["components"],s={id:"s3_rse_config",title:"S3 Storage Configuration"},c={unversionedId:"s3_rse_config",id:"s3_rse_config",isDocsHomePage:!1,title:"S3 Storage Configuration",description:"S3 Storage Configuration (FTS3 & GFAL2)",source:"@site/../docs/s3_rse_config.md",sourceDirName:".",slug:"/s3_rse_config",permalink:"/documentation/s3_rse_config",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/s3_rse_config.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1674120955,formattedLastUpdatedAt:"1/19/2023",frontMatter:{id:"s3_rse_config",title:"S3 Storage Configuration"},sidebar:"docs",previous:{title:"Policy Packages",permalink:"/documentation/policy_packages"},next:{title:"rucio-abacus-account",permalink:"/documentation/bin/rucio-abacus-account"}},l=[{value:"S3 Storage Configuration (FTS3 &amp; GFAL2)",id:"s3-storage-configuration-fts3--gfal2",children:[{value:"FTS3 &amp; GFAL2 Specifications",id:"fts3--gfal2-specifications",children:[]},{value:"How to Setup an S3 RSE",id:"how-to-setup-an-s3-rse",children:[]},{value:"Rucio Specifications",id:"rucio-specifications",children:[]}]}],p={toc:l};function u(e){var t=e.components,s=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"s3-storage-configuration-fts3--gfal2"},"S3 Storage Configuration (FTS3 & GFAL2)"),Object(o.b)("p",null,"Rucio supports S3 storages which can be configured and used as RSEs. This section describes the steps needed to setup and use an S3 storage RSE when using FTS3 as the transfer tool and GFAL2 as the file access library."),Object(o.b)("h3",{id:"fts3--gfal2-specifications"},"FTS3 & GFAL2 Specifications"),Object(o.b)("p",null,"There are two ways in which one can employ ",Object(o.b)("a",{parentName:"p",href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html#s3-support"},"FTS3"),"  and ",Object(o.b)("a",{parentName:"p",href:"https://dmc-docs.web.cern.ch/dmc-docs/gfal2/plugins.html#gfal2-plugin-http"},"GFAL2")," (",Object(o.b)("a",{parentName:"p",href:"https://davix.web.cern.ch/davix/docs/devel/cloud-support.html#amazon-s3"},"davix"),") to communicate with an S3 storage:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html"},"pre-signed")," URLs which can be used to access and modify the resources. In this case the endpoint protocol must be ",Object(o.b)("inlineCode",{parentName:"p"},"https://")," and the user must pre-sign the URL before presenting it to the tools. Please note that in the case of FTS3, the actual timestamp that the transfer will initiate cannot be known a priori, so a pre-signed URL with a predefined lifetime can expire before the beginning of the transfer. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Delegating the signature of the URL to FTS3 and GFAL2. This requires providing the relevant configurations (",Object(o.b)("a",{parentName:"p",href:"https://dmc-docs.web.cern.ch/dmc-docs/gfal2/plugins.html#for-a-specific-host"},"gfal_config")," & ",Object(o.b)("a",{parentName:"p",href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html#configuration"},"fts_config"),") and using ",Object(o.b)("inlineCode",{parentName:"p"},"s3s://")," as the endpoint protocol. In this case the user must also be cautious to use the ",Object(o.b)("inlineCode",{parentName:"p"},"alternate")," configuration/flag appropriately. This will guide the usage of the ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html"},"Path-Style")," URL (",Object(o.b)("inlineCode",{parentName:"p"},"alternate=true"),") or the ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html"},"Virtual-Style")," URL (",Object(o.b)("inlineCode",{parentName:"p"},"alternate=false"),") during the signing process. Please note that FTS3 currently cannot handle transfers between S3 path-style URLs to S3 virtual-style URLs and vice versa. The ",Object(o.b)("inlineCode",{parentName:"p"},"alternate")," flag affects all endpoints in the submitted job, thus all S3 endpoints should adhere to the same URL-style."))),Object(o.b)("h3",{id:"how-to-setup-an-s3-rse"},"How to Setup an S3 RSE"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the RSE. Upon executing ",Object(o.b)("inlineCode",{parentName:"p"},"rucio-admin rse info <RSE>")," command one should     have the following indicative result for the protocols section:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'                                .\n                                .\nProtocols:\n==========\nhttps\n    domains: \'{"lan": {"read": 1, "write": 1, "delete": 1}, "wan":..}\'\n    extended_attributes: None\n    hostname: <S3_HOSTNAME>\n    impl: rucio.rse.protocols.gfal.Default\n    port: 443\n    prefix: <PATH> # bucket name in case of path-style URLs\n    scheme: https\n                                .\n                                .\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set the following RSE attributes:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sign_url: s3\nskip_upload_stat: True\nverify_checksum: False\nstrict_copy: True\ns3_url_style: path(default)|virtual\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy the S3 configuration to the Rucio servers and restart servers:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'# vim /opt/rucio/etc/rse-accounts.cfg\n{\n    "f4dc2967e329vdf5a73c154eb8d9ffae": {  #rse_id\n            "access_key": "...",\n            "secret_key": "...",\n            "signature_version": "s3v4",   # must be s3v4\n            "region": "us-west-2"          # adapt as necessary\n    },\n    ...\n}\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Give every Rucio account the following attribute to be able to sign URLs:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"rucio-admin account add-attribute <accountname> --key sign-gcs --value true\n")),Object(o.b)("p",{parentName:"li"},"In order for this step to be effective, one has to make sure the relevant permission is given when the sign-gcs key is present for the account, for example ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rizart/rucio/blob/88984a4dbc9d8be4e254f61545c7066e6c67de56/lib/rucio/core/permission/atlas.py#L1152"},"this")," is the way it is currently done for ATLAS."))),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure FTS3 to be able to use the same access and secret keys as you did for the Rucio servers:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You need to have access to the FTS3 server config page",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Visit ",Object(o.b)("inlineCode",{parentName:"li"},"<fts_server>:8446/config/cloud_storage")))),Object(o.b)("li",{parentName:"ul"},"Add a new cloud storage (the name should be ",Object(o.b)("inlineCode",{parentName:"li"},"S3:<URL>"),")"),Object(o.b)("li",{parentName:"ul"},"Configure the added cloud storage as the following indicative example:")),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"image",src:n(520).default})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"*")," to User to include all users. If this cannot be done via the UI you need to contact the people who manage your FTS3 server."),Object(o.b)("li",{parentName:"ul"},"Configure the VO roles"),Object(o.b)("li",{parentName:"ul"},"Add the ",Object(o.b)("strong",{parentName:"li"},"access token")," and the ",Object(o.b)("strong",{parentName:"li"},"access secret"),", these correspond to the ",Object(o.b)("strong",{parentName:"li"},"access_key")," and ",Object(o.b)("strong",{parentName:"li"},"secret_key")," you also configured for Rucio.")))),Object(o.b)("h3",{id:"rucio-specifications"},"Rucio Specifications"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When a client tries ",Object(o.b)("strong",{parentName:"p"},"rucio upload")," & ",Object(o.b)("strong",{parentName:"p"},"rucio download"),", or when the ",Object(o.b)("strong",{parentName:"p"},"reaper")," daemon tries to delete data, Rucio pre-signs the S3 URL and passes that signed URL to GFAL2. GFAL2 needs ",Object(o.b)("inlineCode",{parentName:"p"},"https://")," as the scheme for the protocol when this is the case.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When the ",Object(o.b)("strong",{parentName:"p"},"conveyor-submitter")," daemon submits a transfer to FTS3, it does not pre-sign the URL but it depends on the FTS3 server to do so (Step 5 of the configuration in the previous section), in this case the proper scheme to use for the protocol is ",Object(o.b)("inlineCode",{parentName:"p"},"s3s://"),", Rucio will automatically translate ",Object(o.b)("inlineCode",{parentName:"p"},"https -> s3s")," in order to submit the transfer properly. The approach of not pre-signing the URL is necessary since those URLs have an expiration time and there is no guarantee of when the FTS3 transfer will really happen. This way, FTS3 signs the URL just before the transfer actually starts."))))}u.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[b]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},520:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/fts_s3_config-150fea18fe651532e02e25a06ff8707d.png"}}]);