"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[720],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),k=o,d=m["".concat(i,".").concat(k)]||m[k]||p[k]||a;return t?r.createElement(d,u(u({ref:n},s),{},{components:t})):r.createElement(d,u({ref:n},s))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:64},u="Closure in Javascript",l={unversionedId:"Closure-by_Manju-",id:"Closure-by_Manju-",title:"Closure in Javascript",description:"\ud83e\udd14 What is Closure?",source:"@site/docs/44-Closure-by_Manju-.md",sourceDirName:".",slug:"/Closure-by_Manju-",permalink:"/react-basic-study-202103/docs/Closure-by_Manju-",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/44-Closure-by_Manju-.md",tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64},sidebar:"tutorialSidebar",previous:{title:"Execution Context",permalink:"/react-basic-study-202103/docs/Hoisting-Execution-context-Woori-"},next:{title:"Closure-hongkyuS2-",permalink:"/react-basic-study-202103/docs/Closure-hongkyuS2-"}},i={},c=[{value:"\ud83e\udd14 What is <code>Closure</code>?",id:"-what-is-closure",level:2},{value:"\ud83d\udcdd What is <code>Lexical Environment</code>?",id:"-what-is-lexical-environment",level:3},{value:"\ud83e\udd14 Internal slot of function object <code>[[Environment]]</code> &amp; \u2b50 Closure \u2b50",id:"-internal-slot-of-function-object-environment---closure-",level:2},{value:"\u2b50 \uc678\ubd80 \ud568\uc218(outer) \ubcf4\ub2e4 \uc911\ucca9 \ud568\uc218(inner)\uac00 \ub354 \uc624\ub798 \uc720\uc9c0\ub418\ub294 \uacbd\uc6b0 \uc911\ucca9 \ud568\uc218\ub294 \uc774\ubbf8 \uc0dd\uba85\uc8fc\uae30\uac00 \uc885\ub8cc\ub41c \uc678\ubd80 \ud568\uc218\uc758 \ubcc0\uc218\ub97c \ucc38\uc870 \ud560\uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc911\ucca9 \ud568\uc218\ub97c \ubc14\ub85c Closure\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4!! \u2b50",id:"-\uc678\ubd80-\ud568\uc218outer-\ubcf4\ub2e4-\uc911\ucca9-\ud568\uc218inner\uac00-\ub354-\uc624\ub798-\uc720\uc9c0\ub418\ub294-\uacbd\uc6b0-\uc911\ucca9-\ud568\uc218\ub294-\uc774\ubbf8-\uc0dd\uba85\uc8fc\uae30\uac00-\uc885\ub8cc\ub41c-\uc678\ubd80-\ud568\uc218\uc758-\ubcc0\uc218\ub97c-\ucc38\uc870-\ud560\uc218-\uc788\uc2b5\ub2c8\ub2e4-\uc774\ub7ec\ud55c-\uc911\ucca9-\ud568\uc218\ub97c-\ubc14\ub85c-closure\ub77c\uace0-\ubd80\ub985\ub2c8\ub2e4-",level:3},{value:"\ud83e\udd14 When and How to use Closure?",id:"-when-and-how-to-use-closure",level:2}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"closure-in-javascript"},"Closure in Javascript"),(0,o.kt)("h2",{id:"-what-is-closure"},"\ud83e\udd14 What is ",(0,o.kt)("inlineCode",{parentName:"h2"},"Closure"),"?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)."),(0,o.kt)("p",{parentName:"blockquote"},"\ud074\ub85c\uc800\ub294 \uc8fc\ubcc0 \uc0c1\ud0dc(\ub809\uc2dc\uceec \ud658\uacbd)\uc5d0 \ub300\ud55c \ucc38\uc870\uc640 \ud568\uaed8 \ubc88\ub4e4\ub85c \ubb36\uc778 \ud568\uc218\uc758 \uacb0\ud569\uc774\ub2e4.")),(0,o.kt)("p",null,"\uc5ec\uae30\uc11c \ud575\uc2ec \ud0a4\uc6cc\ub4dc\ub294 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\uc8fc\ubcc0\uc0c1\ud0dc, \uc989 \ub809\uc2dc\uceec \ud658\uacbd"))," \uc785\ub2c8\ub2e4! \uc608\uc2dc \ucf54\ub4dc\ub85c \uc0b4\ud3b4\ubcfc\uac8c\uc694!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const x = -1;\n\nfunction outerFunc() {\n  const x = 10;\n\n  function innerFunc() {\n    console.log(x); // 10\n  }\n\n  innerFunc();\n}\n\nouterFunc();\n")),(0,o.kt)("p",null,"outerFunc \ub0b4\uc5d0\uc11c innerFunk\uac00 \uc815\uc758 \ub418\uc5b4\uc11c outerFunc(\uc678\ubd80 \ud568\uc218)\ub294 innerFunc(\uc911\ucca9 \ud568\uc218)\uc758 ",(0,o.kt)("strong",{parentName:"p"},"\uc0c1\uc704 \uc2a4\ucf54\ud504"),"\uac00 \ub429\ub2c8\ub2e4! \ub530\ub77c\uc11c innerFunc\ub294 outerFunc\uc758 \ubcc0\uc218 ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const x = 1;\n\nfunction outerFunc() {\n  const x = 10;\n  innerFunc();\n}\n\nfunction innerFunc() {\n  console.log(x); // 1\n}\n\nouterFunc();\n")),(0,o.kt)("p",null,"innerFunc\uac00 outerFunc \ub0b4\ubd80\uc5d0\uc11c \uc815\uc758\ub41c \uc911\ucca9 \ud568\uc218\uac00 \uc544\ub2c8\ub77c\uba74 \uc704\uc758 \uc608\uc2dc \ucc98\ub7fc outerFunc\uc758 \ubcc0\uc218\uc5d0 \uc811\uadfc \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4!"),(0,o.kt)("p",null,"\uc774\ucc98\ub7fc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ub809\uc2dc\uceec \uc2a4\ucf54\ud504"))," \ub97c \ub530\ub974\ub294 \uc5b8\uc5b4 \uc785\ub2c8\ub2e4. \uadf8\ub7fc \uc5ec\uae30\uc11c \ub809\uc2dc\uceec \uc2a4\ucf54\ud504\ub294 \uc5b4\ub5a4 \uac78 \ub9d0\ud558\ub294 \uac78\uae4c\uc694?"),(0,o.kt)("h3",{id:"-what-is-lexical-environment"},"\ud83d\udcdd What is ",(0,o.kt)("inlineCode",{parentName:"h3"},"Lexical Environment"),"?"),(0,o.kt)("p",null,"\uc77c\ub2e8 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ub300\ud574 \uac04\ub2e8\ud558\uac8c \ubcf5\uc2b5\ud574\ubcf4\uba74 \uc544\ub798 \ucf54\ub4dc\uc5d0\uc11c bar \ud568\uc218 \ud638\ucd9c \uc9c1\uc804\uc744 \ub2e4\uc74c\uacfc \uac19\uc740 \uadf8\ub9bc\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"var x = 1;\nconst y = 2;\n\nfunction foo(a) {\n  var x = 3;\n  const y = 4;\n\n  function bar(b) {\n    const z = 5;\n    console.log(a + b + x + y + z);\n  }\n  bar(10);\n}\n\nfoo(20);\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75834421/115483394-a6f28e80-a28b-11eb-9662-41651e254e04.jpg",alt:"\uc2e4\ud589\ucee8\ud14d\uc2a4\ud2b8"})),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ud568\uc218 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc0dd\uc131\ub418\uace0(\uc67c\ucabd \uc2a4\ud0dd\uc5d0 method call stack\uc774 \ud558\ub098\uc529 \uc313\uc774\uace0) \uc624\ub978\ucabd\uc758 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud568\uc218 \ub809\uc2dc\uceec \ud658\uacbd"))," \uc774 \uc0dd\uc131\ub418\ub294\ub370 \uadf8 \ub0b4\ubd80\uc5d0\uc11c\ub294 \ud568\uc218 \ud658\uacbd \ub808\ucf54\ub4dc \uc0dd\uc131 > this \ubc14\uc778\ub529 > ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870 \uacb0\uc815"))," \uc774 \uc774\ub8e8\uc5b4 \uc9d1\ub2c8\ub2e4"),(0,o.kt)("p",null,"\uc5ec\uae30\uc11c \uc6b0\ub9ac\uac00 \uc8fc\uc758\ud574\uc11c \uc0b4\ud3b4\ubcfc \ubd80\ubd84\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\ud568\uc218\uc758 \uc0c1\uc704 \uc2a4\ucf54\ud504\ub97c \uacb0\uc815\ud55c\ub2e4 = \ub809\uc2dc\uceec \ud658\uacbd\uc758 ",(0,o.kt)("inlineCode",{parentName:"strong"},"\uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870"),"\uc5d0 \uc800\uc7a5 \ud560 \ucc38\uc870\uac12\uc744 \uacb0\uc815\ud55c\ub2e4")," \uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub530\ub77c\uc11c \ub809\uc2dc\uceec \uc2a4\ucf54\ud504\ub97c \ub2e4\uc2dc \uc815\ub9ac \ud574\ubcf4\uba74, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ub809\uc2dc\uceec \ud658\uacbd\uc758 <\uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870>\uc5d0 \uc800\uc7a5\ud560 \ucc38\uc870\uac12, \uc989 \uc0c1\uc704 \uc2a4\ucf54\ud504\uc5d0 \ub300\ud55c \ucc38\uc870\ub294 \ud568\uc218\uc815\uc758\uac00 \ud3c9\uac00\ub418\ub294 \uc2dc\uc810\uc5d0 \ud568\uc218\uac00 \uc815\uc758\ub41c \ud658\uacbd(\uc704\uce58)\uc5d0 \uc758\ud574 \uacb0\uc815\ub429\ub2c8\ub2e4. \uc774\uac8c \ubc14\ub85c \ub809\uc2dc\uceec \uc2a4\ucf54\ud504!!"))),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \uc704\uc640 \uac19\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"\ub809\uc2dc\uceec \uc2a4\ucf54\ud504"),"\uac00 \uac00\ub2a5\ud558\ub824\uba74 \ud568\uc218\uc758 \uc815\uc758 \uc704\uce58\uac00 \uc911\uc694\ud55c\ub370, \ucf54\ub4dc\ub9c8\ub2e4 \ud568\uc218\uc758 \uc815\uc758 \uc2dc\uc810\uacfc \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uc2dc\uc810\uc774 \ub2e4\ub978 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub294 \uc5b4\ub5bb\uac8c \ud574\uacb0 \ub420\uae4c\uc694?"),(0,o.kt)("h2",{id:"-internal-slot-of-function-object-environment---closure-"},"\ud83e\udd14 Internal slot of function object ",(0,o.kt)("inlineCode",{parentName:"h2"},"[[Environment]]")," & \u2b50 Closure \u2b50"),(0,o.kt)("p",null,"\uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uadf8\ub9bc \ucc98\ub7fc \uc0c1\uc704\uc2a4\ucf54\ud504\ub97c <\uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870> \ubd80\ubd84\uc5d0 \uc800\uc7a5\ud574 \ub193\ub294\ub370, \uc0c1\uc704 \uc2a4\ucf54\ud504\ub294 \ud568\uc218\uac00 \uc815\uc758\ub41c \uacf3\uc785\ub2c8\ub2e4. \uadf8\ub7fc '\uc774\uacf3\uc774 \ud574\ub2f9 \ud568\uc218\uac00 \uc815\uc758\ub41c \uc0c1\uc704 \uc2a4\ucf54\ud504\ub2e4'\ub77c\ub294 \uc815\ubcf4\ub294 \uc5b4\ub514\uc11c \uac00\uc838\uc624\ub294 \uac78\uae4c\uc694? ",(0,o.kt)("inlineCode",{parentName:"p"},"\ub09c \ub0b4\uac00 \uc815\uc758\ub41c \uc7a5\uc18c\uc758 \uc815\ubcf4\ub97c \uac19\uc774 \uac00\uc9c0\uace0 \uc788\uc744\uac70\uc57c. \uadf8\ub7ec\ub2c8\uae4c \uadf8 \uc7a5\uc18c\uac00 \uc0ac\ub77c\uc838\ub3c4 \ubd80\ub97c \uc218 \uc788\uac8c\ub054 \ud45c\uc2dc\ud574\ub194\uc57c\uc9c0"),"\uc758 \uac1c\ub150\uc774 \ubc14\ub85c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\ud568\uc218 \uac1d\uccb4\uc758 \ub0b4\ubd80 \uc2ac\ub86f [[Environment]]\uc5d0 \uc0c1\uc704 \uc2a4\ucf54\ud504\uc758 \ucc38\uc870\ub97c \uc800\uc7a5\ud558\ub294 \uac83"))," \uc785\ub2c8\ub2e4!!"),(0,o.kt)("p",null,"\uc608\uc2dc\uc640 \uadf8\ub9bc\uc73c\ub85c \ucc28\uadfc \ucc28\uadfc \ub2e4\uc2dc \uc815\ub9ac\ud574 \ubcfc\uac8c\uc694!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const x = 1;\n\n// #1\nfunction outer() {\n    const x = 10;\n    const inner = function() {\n        console.log(x); // #2\n    };\n    return inner;\n}\n\nconst innerFunc * outer(); // #3\ninnerFunc(); //10 #4\n")),(0,o.kt)("p",null,"#1"),(0,o.kt)("p",null,"outer\ud568\uc218\uac00 \ud3c9\uac00\ub418\uc5b4 \ud568\uc218\uac1d\uccb4\ub97c \uc0dd\uc131"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75834421/115488442-76175700-a295-11eb-9d7c-24ccd4cc2f34.jpg",alt:"outer\ud568\uc218\uc0c1\uc704\uc2a4\ucf54\ud504"})),(0,o.kt)("p",null,"\ud604\uc7ac \uc2e4\ud589\uc911\uc778 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \ub809\uc2dc\uceec \ud658\uacbd, \uc989 \uc804\uc5ed \ub809\uc2dc\uceec \ud658\uacbd\uc744 ",(0,o.kt)("strong",{parentName:"p"},"outer \ud568\uc218 \uac1d\uccb4\uc758 [","[Environment]","] \ub0b4\ubd80 \uc2ac\ub86f\uc5d0 \uc0c1\uc704 \uc2a4\ucf54\ud504\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,"#2"),(0,o.kt)("p",null,"outer\ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 outer \ud568\uc218\uc758 \ub809\uc2dc\uceec \ud658\uacbd\uc774 \uc0dd\uc131\ub418\uace0 \uc55e\uc11c outer \ud568\uc218 \uac1d\uccb4\uc758 [","[Environment]","] \ub0b4\ubd80 \uc2ac\ub86f\uc5d0 \uc800\uc7a5\ub41c \uc804\uc5ed \ub809\uc2dc\uceec \ud658\uacbd\uc744 outer \ud568\uc218 \ub809\uc2dc\uceec \ud658\uacbd\uc758 <\uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870>\uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 \uc815\ud655\ud788 #2\ub77c\uc778 \ucf54\ub4dc\uc5d0\uc11c \uc911\ucca9\ud568\uc218 inner\uac00 \ud3c9\uac00\ub429\ub2c8\ub2e4. outer\ud568\uc218\uac00 \ud3c9\uac00 \ub420 \ub54c\uc640 \ub611\uac19\uc774 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"inner\ub294 \uc790\uc2e0\uc758 [[Environment]] \ub0b4\ubd80 \uc2ac\ub86f\uc5d0 \ud604\uc7ac \uc2e4\ud589\uc911\uc778 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \ub809\uc2dc\uceec \ud658\uacbd, \uc989 outer\ud568\uc218\uc758 \ub809\uc2dc\uceec \ud658\uacbd\uc744 \uc0c1\uc704\uc2a4\ucf54\ud504\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4!"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75834421/115489340-03a77680-a297-11eb-82a8-86027abab3b6.jpg",alt:"inner\ud568\uc218\uc0c1\uc704\uc2a4\ucf54\ud504"})),(0,o.kt)("p",null,"#3"),(0,o.kt)("p",null,"\uc5ec\uae30\uc11c outer \ud568\uc218\uc758 \uc0dd\uba85\uc8fc\uae30\uac00 \uc885\ub8cc \ub429\ub2c8\ub2e4!!\ud83d\ude2e outer \ud568\uc218\uc758 \uc2e4\ud589\ucee8\ud14d\uc2a4\ud2b8\uac00 \uc2a4\ud0dd\uc5d0\uc11c \uc81c\uac70\ub418\ub294 \uac70\uc8e0! \uc5ec\uae30\uc11c \uc81c\uc77c \uc911\uc694\ud55c \ud3ec\uc778\ud2b8 \u2757\u2757 ",(0,o.kt)("strong",{parentName:"p"},"outer\ud568\uc218\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\ud0dd\uc5d0\uc11c \uc81c\uac70 \ub418\uc9c0\ub9cc outer\ud568\uc218\uc758 \ub809\uc2dc\uceec \ud658\uacbd\uae4c\uc9c0 \uc18c\uba78\ub418\ub294 \uac74 \uc544\ub2d9\ub2c8\ub2e4")," \u2757\u2757"),(0,o.kt)("p",null,"inner \ud568\uc218\uc758 [","[Environment]","] \ub0b4\ubd80 \uc2ac\ub86f\uc5d0 outer \ud568\uc218\uc758 \ub809\uc2dc\uceec \ud658\uacbd\uc774 \ucc38\uc870\ub418\uace0 \uc788\uace0, inner\ud568\uc218\ub294 \uc804\uc5ed \ubcc0\uc218 innerFunc\uc5d0 \uc758\ud574 \ucc38\uc870\ub418\uace0 \uc788\uc73c\ubbc0\ub85c(#4) \uac00\ube44\uc9c0 \uceec\ub809\uc158\uc758 \ub300\uc0c1\uc774 \ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75834421/115490848-d90aed00-a299-11eb-8b67-3956950a7736.jpg",alt:"outer\ub809\uc2dc\uceec\ud658\uacbd\uc18c\uba78\uc548\ud568"})),(0,o.kt)("p",null,"#4"),(0,o.kt)("p",null,"outer\ud568\uc218\uac00 \ubc18\ud658\ud55c inner\ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 inner\ud568\uc218\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc0dd\uc131\ub418\uace0 \uc2a4\ud0dd\uc5d0 push\ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub809\uc2dc\uceec \ud658\uacbd\uc758 <\uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \ub300\ud55c \ucc38\uc870>\uc5d0\ub294 inner\ud568\uc218 \uac1d\uccb4\uc758 [","[Environment]","] \ub0b4\ubd80 \uc2ac\ub86f\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub294 \ucc38\uc870\uac12\uc5d0 \ud560\ub2f9\ub429\ub2c8\ub2e4!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75834421/115490854-dad4b080-a299-11eb-8d73-20c2070f933c.jpg",alt:"inner\ud638\ucd9c"})),(0,o.kt)("h3",{id:"-\uc678\ubd80-\ud568\uc218outer-\ubcf4\ub2e4-\uc911\ucca9-\ud568\uc218inner\uac00-\ub354-\uc624\ub798-\uc720\uc9c0\ub418\ub294-\uacbd\uc6b0-\uc911\ucca9-\ud568\uc218\ub294-\uc774\ubbf8-\uc0dd\uba85\uc8fc\uae30\uac00-\uc885\ub8cc\ub41c-\uc678\ubd80-\ud568\uc218\uc758-\ubcc0\uc218\ub97c-\ucc38\uc870-\ud560\uc218-\uc788\uc2b5\ub2c8\ub2e4-\uc774\ub7ec\ud55c-\uc911\ucca9-\ud568\uc218\ub97c-\ubc14\ub85c-closure\ub77c\uace0-\ubd80\ub985\ub2c8\ub2e4-"},"\u2b50 \uc678\ubd80 \ud568\uc218(outer) \ubcf4\ub2e4 \uc911\ucca9 \ud568\uc218(inner)\uac00 \ub354 \uc624\ub798 \uc720\uc9c0\ub418\ub294 \uacbd\uc6b0 \uc911\ucca9 \ud568\uc218\ub294 \uc774\ubbf8 \uc0dd\uba85\uc8fc\uae30\uac00 \uc885\ub8cc\ub41c \uc678\ubd80 \ud568\uc218\uc758 \ubcc0\uc218\ub97c \ucc38\uc870 \ud560\uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc911\ucca9 \ud568\uc218\ub97c \ubc14\ub85c Closure\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4!! \u2b50"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Javascript\uc758 \ubaa8\ub4e0 \ud568\uc218\ub294 \uc0c1\uc704 \uc2a4\ucf54\ub97c \uae30\uc5b5\ud558\ubbc0\ub85c \uc0ac\uc2e4 \uc774\ub860\uc801\uc73c\ub85c\ub294 \ubaa8\ub4e0 \ud568\uc218\uac00 closure\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ubaa8\ub450\ub97c \uadf8\ub807\uac8c \ubd80\ub974\uc9c4 \uc54a\uace0 \uc704\uc758 \uc815\uc758\uc640 \uac19\uc774 ",(0,o.kt)("strong",{parentName:"p"},"\uc911\ucca9 \ud568\uc218\uac00 \uc0c1\uc704 \uc2a4\ucf54\ud504\uc758 \uc2dd\ubcc4\uc790\ub97c \ucc38\uc870\ud558\uace0 \uc788\uace0 \uc911\ucca9 \ud568\uc218\uac00 \uc678\ubd80 \ud568\uc218 \ubcf4\ub2e4 \ub354 \uc624\ub798 \uc720\uc9c0\ub418\ub294 \uacbd\uc6b0\uc5d0 \ud55c\uc815\ud558\ub294 \uac83"),"\uc774 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"-when-and-how-to-use-closure"},"\ud83e\udd14 When and How to use Closure?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Outer variables can keep their states between multiple calls."),(0,o.kt)("p",{parentName:"li"},": inner \ud568\uc218\uc5d0\uc11c outer \ud568\uc218\uc758 \ubcc0\uc218\uc5d0 \uc811\uadfc \ud560 \ub54c\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \ubcf5\uc0ac\ubcf8\uc744 \ub9cc\ub4dc\ub294 \uac8c \uc544\ub2d9\ub2c8\ub2e4. \uac19\uc740 \ubcc0\uc218\ub97c \ucc38\uc870\ud558\uace0 \uc788\uc73c\ubbc0\ub85c inner \ud568\uc218\uc5d0\uc11c \ubcc0\uc218\uc5d0 \ub300\ud55c \uac12\uc744 \ubcc0\uacbd\ud55c\ub2e4\uba74 outer \ud568\uc218\uc5d0\ub3c4 \uadf8\ub300\ub85c \uc801\uc6a9\uc774 \ub429\ub2c8\ub2e4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Counter() {\n  var counter = 0;\n\n  function IncreaseCounter() {\n    return (counter += 1);\n  }\n\n  return IncreaseCounter;\n}\n\nvar counter = Counter();\nalert(counter()); // 1\nalert(counter()); // 2\nalert(counter()); // 3\nalert(counter()); // 4\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Closure is useful in hiding implementation detail in JavaScript."),(0,o.kt)("p",{parentName:"li"},": closure\ub294 \uc0c1\ud0dc\ub97c \uc548\uc804\ud558\uac8c \ubcc0\uacbd\ud558\uace0 \uc720\uc9c0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4 => \uc0c1\ud0dc\uac00 \uc758\ub3c4\uce58 \uc54a\uac8c \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub3c4\ub85d ",(0,o.kt)("strong",{parentName:"p"},"\uc0c1\ud0dc\ub97c \uc548\uc804\ud558\uac8c \uc740\ub2c9\ud558\uace0 \ud2b9\uc815 \ud568\uc218\uc5d0\uac8c\ub9cc \uc0c1\ud0dc \ubcc0\uacbd\uc744 \ud5c8\uc6a9"),"\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"var counter = (function () {\n  var privateCounter = 0;\n  function changeBy(val) {\n    privateCounter += val;\n  }\n  return {\n    increment: function () {\n      changeBy(1);\n    },\n    decrement: function () {\n      changeBy(-1);\n    },\n    value: function () {\n      return privateCounter;\n    },\n  };\n})();\n\nalert(counter.value()); // 0\ncounter.increment();\ncounter.increment();\nalert(counter.value()); // 2\ncounter.decrement();\nalert(counter.value()); // 1\n")),(0,o.kt)("p",{parentName:"li"},"\uc774 \uc608\uc2dc\uc5d0\uc11c\ub294 increment(), decrement(), value() \uacb0\uacfc\uac12\uc73c\ub85c \ubc18\ud658\ub418\ub294 \uac1d\uccb4\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \uc5b4\ub514\uc11c\ub4e0 \uc811\uadfc\uc774 \uac00\ub2a5\ud558\uc9c0\ub9cc(public), ",(0,o.kt)("strong",{parentName:"p"},"changeBy() \ud568\uc218\uc758 \uacbd\uc6b0 \uacb0\uacfc\uac12\uc73c\ub85c \ubc18\ud658\ub418\uc9c0 \uc54a\uace0 increment\uc640 decrement\ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub418\uace0 \uc788\uc73c\ubbc0\ub85c private function \uc774\ub77c\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!")))),(0,o.kt)("p",null,"  \uc774\ub7f0\uc2dd\uc73c\ub85c \ub2e4\ub978 \uc0ac\ub78c\uc774 \ubcc0\uacbd\ud558\uc9c0 \uc54a\uae38 \uc6d0\ud558\ub294 \uac74 changeBy() \uac19\uc740 \ub0b4\ubd80 \ud568\uc218 \uc548\uc5d0\uc11c \ucc98\ub9ac\ud558\uac8c\ub054 \ubd84\ub958 \ud560 \uc218 \uc788\uc5b4\uc694!"),(0,o.kt)("p",null,"  \ud83d\ude02 \ud558\uc9c0\ub9cc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uacbd\uc6b0, \uc815\ubcf4 \uc740\ub2c9\uc744 \uc644\uc804\ud558\uac8c \uc9c0\uc6d0\ud558\uc9c0\ub294 \uc54a\ub294 \ub2e4\uace0 \ud569\ub2c8\ub2e4. (\uc778\uc2a4\ud134\uc2a4 \ub9e4\uc11c\ub4dc\ub85c private \ud749\ub0b4 => \ud504\ub85c\ud1a0\ud0c0\uc785 \uba54\uc11c\ub4dc \uc0ac\uc6a9 \ud558\uba74 \ubd88\uac00\ub2a5, Symbol \ub610\ub294 WeakMap \uc0ac\uc6a9\uc73c\ub85c private\ud749\ub0b4 => \uadfc\ubcf8\uc801\uc778 \ud574\uacb0\ucc45X)"),(0,o.kt)("p",null,"  \ud83d\ude2e \ub2e4\ud589\ud788\ub3c4 2021\ub144 1\uc6d4\uc5d0 TC39\ud504\ub85c\uc138\uc2a4\uc758 stage3(candidate)\uc5d0\ub294 \ud074\ub798\uc2a4\uc5d0 private\ud544\ub4dc\ub97c \uc815\uc758\ud560 \uc218 \uc788\ub294 \uc0c8\ub85c\uc6b4 \ud45c\uc900 \uc0ac\uc591\uc774 \uc81c\uc548\ub418\uc5c8\ub2e4\uace0 \ud569\ub2c8\ub2e4...?"))}p.isMDXComponent=!0}}]);