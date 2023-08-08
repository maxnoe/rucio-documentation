"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"configure-rucio-globus",title:"Configure Rucio To Use Globus Online as a Transfer Tool",sidebar_label:"Configure Rucio To Use Globus Online as a Transfer Tool"},l=void 0,u={unversionedId:"operator/transfers/configure-rucio-globus",id:"operator/transfers/configure-rucio-globus",title:"Configure Rucio To Use Globus Online as a Transfer Tool",description:"This document walks through an example configuration of Rucio to use Globus",source:"@site/../docs/operator/transfers/configure_globus_transfertool.md",sourceDirName:"operator/transfers",slug:"/operator/transfers/configure-rucio-globus",permalink:"/documentation/operator/transfers/configure-rucio-globus",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/configure_globus_transfertool.md",tags:[],version:"current",lastUpdatedBy:"Anton Schwarz",lastUpdatedAt:1691495558,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"configure-rucio-globus",title:"Configure Rucio To Use Globus Online as a Transfer Tool",sidebar_label:"Configure Rucio To Use Globus Online as a Transfer Tool"},sidebar:"docs",previous:{title:"Transfers Submitter",permalink:"/documentation/operator/transfers/transfers-submitter"},next:{title:"DID Metadata",permalink:"/documentation/operator/did_meta"}},c={},p=[{value:"Register Application with Globus",id:"register-application-with-globus",level:2},{value:"RSE Setup",id:"rse-setup",level:2},{value:"Rucio Configuration File",id:"rucio-configuration-file",level:2},{value:"Globus Configuration File",id:"globus-configuration-file",level:2}],f={toc:p},d="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document walks through an example configuration of Rucio to use Globus\nOnline as a transfer tool. There are four configuration points shown here:\nregistration of your application with Globus, RSE setup (properties and\nparameters), the Rucio configuration file rucio.cfg and the Globus configuration\nfile config.yml."),(0,a.kt)("p",null,"Use of both Globus Server endpoints and Globus Personal endpoints has been\ntested with the below approach. Creation of the Globus endpoints is outside the\nscope here. Some knowledge of Rucio setup and familiarity with Globus\nconfiguration is presumed."),(0,a.kt)("h2",{id:"register-application-with-globus"},"Register Application with Globus"),(0,a.kt)("p",null,"Using Globus Online as a transfer tool requires\n",(0,a.kt)("a",{parentName:"p",href:"https://developers.globus.org"},"registering")," the client application with Globus\nOnline. Be sure to select Native App and include a scope for\nurn:globus:auth:scope:transfer.api.globus.org:all. Once you have the Client ID\nyou\u2019ll need to install the globus sdk and run the below Python code to obtain a\nrefresh token."),(0,a.kt)("p",null,"There is a ",(0,a.kt)("a",{parentName:"p",href:"https://globus-sdk-python.readthedocs.io/en/stable/tutorial.html"},"helpful\nwalk-through"),"\nthat goes into more detail around OAuth and token retrieval."),(0,a.kt)("p",null,"Obtain a refresh token to access Globus resources:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# obtain authorization code\nimport globus_sdk\nCLIENT_ID = '' # your client ID obtained from registering application\nclient = globus_sdk.NativeAppAuthClient(CLIENT_ID)\nclient.oauth2_start_flow(refresh_tokens=True)\nclient.oauth2_get_authorize_url() # Use URL returned here to obtain the authorization\nAUTH_CODE = '' # Use authorization code returned by authenticating to Globus Online\n\n# use the authorization code to create a refresh token\ntoken_response = client.oauth2_exchange_code_for_tokens(AUTH_CODE)\nrefresh_token = token_response.by_resource_server['transfer.api.globus.org']['refresh_token']\n")),(0,a.kt)("h2",{id:"rse-setup"},"RSE Setup"),(0,a.kt)("p",null,"Below shows a typical setup for a test RSE. Options for CLI given when\nsupported."),(0,a.kt)("p",null,"The following code will create a non-determinisic RSE."),(0,a.kt)("p",null,"Python:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# set up the target non-deterministic rse (TEST_RSE)\nfrom rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\nrse_properties = {\n  'ASN': 'ASN',\n  'availability': 7,\n  'deterministic': False,\n  'volatile': False,\n  'city': 'Upton',\n  'region_code': 'DE',\n  'country_name': 'US',\n  'continent': 'NA',\n  'time_zone': 'America/New_York',\n  'ISP': None, 'staging_area': False,\n  'rse_type': 'DISK',\n  'longitude': 40.868352,\n  'latitude': -72.878871\n}\nr = rseclient.add_rse(rse_name, **rse_properties) # r is true on success\n")),(0,a.kt)("p",null,"CLI alternative: RSE creation not supported at time of writing of this document\nas there is no way to pass the properties."),(0,a.kt)("p",null,"The following code creates a schema to connect to Globus for the RSE created\nabove."),(0,a.kt)("p",null,"Python:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\n# Globus scheme\nprefix = '/~/scratch-space/' # Be sure to use a relative path for your endpoint\nparams = {\n  'scheme': 'globus',\n  'prefix': prefix,\n  'impl': 'rucio.rse.protocols.globus.GlobusRSEProtocol',\n  'third_party_copy': 1,\n  'domains': {\n    \"lan\": {\"read\": 1,\"write\": 1,\"delete\": 1},\n    \"wan\": {\"read\": 1,\"write\": 1,\"delete\": 1}\n  }\n}\np = rseclient.add_protocol(rse_name, params) # p is true on success\n")),(0,a.kt)("p",null,"CLI alternative: (the hostname value is required for the CLI command but is\narbitrary as it is ultimately not used in the scheme):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'> rucio-admin rse add-protocol --scheme \'globus\' --prefix \'/~/scratch-space\' \\\n    --impl \'rucio.rse.protocols.globus.GlobusRSEProtocol\' --domain-json \\\n    \'{"wan": {"read": 1, "write": 1, "third_party_copy": 1, "delete": 1}, \\\n    "lan": {"read": 1, "write": 1, "third_party_copy": 1, "delete": 1}}\' \\\n    --hostname \'globus_online\' TEST_RSE\n')),(0,a.kt)("p",null,"The following code sets some attributes for the RSE."),(0,a.kt)("p",null,"Python:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\n\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'naming_convention', value = 'bnl') # This is the value for relative SURL\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'globus_endpoint_id', value = 'd6ae63d8-503f-11e9-a620-0a54e005f849')\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'istape', value = False)\n")),(0,a.kt)("p",null,"CLI alternative:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> rucio-admin rse set-attribute --rse TEST_RSE --key naming_convention --value bnl\n> rucio-admin rse set-attribute --rse TEST_RSE --key globus_endpoint_id --value d6ae63d8-503f-11e9-a620-0a54e005f849\n> rucio-admin rse set-attribute --rse TEST_RSE --key istape --value false\n")),(0,a.kt)("h2",{id:"rucio-configuration-file"},"Rucio Configuration File"),(0,a.kt)("p",null,"The Rucio configuration file rucio.cfg should contain the following for the\nconveyor mechanism. More schemes can be included but globus is required. You\nonly need the file scheme if you plan on using the upload method for\nreplicas. If the transfertype value is bulk Rucio will bundle many files into a\ntransfer task. If single then each file will be submitted on individual transfer\ntasks.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[conveyor]\nscheme = file,globus\ntransfertool = globus\ntransfertype = bulk\nglobus_auth_app = MyGlobusAuthApp\n")),(0,a.kt)("p",null,"globus_auth_app is the application given in config.yml (see below)"),(0,a.kt)("h2",{id:"globus-configuration-file"},"Globus Configuration File"),(0,a.kt)("p",null,"The Globus configuration file ./lib/rucio/transfertool/config.yml is a file of\nYAML syntax and should include at minimum the registered application name, the\nclient ID and refresh token:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"globus:\n  apps:\n    RucioGlobusXferNativeApp:\n      client_id: a758...\n      refresh_token: Agjo...\n")))}g.isMDXComponent=!0}}]);