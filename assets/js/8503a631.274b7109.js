(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(437)),i=["components"],c={id:"database",title:"Database Operations",sidebar_label:"Database Operations"},l={unversionedId:"database",id:"database",isDocsHomePage:!1,title:"Database Operations",description:"Supported databases",source:"@site/../docs/database.md",sourceDirName:".",slug:"/database",permalink:"/documentation/database",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/database.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1660824701,formattedLastUpdatedAt:"8/18/2022",sidebar_label:"Database Operations",frontMatter:{id:"database",title:"Database Operations",sidebar_label:"Database Operations"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/documentation/monitoring"},next:{title:"Rucio Administration Tricks",permalink:"/documentation/administration"}},s=[{value:"Supported databases",id:"supported-databases",children:[]},{value:"Additional options",id:"additional-options",children:[{value:"Connection pooling",id:"connection-pooling",children:[]}]},{value:"Upgrading and downgrading the database schema",id:"upgrading-and-downgrading-the-database-schema",children:[]},{value:"Creating a new version as a developer",id:"creating-a-new-version-as-a-developer",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"supported-databases"},"Supported databases"),Object(r.b)("p",null,"Rucio uses ",Object(r.b)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy")," as the object-relational\nmapper between Python and SQL. Rucio is extensively tested against SQLite,\nMySQL/MariaDB, PostgreSQL, and Oracle and should work with them out of the\nbox. The appropriate connection string has to be set in the ",Object(r.b)("inlineCode",{parentName:"p"},"etc/rucio.cfg"),", for\nexample:"),Object(r.b)("p",null,"Oracle:\n",Object(r.b)("inlineCode",{parentName:"p"},"oracle://rucio:rucio@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=10121))(ENABLE=BROKEN)(CONNECT_DATA=(SERVICE_NAME=localhost)))")),Object(r.b)("p",null,"MySQL/MariaDB: ",Object(r.b)("inlineCode",{parentName:"p"},"mysql+pymysql://rucio:rucio@localhost/rucio")),Object(r.b)("p",null,"PostgreSQL: ",Object(r.b)("inlineCode",{parentName:"p"},"postgresql://rucio:rucio@localhost:6601/rucio")),Object(r.b)("p",null,"SQLite: ",Object(r.b)("inlineCode",{parentName:"p"},"sqlite:////tmp/rucio.db")),Object(r.b)("p",null,"Please ensure correct UNIX permissions on the SQLite file, such that the web\nserver process can read and write to it."),Object(r.b)("h2",{id:"additional-options"},"Additional options"),Object(r.b)("h3",{id:"connection-pooling"},"Connection pooling"),Object(r.b)("p",null,"Connection pooling is enabled by default, but can be disabled by setting the option"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dosini"},"poolclass = nullpool\n")),Object(r.b)("p",null,"in the ",Object(r.b)("inlineCode",{parentName:"p"},"[database]")," section in ",Object(r.b)("inlineCode",{parentName:"p"},"etc/rucio.cfg"),"."),Object(r.b)("p",null,"Other valid values are ",Object(r.b)("inlineCode",{parentName:"p"},"singletonthreadpool"),",\nwhich is the default pooling mechanism when using the SQLite engine,\nand ",Object(r.b)("inlineCode",{parentName:"p"},"queuepool"),",\nwhich is the default otherwise."),Object(r.b)("p",null,"Note that the chosen ",Object(r.b)("inlineCode",{parentName:"p"},"poolclass")," may conflict with other pooling options.\nFor instance, one cannot combine ",Object(r.b)("inlineCode",{parentName:"p"},"poolclass = nullpool")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"pool_size")," option."),Object(r.b)("h2",{id:"upgrading-and-downgrading-the-database-schema"},"Upgrading and downgrading the database schema"),Object(r.b)("p",null,"Rucio uses ",Object(r.b)("a",{parentName:"p",href:"http://alembic.zzzcomputing.com/en/latest/"},"Alembic")," as a database\nmigration tool, which works hand-in-hand with\n",Object(r.b)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy"),". Ensure that int ",Object(r.b)("inlineCode",{parentName:"p"},"etc/alembic.ini")," the\ndatabase connection string is is set to the same database connection string as\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"etc/rucio.cfg")," and issue the following command to verify the changes to the\nupgrade of the schema:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"alembic upgrade head --sql")),Object(r.b)("p",null,"You can edit and then apply the SQL directly on your database. We do not advise\nrunning automatic upgrades/downgrades with alembic."),Object(r.b)("p",null,"Notabene, schema upgrades are reserved for feature releases and will not happen\nwith patch releases."),Object(r.b)("h2",{id:"creating-a-new-version-as-a-developer"},"Creating a new version as a developer"),Object(r.b)("p",null,"If you want to create an upgrade path for the schema, you need to generate a\nschema upgrade+downgrade file:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"alembic revision -m 'schema change message'")),Object(r.b)("p",null,"This will output the name of the file that has been generated with two functions\n",Object(r.b)("inlineCode",{parentName:"p"},"def upgrade()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"def downgrade()")," that need to be implemented. These should\nreflect the changes to the ",Object(r.b)("inlineCode",{parentName:"p"},"lib/rucio/db/sqla/models.py")," SQLAlchemy mapping.\n3"))}d.isMDXComponent=!0},437:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);