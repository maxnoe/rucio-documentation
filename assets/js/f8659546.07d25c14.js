(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{441:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),o=(n(0),n(457)),r=["components"],l={title:"Type Annotation Guide"},b={unversionedId:"type_annotation_guide",id:"type_annotation_guide",isDocsHomePage:!1,title:"Type Annotation Guide",description:"The purpose of this document is to collaboratively create the developer",source:"@site/../docs/type_annotation_guide.md",sourceDirName:".",slug:"/type_annotation_guide",permalink:"/documentation/type_annotation_guide",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/type_annotation_guide.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1674120955,formattedLastUpdatedAt:"1/19/2023",frontMatter:{title:"Type Annotation Guide"},sidebar:"docs",previous:{title:"Component development leads",permalink:"/documentation/component_leads"},next:{title:"About Our Contributors",permalink:"/documentation/about_our_contributors"}},s=[{value:"Abstract",id:"abstract",children:[]},{value:"Type Annotations",id:"type-annotations",children:[{value:"General Information",id:"general-information",children:[]},{value:"Syntax",id:"syntax",children:[]}]},{value:"Why",id:"why",children:[]},{value:"Type Annotations in Rucio",id:"type-annotations-in-rucio",children:[{value:"What not to type annotate",id:"what-not-to-type-annotate",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Best Practices",id:"best-practices",children:[]},{value:"Common Types",id:"common-types",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The purpose of this document is to collaboratively create the developer\nguidelines for static type checking of rucio's codebase."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"TL;DR")," New code has to be type annotated, old code should be migrated. Look\ninto ",Object(o.b)("a",{parentName:"p",href:"#Best-Practices"},"Best Practices")," for specific instructions on how to use\nit in our repository."),Object(o.b)("h2",{id:"abstract"},"Abstract"),Object(o.b)("p",null,"Python is a dynamically-typed programming language. Dynamic type checked\nprogramming languages verify the type safety at runtime. Type-related bugs thus\noccur at runtime. Tests are in place to check the types and prevent\nbugs. However, tests do not always cover all possible combinations of types."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://peps.python.org/pep-0484/"},"PEP 484"),", which got adopted into the ",Object(o.b)("em",{parentName:"p"},"Python\nLanguage Reference")," of Python3.6 and is thus a part of Python itself, introduces\n",Object(o.b)("em",{parentName:"p"},"type hints")," to Python. Type hints add more information to the source code and\nallow us to automatically check the code for type missmatches. Type-related bugs\nwill thereby be checked at compile time (pre-runtime), rather than at\nruntime. Type hints also increase the descriptiveness of our code and make it\neasier to read."),Object(o.b)("p",null,"Rucio does not has type hints at the moment. The plan is to introduce them\nconsistently to the entire project. Adding type hints to a big project is\nchallenging. Since the code-base is too large to introduce them with only one\nPR, we will introduce the hints incrementally."),Object(o.b)("h2",{id:"type-annotations"},"Type Annotations"),Object(o.b)("h3",{id:"general-information"},"General Information"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://peps.python.org/pep-0483/"},Object(o.b)("strong",{parentName:"a"},"PEP 483 \u2013 The Theory of Type Hints")),"\nThis ",Object(o.b)("em",{parentName:"li"},"PEP")," explains the theory behind type hints, as well as backgrounds to\ncertain decisions.")),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"There are comprehensive and descriptive documentations on the web on how to\nannotate python code with type hints. E.g.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html"},Object(o.b)("strong",{parentName:"a"},"MyPy type hints cheat\nsheet"))," The cheat\nsheet contains information on the syntax of type annotations and ",Object(o.b)("em",{parentName:"p"},"which ones"),"\nto use ",Object(o.b)("em",{parentName:"p"},"when"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://peps.python.org/pep-0484/"},Object(o.b)("strong",{parentName:"a"},"PEP 484 \u2013 Type Hints"))," Contains general\ninformation about type hints in Python. This includes the motivation, the\ndefinition, what to do with edge cases, and much more.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://peps.python.org/pep-0589/"},Object(o.b)("strong",{parentName:"a"},"PEP 589 \u2013 TypedDict: Type Hints for Dictionaries with a Fixed Set of\nKeys"))," Explains how to use ",Object(o.b)("inlineCode",{parentName:"p"},"TypedDict")," and\nwhat to regard while using them."))),Object(o.b)("h2",{id:"why"},"Why"),Object(o.b)("p",null,"Dynamically typed programming languages execute many common programming\nbehaviours, that static programming languages perform during compilation, at\nruntime. While this is leads to quick prototyping, big projects could suffer\nfrom some consequences. In particular:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'The code is harder to read: Parameters and return types are specified in typed\nlanguages, they give some hints on how to call a function and what to\nexpect. Bugs and inconsistencies can be spotet easier (e.g. when a "get"\nfunction return a list), and some IDEs display these information for a more\nconvenient coding experience. All of this is missing in dynamically typed\nprogramming languages.'),Object(o.b)("li",{parentName:"ul"},"Type related bugs do not get noticed: Calling a function with a wrong type\n(e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"None"),") gets spotet by typed checkers. In dynamically typed programming\nlanguages this needs to be veryfied on every call.")),Object(o.b)("p",null,"While we have strong arguments for type annotations, there are some drawbacks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It takes more time to write code: The type annotations need to be specified\nand added, which is tedious in a big code base."),Object(o.b)("li",{parentName:"ul"},"They add little value if dicts are used heavily: The keys of dicts are not\ntype checked, only the potential values. Big dictionaries thus have a lot of\ndifferent value types, while the check if a key exists still needs to be done.")),Object(o.b)("h2",{id:"type-annotations-in-rucio"},"Type Annotations in Rucio"),Object(o.b)("p",null,"Adding type annotations is not always trivial. Some types might be to ambigous,\nsome might be to generic. A good reference point is existing type annotated\n",Object(o.b)("em",{parentName:"p"},"Rucio")," code. It will give hints on what types may be used and how to properly\nused them in the code."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Don't just copy the types from existing code, think about them!"),Object(o.b)("p",{parentName:"div"},"Ask yourself: Is this use-case the same? Could I be more specific than just\n",Object(o.b)("inlineCode",{parentName:"p"},"Any"),". Could I use a class instead of a ",Object(o.b)("inlineCode",{parentName:"p"},"Dict"),"? Should I introduce a new type\ninstead of using an existing one? ..."))),Object(o.b)("h3",{id:"what-not-to-type-annotate"},"What not to type annotate"),Object(o.b)("p",null,"Not all Python code needs type annotations. Type annotations in the ",Object(o.b)("inlineCode",{parentName:"p"},"tests"),", for\nexample, would just add clutter and add very little benefits."),Object(o.b)("p",null,"The following modules will ",Object(o.b)("strong",{parentName:"p"},"not")," be type annotated:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"tools"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The tools folder contains some Python scripts. While type annotations\nwould help fixing bugs, the code itself is not shipped and will not be run\nin a production environment."),Object(o.b)("li",{parentName:"ul"},"We could add support later, however this is not our main concern atm."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"bin"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The Rucio executables don't call the core or api call directly, but rather\nuse the client. We could activate it once to Python2 support is dropped."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lib/rucio/tests"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The tests are volatile and should be easy to change. Type annotations\nwould just add clutter and very little benefits."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lib/rucio/db"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The db module is used as a dependency of core. While we need the types, we\nuse very little functions out of it. We might activate support later,\nhowever we want to focus on core right now.")))),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,"To properly use the benefits of type annotated code, we also have to look into\nour dependencies. All of our frequently used dependencies provide type\nannotations out of the box or via extensions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Python standard library"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Typehints were added in 3.5.0"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sqlalchemy"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Type hints were introduced in version 2.0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sqlalchemy-stubs")," provide types for versions < 2.0"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"alembic"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Type hints are provided. Not important at the moment, since we are not\nadding type hints for the db migration."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"flask"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Type hints are provided"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"six"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"types-six")," package provides typehints."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"six")," might be removed from the repository in the future."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"requests"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"types-requests")," package provides typehints.")))),Object(o.b)("p",null,"Some types from our dependencies, like the ",Object(o.b)("em",{parentName:"p"},"sqlalchemy")," ",Object(o.b)("inlineCode",{parentName:"p"},"orm.session.Session"),",\ncan be used directly. It is not needed to create our own equivalent then, except\nif they get translated to a rucio owned type."),Object(o.b)("h3",{id:"github-actions"},"GitHub Actions"),Object(o.b)("p",null,"A GitHub actions job ensures that newly written code contains type hints:"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Check Python Type Annotations")," job in the autotests checks, if new code\ncontains type annotations. It does this by comparing the number of missing\npython type annotations before the changes with the number of missing python\ntype annotations after the changes. If the number before is less then the number\nafter, new code, which is not typed, was added. The script then exits with a\nnon-zero exit code. If it is equals or bigger, type annotations have been added\nto the repository."),Object(o.b)("p",null,"As of now, only the number of ",Object(o.b)("em",{parentName:"p"},"missing")," type annotations will be used. The job\ndoes not check for wrong type hints or inconsistencies. This (specifically\n",Object(o.b)("inlineCode",{parentName:"p"},"mypy"),") will be enabled once enough python type hints are added. For this\npurpose, we will always add type annotations to functions, even when the type\ncan be infered."),Object(o.b)("h3",{id:"best-practices"},"Best Practices"),Object(o.b)("p",null,"To ensure a consistent usage of type hints, you should pay attention to the\nfollowing best practices:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Use ",Object(o.b)("em",{parentName:"strong"},"Python 3.6")," style type hints")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"There are multiple ways to specify type hints in Python. We agreed to use\nthe Python 3.6 style, since it's easy to read and we don't need the\nbackwards-compatibility."),Object(o.b)("li",{parentName:"ul"},"E.g. favor ",Object(o.b)("inlineCode",{parentName:"li"},"def add_rse(rse: str, vo: str = 'def', ...) -> str:")," over ",Object(o.b)("inlineCode",{parentName:"li"},"def\nadd_rse(rse, vo='def', ...): # type: (str, str, ...) -> str")),Object(o.b)("li",{parentName:"ul"},"Don't use Python 3.6 incompatible features, this includes:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#types-union"},Object(o.b)("inlineCode",{parentName:"a"},'Union type expression "(int |\nNone)"')),",\nthis got introduces in Pyhton 3.10"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.TypeAlias"},Object(o.b)("inlineCode",{parentName:"a"},"typing.TypeAlias")),",\nthis got introduced in Python 3.10"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Final"},Object(o.b)("inlineCode",{parentName:"a"},"typing.Final")),",\nintroduced in Python 3.8. (Sad, since it is quite handy to let the type\nchecker check for constant re-assignments. :( )"),Object(o.b)("li",{parentName:"ul"},"Paramterized Python buildin types like ",Object(o.b)("inlineCode",{parentName:"li"},"list"),", ",Object(o.b)("inlineCode",{parentName:"li"},"dict"),", ",Object(o.b)("inlineCode",{parentName:"li"},"set"),", ...",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Parameterized buildin types are recognized by type checkers since\nPython version 3.9. This follows after ",Object(o.b)("a",{parentName:"li",href:"https://peps.python.org/pep-0585/"},"PEP\n585"),". Use the ",Object(o.b)("inlineCode",{parentName:"li"},"typing")," module\ninstead."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"__future__")," module provides a ",Object(o.b)("a",{parentName:"li",href:"https://docs.python.org/3/library/__future__.html"},"backport for parameterized buildin\ntypes")," for\nPython3.7+. This is not suitable for Python3.6"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.python.org/3.8/library/typing.html#typing.TypedDict"},Object(o.b)("inlineCode",{parentName:"a"},"Typed\nDicts")),",\nintroduced in Python3.8")))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Use ",Object(o.b)("em",{parentName:"strong"},"bare")," type hints over ",Object(o.b)("a",{parentName:"strong",href:"https://peps.python.org/pep-0484/#runtime-or-type-checking"},"ones with\nquotes")," and ",Object(o.b)("inlineCode",{parentName:"strong"},"if\ntying.TYPE_CHECKING:"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Quoted type hints enable "foreward references". This enables us to not\nexecute expencive code while still having type checks.'),Object(o.b)("li",{parentName:"ul"},"As long as the performance is immesurable small and not a problem, this\nshould be avoided, since it > ","[name=Joel Dierkes]"," Dunno about this part. Should\nwe use ",Object(o.b)("inlineCode",{parentName:"li"},"if typing.TYPE_CHECKING:")," and quoted types or avoid them?")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Be as specific as possible")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the types of the keys and values of a dict are known, specify\nthem. (E.g. Use ",Object(o.b)("inlineCode",{parentName:"li"},"Dict[str, str]")," over ",Object(o.b)("inlineCode",{parentName:"li"},"Dict"),")."),Object(o.b)("li",{parentName:"ul"},"If the types of all items in a list are known, specify them\n(E.g. ",Object(o.b)("inlineCode",{parentName:"li"},"List[int]")," over ",Object(o.b)("inlineCode",{parentName:"li"},"List"),")"),Object(o.b)("li",{parentName:"ul"},"...")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Avoid ",Object(o.b)("inlineCode",{parentName:"strong"},"Dicts"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Strongly typed structures should be prefered, since they are more\ndescriptive and easier to use in the future."),Object(o.b)("li",{parentName:"ul"},'"Was the id key in the ',Object(o.b)("inlineCode",{parentName:"li"},"Dict")," named ",Object(o.b)("inlineCode",{parentName:"li"},"_id")," or ",Object(o.b)("inlineCode",{parentName:"li"},"id"),'?" is a question that\nshould not occur.')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Avoid the ",Object(o.b)("inlineCode",{parentName:"strong"},"Optional")," type")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Optional")," type highlights that a value ",Object(o.b)("em",{parentName:"li"},"might")," be ",Object(o.b)("inlineCode",{parentName:"li"},"None"),". As a result\nthe value ",Object(o.b)("em",{parentName:"li"},"has")," to be checked for ",Object(o.b)("inlineCode",{parentName:"li"},"None")," on every usage (",Object(o.b)("inlineCode",{parentName:"li"},"if value: "),")."),Object(o.b)("li",{parentName:"ul"},"While sometimes this cannot be avoided, the ",Object(o.b)("inlineCode",{parentName:"li"},"Optional"),' type should be used\nspearly. Most of the times a propper initialization of the variable is\nenough to get rid of it. If it makes sense that a type can be\n"non-existent", it is appropriate to use the ',Object(o.b)("inlineCode",{parentName:"li"},"Option")," type.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Avoid the ",Object(o.b)("inlineCode",{parentName:"strong"},"Union")," type")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Union")," type indicates, that one of multiple different types may be\nreturned. This can be confusing and resolves in the need of testing, which\ntype is returned."),Object(o.b)("li",{parentName:"ul"},"Split the function or variable, which used the ",Object(o.b)("inlineCode",{parentName:"li"},"Union")," type, in multiple\nones. This resolves in more readable code and is unambiguous. This also\nfollows the ",Object(o.b)("inlineCode",{parentName:"li"},"A function does one, and only one thing")," rule.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Use\n",Object(o.b)("a",{parentName:"strong",href:"https://docs.python.org/3/library/typing.html#typing.NoReturn"},Object(o.b)("inlineCode",{parentName:"a"},"typing.NoReturn")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It is used to indicate a never terminating function (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"while\nTrue:"),"). Use this annotation to indicate these kind of functions.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Use\n",Object(o.b)("a",{parentName:"strong",href:"https://docs.python.org/3/library/typing.html#typing.Iterator"},Object(o.b)("inlineCode",{parentName:"a"},"typing.Iterator")),"\nover\n",Object(o.b)("a",{parentName:"strong",href:"https://docs.python.org/3/library/typing.html#typing.Generator"},Object(o.b)("inlineCode",{parentName:"a"},"typing.Generator")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"typing.Generator[YieldType, SendType, ReturnType]")," takes three Type Vars:\nThe Type that gets yielded, the type that gets send back to the yield, and the\nreturn type of the function. If a function does only yield values, but does\nnot take back values from the yield and also does not return anything with the\n",Object(o.b)("inlineCode",{parentName:"li"},"return")," keyword, the type is ",Object(o.b)("inlineCode",{parentName:"li"},"typing.Generator[YieldType, None, None]"),". This\nis equivalent to ",Object(o.b)("inlineCode",{parentName:"li"},"typing.Iterator[YieldType]"),". We favor the ",Object(o.b)("inlineCode",{parentName:"li"},"Iterator"),"\napproach over the ",Object(o.b)("inlineCode",{parentName:"li"},"Generator")," one because it's more understandable and easier\nto read.")),Object(o.b)("h3",{id:"common-types"},"Common Types"),Object(o.b)("p",null,"To ensure a consistent use of type annotations in Rucio, here is a list of\ncommon variables with their corresponding type:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Code section"),Object(o.b)("th",{parentName:"tr",align:null},"Variable"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"*"),Object(o.b)("td",{parentName:"tr",align:null},"session"),Object(o.b)("td",{parentName:"tr",align:null},"sqlalchemy.orm.session.Session"),Object(o.b)("td",{parentName:"tr",align:null},"The sqlalchemy session.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"DID"),Object(o.b)("td",{parentName:"tr",align:null},"scope"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"str")),Object(o.b)("td",{parentName:"tr",align:null},"The scope of a DID.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"DID"),Object(o.b)("td",{parentName:"tr",align:null},"name"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"str")),Object(o.b)("td",{parentName:"tr",align:null},"The name of a DID.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"DID"),Object(o.b)("td",{parentName:"tr",align:null},"account"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"str")),Object(o.b)("td",{parentName:"tr",align:null},"The account name.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"DID"),Object(o.b)("td",{parentName:"tr",align:null},"did_type"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"str")),Object(o.b)("td",{parentName:"tr",align:null},"The DID type.")))))}c.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(r,".").concat(d)]||c[d]||u[d]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);