(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{271:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var i=t(3),a=t(7),r=(t(0),t(425)),o=["components"],c={id:"installing_server",title:"Installing Rucio Server"},l={unversionedId:"installing_server",id:"installing_server",isDocsHomePage:!1,title:"Installing Rucio Server",description:"Prerequisites",source:"@site/../docs/installing_server.md",sourceDirName:".",slug:"/installing_server",permalink:"/documentation/installing_server",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/installing_server.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1654031600,formattedLastUpdatedAt:"5/31/2022",frontMatter:{id:"installing_server",title:"Installing Rucio Server"},sidebar:"docs",previous:{title:"UploadClient",permalink:"/documentation/client_api/uploadclient"},next:{title:"Installing Rucio Daemons",permalink:"/documentation/installing_daemons"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install via pip",id:"install-via-pip",children:[]},{value:"Install via Docker",id:"install-via-docker",children:[]},{value:"Environment Variables",id:"environment-variables",children:[{value:"RUCIO_ENABLE_SSL",id:"rucio_enable_ssl",children:[]},{value:"RUCIO_SSL_PROTOCOL",id:"rucio_ssl_protocol",children:[]},{value:"RUCIO_CA_PATH",id:"rucio_ca_path",children:[]},{value:"RUCIO_DEFINE_ALIASES",id:"rucio_define_aliases",children:[]},{value:"RUCIO_ENABLE_LOGS",id:"rucio_enable_logs",children:[]},{value:"RUCIO_LOG_LEVEL",id:"rucio_log_level",children:[]},{value:"RUCIO_LOG_FORMAT",id:"rucio_log_format",children:[]},{value:"RUCIO_HOSTNAME",id:"rucio_hostname",children:[]},{value:"RUCIO_SERVER_ADMIN",id:"rucio_server_admin",children:[]}]},{value:"RUCIO_CFG configuration parameters",id:"rucio_cfg-configuration-parameters",children:[]},{value:"Server Configuration for Open ID Connect AuthN/Z",id:"server-configuration-for-open-id-connect-authnz",children:[]}],u={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"The Rucio server runs on Python 2.7, 3.6 and 3.7 on any Unix-like platform."),Object(r.b)("h2",{id:"install-via-pip"},"Install via pip"),Object(r.b)("p",null,"Heads up: We recommend to use the docker-based install (see next section) as it\nwill configure many things for you automatically. Only use the pip-based install\nif you have a good reason and know how to configure your webservices manually:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"pip install rucio\n")),Object(r.b)("p",null,"This will pull the latest release from\n",Object(r.b)("a",{parentName:"p",href:"https://pypi.python.org/pypi/rucio/"},Object(r.b)("strong",{parentName:"a"},"PyPi")),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/requirements.txt"},Object(r.b)("inlineCode",{parentName:"a"},"requirements.txt")),"\nand will be pulled in as necessary."),Object(r.b)("h2",{id:"install-via-docker"},"Install via Docker"),Object(r.b)("p",null,"A simple server without SSL can be started like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server -p 80:80 -d rucio/rucio-server\n")),Object(r.b)("p",null,"This will start up a simple server using sqlite based on an automatically\ngenerated configuration. You can check if the server is running with"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost/ping\n")),Object(r.b)("p",null,"This should return the Rucio version used in the container. Any other curl\nrequests will not work as the database backend is not initialized as this image\nis meant to be used with an already bootstrapped database backend. I.e., that\nthe container has to be configured to point to the correct database. There are\ntwo ways to manage the Rucio configuration: using environment variables or by\nmounting a full rucio.cfg."),Object(r.b)("p",null,"If you want to set the connection string for the database it can be done using\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT")," environment variable, e.g., to start a\ncontainer connecting to a MySQL DB running at ",Object(r.b)("inlineCode",{parentName:"p"},"mysql.db")," you could use something\nlike this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'docker run --name=rucio-server \\\n  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \\\n  -p 80:80 \\\n  -d \\\n  rucio/rucio-server\n')),Object(r.b)("p",null,"The are much more configuration parameters available that will be listed at the\nend of this readme."),Object(r.b)("p",null,"Another way to configure Rucio is to directly mount a complete rucio.cfg into\nthe container. This will then be used instead of the auto-generated one, e.g.,\nif you have a rucio.cfg ready on your host system under ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp/rucio.cfg")," you\ncould start a container like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -p 80:80 \\\n  -d \\\n  rucio/rucio-server\n")),Object(r.b)("p",null,"The rucio.cfg is used to configure the database backend."),Object(r.b)("p",null,"If you want to enable SSL you would need to set the ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_SSL")," variable\nand also need to include the host certificate, key and the the CA certificate as\nvolumes. E.g.,:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/ca.pem:/etc/grid-security/ca.pem \\\n  -v /tmp/hostcert.pem:/etc/grid-security/hostcert.pem \\\n  -v /tmp/hostkey.pem:/etc/grid-security/hostkey.pem \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -p 443:443 \\\n  -e RUCIO_ENABLE_SSL=True \\\n  -d \\\n  rucio/rucio-server\n")),Object(r.b)("p",null,"By default the output of the Apache web server is written directly to stdout and\nstderr. If you would rather direct them into separate files it can be done using\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_LOGS")," variable. The storage folder of the logs can be used as\na volume:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -v /tmp/logs:/var/log/httpd \\\n  -p 80:80 \\\n  -e RUCIO_ENABLE_LOGS=True \\\n  -d \\\n  rucio/rucio-server\n")),Object(r.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"As shown in the examples above the rucio-server image can be configured using\nenvironment variables that are passed with ",Object(r.b)("inlineCode",{parentName:"p"},"docker run"),". Below is a list of all\navailable variables and their behaviour:"),Object(r.b)("h3",{id:"rucio_enable_ssl"},"RUCIO_ENABLE_SSL"),Object(r.b)("p",null,"By default, the rucio server runs without SSL on port 80. If you want to enable\nSSL set this variable to ",Object(r.b)("inlineCode",{parentName:"p"},"True"),". If you enable SSL you will also have to provide\nthe host certificate and key and the certificate authority file. The server will\nlook for ",Object(r.b)("inlineCode",{parentName:"p"},"hostcert.pem"),", ",Object(r.b)("inlineCode",{parentName:"p"},"hostkey.pem")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ca.pem")," under ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/grid-security"),"\nso you will have to mount them as volumes. Furthermore you will also have to\nexpose port 443."),Object(r.b)("h3",{id:"rucio_ssl_protocol"},"RUCIO_SSL_PROTOCOL"),Object(r.b)("p",null,"By default, the server will only accept TLSv1.2 connections. Defining this\nenvironment variable will allow specification of a custom Apache SSLProtocol."),Object(r.b)("h3",{id:"rucio_ca_path"},"RUCIO_CA_PATH"),Object(r.b)("p",null,"If you are using SSL and want use ",Object(r.b)("inlineCode",{parentName:"p"},"SSLCACertificatePath")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"SSLCARevocationPath")," you can do so by specifying the path in this variable."),Object(r.b)("h3",{id:"rucio_define_aliases"},"RUCIO_DEFINE_ALIASES"),Object(r.b)("p",null,"By default, the web server is configured with all common rest endpoints except\nthe authentication endpoint. If you want to specify your own set of aliases you\ncan set this variable to ",Object(r.b)("inlineCode",{parentName:"p"},"True"),". The web server then expects an alias file under\n",Object(r.b)("inlineCode",{parentName:"p"},"/opt/rucio/etc/aliases.conf")),Object(r.b)("h3",{id:"rucio_enable_logs"},"RUCIO_ENABLE_LOGS"),Object(r.b)("p",null,"By default, the log output of the web server is written to stdout and stderr. If\nyou set this variable to ",Object(r.b)("inlineCode",{parentName:"p"},"True")," the output will be written to ",Object(r.b)("inlineCode",{parentName:"p"},"access_log")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"error_log")," under ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/httpd"),"."),Object(r.b)("h3",{id:"rucio_log_level"},"RUCIO_LOG_LEVEL"),Object(r.b)("p",null,"The default log level is ","[info]","{.title-ref}. You can change it using this\nvariable."),Object(r.b)("h3",{id:"rucio_log_format"},"RUCIO_LOG_FORMAT"),Object(r.b)("p",null,"The default rucio log format is\n",Object(r.b)("inlineCode",{parentName:"p"},'%ht%tt%{X-Rucio-Forwarded-For}it%Tt%Dt\\"%{X-Rucio-Auth-Token}i\\"t%{X-Rucio-RequestId}it%{X-Rucio-Client-Ref}it\\"%r\\"t%\\>st%b'),"\nYou can set your own format using this variable."),Object(r.b)("h3",{id:"rucio_hostname"},"RUCIO_HOSTNAME"),Object(r.b)("p",null,"This variable sets the server name in the apache config."),Object(r.b)("h3",{id:"rucio_server_admin"},"RUCIO_SERVER_ADMIN"),Object(r.b)("p",null,"This variable sets the server admin in the apache config."),Object(r.b)("h2",{id:"rucio_cfg-configuration-parameters"},"RUCIO_CFG configuration parameters"),Object(r.b)("p",null,"Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the configuration file\nprefixed by ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG"),", e.g., the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," value in the ",Object(r.b)("inlineCode",{parentName:"p"},"database")," section\nbecomes ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". All available environment variables are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGDIR"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGLEVEL"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_DEFAULT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_ECHO"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POLL_RECYCLE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_SIZE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_TIMEOUT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_MAX_OVERFLOW"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERACCOUNT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_USERPASSWORD"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_SERVER"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_USER_SCOPE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_TRACEDIR"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_BROKERS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_USERNAME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_PASSWORD"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_TOPIC"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_POLICY"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SCHEMA"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_WEBUI_USERCERT")),Object(r.b)("h2",{id:"server-configuration-for-open-id-connect-authnz"},"Server Configuration for Open ID Connect AuthN/Z"),Object(r.b)("p",null,"In order to be able to use JSON web tokens (JWTs) and related OAuth2.0\nauthentication and authorization with Rucio, one first needs to have an account\nwith the Identity Provider (IdP) which will act as Rucio Admin account\nrepresenting the Rucio Application. Currently supported IdPs use Identity Access\nManagement (IAM) system. Once, you have got your Rucio Admin IAM account (and\nits subclaim identifier), you will need to ",Object(r.b)("a",{parentName:"p",href:"https://indigo-iam.github.io/docs/v/current/user-guide/client-registration.html"},Object(r.b)("strong",{parentName:"a"},"register two IAM Rucio\nclients")),"\nlinked to this account. Once it is done, please save the relevant client_id,\nclient_secret, and registration access token (RAT) some place safe, you will be\nneeding them. In both clients, one needs to setup the redirect_uris to include\nboth ",Object(r.b)("a",{parentName:"p",href:"https://%5C%3Cyour_server_name%5C"},"https://\\<your_server_name\\"),"/auth/oidc_token> and\n",Object(r.b)("a",{parentName:"p",href:"https://%5C%3Cyour_server_name%5C"},"https://\\<your_server_name\\"),"/auth/oidc_code> paths. We will use one client as\nRucio Auth IAM client (i.e. client for the authentication and authorization on\nthe Rucio server). This client needs to have ",Object(r.b)("strong",{parentName:"p"},"token exchange"),", ",Object(r.b)("strong",{parentName:"p"},"token\nrefresh"),", and ",Object(r.b)("strong",{parentName:"p"},"authorization code grant")," enabled. For the former two you\nmight need to contact the IAM admin as such settings are usually not accessible\nto IAM users. In addition, you will need to request your IAM admin to allow your\nclient returning refresh tokens with lifetime being visible in their unverified\nheader. In addition Rucio assumes refresh tokens to expire immediatelly after\ntheir first use, which has to be also confirmed by your IAM admin. Second\nclient, let\\'s call it Rucio Admin IAM client, will be used by a Rucio probe\nscript ",Object(r.b)("strong",{parentName:"p"},"check_voms")," in order to synchronize existing Rucio accounts with Rucio\nidentities. Rucio will also use this client\\'s credentials in order to request\ntoken for itself. The IAM administrator must include the ",Object(r.b)("strong",{parentName:"p"},"scim:read")," scope and\nallow ",Object(r.b)("strong",{parentName:"p"},"client credentials")," grant type for the Rucio Admin IAM client in order\nto grant you rights to pre-provision IAM users for Rucio. Examples of the\nconfiguration of these two clients follow below:"),Object(r.b)("p",null,"Example of the Rucio Auth IAM client configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "AbcCDe123...",\n  "registration_access_token": "AbcCDe123...",\n  "redirect_uris": [\n    "https://rucio-auth.cern.ch/auth/oidc_token",\n    "https://rucio-auth.cern.ch/auth/oidc_code",\n  ],\n  "client_name": "rucio-admin-client",\n  "client_uri": null,\n  "logo_uri": null,\n  "contacts": [\n    "jaroslav.guenther@gmail.com"\n  ],\n  "tos_uri": null,\n  "token_endpoint_auth_method": "client_secret_basic",\n  "scope": "address fts phone openid profile offline_access \\\n    rucio email wlcg wlcg.groups fts:submit-transfer",\n  "grant_types": [\n    "refresh_token",\n    "urn:ietf:params:oauth:grant-type:token-exchange",\n    "authorization_code"\n  ],\n  "response_types": [\n    "code"\n  ],\n  "policy_uri": null,\n  "jwks_uri": null,\n  "jwks": null,\n  "jwksType": "URI",\n  "application_type": null,\n  "sector_identifier_uri": null,\n  "subject_type": null,\n  "request_object_signing_alg": null,\n  "userinfo_signed_response_alg": null,\n  "userinfo_encrypted_response_alg": null,\n  "userinfo_encrypted_response_enc": null,\n  "id_token_signed_response_alg": null,\n  "id_token_encrypted_response_alg": null,\n  "id_token_encrypted_response_enc": null,\n  "default_max_age": 60000,\n  "require_auth_time": true,\n  "default_acr_values": null,\n  "initiate_login_uri": null,\n  "post_logout_redirect_uris": null,\n  "claims_redirect_uris": [],\n  "request_uris": [],\n  "software_statement": null,\n  "software_id": null,\n  "software_version": null,\n  "code_challenge_method": null,\n  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/fdc297fc-0907-4a68-9022-3ccc7dd2501a",\n  "client_secret_expires_at": 0,\n  "client_id_issued_at": 1574700620\n}\n')),Object(r.b)("p",null,"Example of the Rucio Admin IAM client configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'{\n  "client_id": "AbcDe123...",\n  "registration_access_token": "AbcDe123...",\n  "client_secret": "AbcDe123...",\n  "redirect_uris": [],\n  "client_name": null,\n  "client_uri": null,\n  "logo_uri": null,\n  "contacts": [\n    "jaroslav.guenther@gmail.com"\n  ],\n  "tos_uri": null,\n  "token_endpoint_auth_method": "client_secret_basic",\n  "scope": "address scim:read phone email wlcg profile \\\n    fts:submit-transfer rucio fts fts:submit-transfer",\n  "grant_types": [\n    "client_credentials"\n  ],\n  "response_types": [],\n  "policy_uri": null,\n  "jwks_uri": null,\n  "jwks": null,\n  "jwksType": "URI",\n  "application_type": null,\n  "sector_identifier_uri": null,\n  "subject_type": null,\n  "request_object_signing_alg": null,\n  "userinfo_signed_response_alg": null,\n  "userinfo_encrypted_response_alg": null,\n  "userinfo_encrypted_response_enc": null,\n  "id_token_signed_response_alg": null,\n  "id_token_encrypted_response_alg": null,\n  "id_token_encrypted_response_enc": null,\n  "default_max_age": 60000,\n  "require_auth_time": true,\n  "default_acr_values": null,\n  "initiate_login_uri": null,\n  "post_logout_redirect_uris": null,\n  "claims_redirect_uris": [],\n  "request_uris": [],\n  "software_statement": null,\n  "software_id": null,\n  "software_version": null,\n  "code_challenge_method": null,\n  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/5b5e5d37-926b-4b42-8a98-a0b4b28baf18",\n  "client_secret_expires_at": 0,\n  "client_id_issued_at": 1574700703\n}\n')),Object(r.b)("p",null,"To make the Rucio server aware of the two clients above, one has to exchange the\nempty dictionary in ",Object(r.b)("strong",{parentName:"p"},"etc/idpsecrets.json")," file with one containing the\nrelevant information. Example of such dictionary (for multiple IdPs) follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "<IdP nickname>": {\n    "redirect_uris": [\n      "https://<server_name>/auth/oidc_token",\n      "https://<server_name>/auth/oidc_code"\n    ],\n    "registration_access_token": "<RAT_string>",\n    "client_secret": "<client_secret>",\n    "SCIM": {\n      "client_secret": "<client_secret>",\n      "grant_type": "client_credentials",\n      "registration_access_token": "<RAT_string>"\n    },\n    "issuer": "https://<issuer_server_name>/"\n  },\n  "wlcg": {\n    "redirect_uris": [\n      "https://rucio-auth.cern.ch/auth/oidc_token",\n      "https://rucio-auth.cern.ch/auth/oidc_code"\n    ],\n    "registration_access_token": "eyJraWQiOi ...",\n    "client_id": "fdc297fc-09 ...",\n    "client_secret": "APFVcga_X ...",\n    "SCIM": {\n      "client_secret": "IQqAcMOa ...",\n      "grant_type": "client_credentials",\n      "registration_access_token": "eyJraW ...",\n      "client_id": "5b5e5d3 ..."\n    },\n    "issuer": "https://wlcg.cloud.cnaf.infn.it/"\n  },\n  "xdc": { ... },\n}\n')),Object(r.b)("p",null,"After this is done, please make sure your ",Object(r.b)("strong",{parentName:"p"},"rucio.cfg")," file contains the\nfollowing section:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cfg"},"[oidc]\nidpsecrets = /path/to/your/idpsecrets.json\nadmin_issuer = <IdP_nickname>\nexpected_audience = '<rucio>'\nexpected_scope = 'openid profile'\n")),Object(r.b)("p",null,"Parameters \\'idpsecrets\\' and \\'admin_issuer\\' have to be present.\n\\<IdP_nickname",">"," stands for your preferred IdP (e.g. \\\"wlcg\\\"). The IdP\nspecified under admin_issuer will be contacted to get information about Rucio\nUsers (SCIM) and to request tokens for the Rucio \\'root\\' account.  The\nexpected_scope and expected_audence parameters are optional and if not filled,\nthe Rucio server will set them to \\'openid profile\\' and \\'rucio\\'\nrespectively. The expected scopes and audiences have to be configured\ncorrespondinly on the side of your registered clienst at your IdP (usually you\ncan control accepted scopes and audiences for your clients via an IdP web\ninterface)."),Object(r.b)("p",null,"To finalise the process, one should assign the OIDC identities to the relevant\nRucio admin_account_name (e.g. \\'root\\', \\'ddmadmin\\'). This identity ID is\ncomposed of the IAM account sub claim and issuer url such as demonstrated below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'rucio-admin identity add --account admin_account_name \\\n  --type OIDC \\\n  --id "SUB=b3127dc7-2be3-417b-9647-6bf61238ad01, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n')),Object(r.b)("p",null,"A second identity has to be added to the same admin_account_name representing\nthe client_credentials flow of the Rucio application, i.e.  of the Rucio Admin\nIAM client from above. This identity consists of the client_id of the Rucio\nAdmin IAM client and the issuer (the token obtained via the client credentials\nflow using the Rucio Admin IAM client will contain in the SUB claim the\nclient_id instead of the IAM account SUB claim):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'rucio-admin identity add --account admin_account_name \\\n  --type OIDC \\\n  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n')),Object(r.b)("p",null,"Note: In case you can not/will not run the Rucio check_scim probe script in\norder to sync Rucio accounts with their IAM identities, you should assign the\nappropriate OIDC identity manually (as in the example above) to each Rucio\naccount which is meant to use the OIDC authN/Z."),Object(r.b)("p",null,"In case you wish to use OIDC by default in order to login to the Rucio WebUI,\none has to configure also another block in the ",Object(r.b)("inlineCode",{parentName:"p"},"rucio.cfg")," file: ",Object(r.b)("inlineCode",{parentName:"p"},"[webui]\nauth_type = oidc auth_issuer = <IdP nickname from the idpsecrets.json file>"),"\nThis is not a mandatory section, if not filled a user will get directed to a\npage with login choices."),Object(r.b)("p",null,"In order to ensure the correct lifetime management of the tokens and auth\nsessions, one also has to run the rucio-oauth-daemon run on the server!"),Object(r.b)("p",null,"Rucio servers may run also conveyor daemon, which is responsible for submission\nof the transfers created in connection with existing Rucio rule. In case both,\nthe source and destination RSEs have attribute {\\'oidc_support\\': True}\nassigned, the Rucio account which created such a rule will be used to request a\nJWT token for OAuth2 authentication with FTS. The issuer of user\\'s token will\nbe used to get a valid OIDC token with the requested audience and scope for FTS\ntransfer. This new token will have either the same identity of the user\n(received after user\\'s token exchange with IdP) or it will have the identity of\nthe Rucio Admin IAM client (client_id will be in the \\'sub\\' claim) (received\nafter client credentials token flow of the admin). If in any of the two formerly\nmentioned cases, valid token is present in Rucio DB beforehand, it will be used\nin the header of the transfer request to FTS and no new token demand will be\nmade to IdP. The OIDC authentication mechanism shall be configured by the\nfollowing parameters in the rucio.cfg file: ",Object(r.b)("inlineCode",{parentName:"p"},"[conveyor]\nallow_user_oidc_tokens = False request_oidc_scope = 'fts:submit-transfer'\nrequest_oidc_audience = 'fts'")," If \\'allow_user_oidc_tokens\\' is set to True\nthe system will attempt to exchange a valid OIDC token (if any) of the account\nthat owns the rule/transfer for a token that has the \\'request_oidc_scope\\' and\n\\'request_oidc_audience\\'. If set to False, the system will use the IdP issuer\nof the account that owns the transfer, will get a Rucio admin client token with\nthe \\'request_oidc_scope\\' and \\'request_oidc_audience\\' and authenticate\nagainst FTS with the Rucio admin client credentials on behalf of the user. The\nallowed scopes and audiences have to be again also configured correspondingly\nfor your clients at the IdP side (usually through IdP web interface)."),Object(r.b)("p",null,"Note aside: For some IdPs it may happen that the scope and audience claims are\nnot a part of the token payload. For this reason Rucio has a fall-back mechanism\nto get this information using the IdPs introspection endpoint. To allow Rucio to\nintrospect tokens that were not issued by its clients, please talk to the IdP\nadmin who should enable this functionality for your clients."))}d.isMDXComponent=!0},425:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=i,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return t?a.a.createElement(h,c(c({ref:n},s),{},{components:t})):a.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);