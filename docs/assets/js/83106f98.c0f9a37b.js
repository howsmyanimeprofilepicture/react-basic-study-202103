"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),k=l,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),l=(n(7294),n(3905));const o={sidebar_position:4},a="3-\uc870\uac74\ubd80 \ub80c\ub354\ub9c1",s={unversionedId:"conditionalRendering",id:"conditionalRendering",title:"3-\uc870\uac74\ubd80 \ub80c\ub354\ub9c1",description:"\ud83d\ude4f \uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc774\ub780?",source:"@site/docs/03-conditionalRendering.md",sourceDirName:".",slug:"/conditionalRendering",permalink:"/react-basic-study-202103/docs/conditionalRendering",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-conditionalRendering.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Components and Props",permalink:"/react-basic-study-202103/docs/components-props"},next:{title:"state \uc640 useState",permalink:"/react-basic-study-202103/docs/state-useState"}},u={},i=[{value:"\ud83d\ude4f \uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc774\ub780?",id:"-\uc870\uac74\ubd80-\ub80c\ub354\ub9c1\uc774\ub780",level:2},{value:"3-1 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1",id:"3-1-\uc870\uac74\ubd80-\ub80c\ub354\ub9c1",level:2},{value:"\ud83d\udc40 \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\uae30",id:"-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\uae30",level:3},{value:"\ud83d\udcc2 src&gt;App.js",id:"-srcappjs",level:3},{value:"\ud83d\udcc2 src&gt;components&gt;Hello.jsx",id:"-srccomponentshellojsx",level:3},{value:"3-2 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1(ver \ucef4\ud3ec\ub10c\ud2b8)",id:"3-2-\uc870\uac74\ubd80-\ub80c\ub354\ub9c1ver-\ucef4\ud3ec\ub10c\ud2b8",level:2},{value:"\ud83d\udc40 \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\uae30",id:"-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\uae30-1",level:3},{value:"\ud83d\udcc2 src&gt;components&gt;Hello.jsx",id:"-srccomponentshellojsx-1",level:3},{value:"\ud83d\udcc2 src&gt;components&gt;UserGreeting.jsx",id:"-srccomponentsusergreetingjsx",level:3},{value:"\ud83d\udcc2 src&gt;components&gt;GuestGreeting.jsx",id:"-srccomponentsguestgreetingjsx",level:3},{value:"\ud83c\udf89 \uacb0\uacfc",id:"-\uacb0\uacfc",level:3},{value:"\u2728 \ucd94\uac00\uc801\uc73c\ub85c props\uc758 \uac12 \uc124\uc815\uc744 \uc0dd\ub7b5\ud558\uba74 true\uac00 \ub429\ub2c8\ub2e4.",id:"-\ucd94\uac00\uc801\uc73c\ub85c-props\uc758-\uac12-\uc124\uc815\uc744-\uc0dd\ub7b5\ud558\uba74-true\uac00-\ub429\ub2c8\ub2e4",level:3}],p={toc:i};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"3-\uc870\uac74\ubd80-\ub80c\ub354\ub9c1"},"3-\uc870\uac74\ubd80 \ub80c\ub354\ub9c1"),(0,l.kt)("h2",{id:"-\uc870\uac74\ubd80-\ub80c\ub354\ub9c1\uc774\ub780"},"\ud83d\ude4f \uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc774\ub780?"),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud2b9\uc815 \uc870\uac74\uc5d0 \ub530\ub77c \ub2e4\ub978 \uacb0\uacfc\ubb3c\uc744 \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3-1-\uc870\uac74\ubd80-\ub80c\ub354\ub9c1"},"3-1 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc6d0\ud558\ub294 \ubb38\uad6c\ub97c \ubcf4\uc5ec\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\uae30"},"\ud83d\udc40 \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\uae30"),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ud30c\uc77c \uad6c\uc870\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbRdUob%2Fbtq0AHNNMBF%2FsUDfmXjwYnZ3NKAoMuMo3k%2Fimg.png"})),(0,l.kt)("h3",{id:"-srcappjs"},"\ud83d\udcc2 src>App.js"),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ud14c\uc2a4\ud2b8\ub97c \uc704\ud558\uc5ec App.js\uc5d0\uc11c Hello \ucef4\ud3ec\ub10c\ud2b8\ub85c name, isLoggedIn\uc774\ub77c\ub294 props\ub97c \ub118\uaca8\uc90d\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import "./App.css";\nimport Hello from "./components/Hello";\n\nfunction App() {\n  return <Hello name="Juno" isLoggedIn={true} />;\n}\n\nexport default App;\n')),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoyGzQ%2Fbtq0zZ9fVKI%2F8WUTGr5YMT3aIKcy7b6f71%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-srccomponentshellojsx"},"\ud83d\udcc2 src>components>Hello.jsx"),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\uac04\ub2e8\ud558\uac8c props\ub97c destructuring \ud558\uc5ec name\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nconst Hello = ({ name, isLoggedIn }) => {\n  return <div>\uc548\ub155\ud558\uc138\uc694 {name}</div>;\n};\n\nexport default Hello;\n')),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FK4FxZ%2Fbtq0HagUtCH%2F2yp8ckdQ877smoaHom6gU0%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ud558\uc9c0\ub9cc \uc5ec\uae30\uc11c \uc870\uac74\uc744 \ucd94\uac00\ud574\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\uba3c\uc800 ",(0,l.kt)("inlineCode",{parentName:"p"},"{isLoggedIn=true}"),'\uc77c \uacbd\uc6b0 \uc989, \ub85c\uadf8\uc778\uc774 \ub418\uc5c8\uc744 \uacbd\uc6b0 \uc55e\uc5d0 "\ub85c\uadf8\uc778 \uc644\ub8cc" \ub77c\ub294 \ubb38\uad6c\ub97c \ucd94\uac00\uc801\uc73c\ub85c \ubcf4\uc5ec\uc8fc\uace0',(0,l.kt)("br",{parentName:"p"}),"\n","false\uc758 \uacbd\uc6b0\uc5d4 null\uc774 \ub418\uc5b4 \uc544\ubb34\ub7f0 \ubb38\uad6c\ub3c4 \ucd94\uac00\uc801\uc73c\ub85c \ub744\uc6b0\uc9c0 \uc54a\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucc38\uace0\ub85c JSX\ubb38\ubc95\uc5d0\uc11c\ub294 null, false, undefined\ub97c \ub80c\ub354\ub9c1 \ud558\uac8c\ub418\uba74 \uc544\ubb34\uac83\ub3c4 \ub098\ud0c0\ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nconst Hello = ({ name, isLoggedIn }) => {\n  return (\n    <div>\n      {isLoggedIn ? "\ub85c\uadf8\uc778\uc644\ub8cc" : null}\uc548\ub155\ud558\uc138\uc694{name}\n    </div>\n  );\n};\n\nexport default Hello;\n')),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 \uc5ec\uae30\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},'{isLoggedIn ? "\ub85c\uadf8\uc778\uc644\ub8cc" : null}'),"\ub294 \uc0bc\ud56d \uc870\uac74 \uc5f0\uc0b0\uc790\ub85c\uc368"),(0,l.kt)("p",{parentName:"blockquote"},"if ~ else \uc870\uac74\ubb38\uc758 \uacbd\uc6b0"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (\uc870\uac74) {\n  \uc870\uac74\uc774 true\uc77c \uacbd\uc6b0 \uacb0\uacfc\n} else {\n  \uc870\uac74\uc774 false\uc77c \uacbd\uc6b0 \uacb0\uacfc\n}\n")),(0,l.kt)("p",{parentName:"blockquote"},"\uc774\ub807\uac8c \uc0ac\uc6a9\ub418\ub098 \uc0bc\ud56d\uc5f0\uc0b0\uc790\ub294"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  isLoggedIn ? "\ub85c\uadf8\uc778\uc644\ub8cc" : null;\n}\n// {\uc870\uac74 ? \uc870\uac74\uc774 true\uc77c \uacbd\uc6b0 \uacb0\uacfc : \uc870\uac74\uc774 false\uc77c \uacbd\uc6b0 \uacb0\uacfc}\n')),(0,l.kt)("p",{parentName:"blockquote"},"\uc704\uc640\uac19\uc774 \uc0ac\uc6a9\ud558\uba70 \ub9ac\uc561\ud2b8\uc5d0\uc11c\ub294 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc744 \ud560 \uacbd\uc6b0 \uac04\ub2e8\ud558\uac8c \uc0bc\ud56d\uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fzb0vx%2Fbtq0AqFwP8f%2FqGKcCdC7r4DsZFVIKWyfO0%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0"," \ud604\uc7ac\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"{isLoggedIn=true}"),"\uc774\uae30 \ub54c\ubb38\uc5d0 \ubb38\uad6c\uac00 \ucd94\uac00\ub41c\uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\xa0"," \ud558\uc9c0\ub9cc \uc704\uc640\uac19\uc774 \ub0b4\uc6a9\uc774 \ub2ec\ub77c\uc9c0\ub294\uac8c \uc544\ub2c8\ub77c \ubcf4\uc5ec\uc8fc\uac70\ub098, \uc548\ubcf4\uc5ec\uc8fc\uac70\ub098 \ud558\ub294 \uc0c1\ud669\uc5d0\uc11c\ub294 && \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud558\ub294\uac83\uc774 \ub354 \uac04\ud3b8\ud569\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nconst Hello = ({ name, isLoggedIn }) => {\n  return (\n    <div>\n      {isLoggedIn && "\ub85c\uadf8\uc778\uc644\ub8cc"}\uc548\ub155\ud558\uc138\uc694{name}\n    </div>\n  );\n};\n\nexport default Hello;\n')),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0"," \ucd94\uac00\uc801\uc73c\ub85c name\uc5d0 \ub300\ud574 \uc870\uac74\uc744 \ucd94\uac00\ud558\uace0"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nconst Hello = ({ name, isLoggedIn }) => {\n  return (\n    <div>\n      {isLoggedIn && "\ub85c\uadf8\uc778\uc644\ub8cc"}\uc548\ub155\ud558\uc138\uc694{isLoggedIn ? name : "guest"}\n    </div>\n  );\n};\n\nexport default Hello;\n')),(0,l.kt)("p",null,"\xa0"," ",(0,l.kt)("inlineCode",{parentName:"p"},"{isLoggedIn=false}"),"\ub85c \ubcc0\uacbd \ud6c4 \uac12\uc744 \ud655\uc778\ud558\uba74"),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAJJR5%2Fbtq0BDRINJr%2FTMTZzxWTd9lFQ92XMHDY5k%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcHPmtI%2Fbtq0AHf0wme%2F04ni8tf9oYkApoZSXwoiQ0%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0"," \uc704\uc640\uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"{isLoggedIn=false}"),'\uc774\uae30 \ub54c\ubb38\uc5d0 \uc55e\uc758 \ubb38\uad6c\ub294 \ucd94\uac00\ub418\uc9c0\uc54a\uace0 name\ub300\uc2e0 "guest"\ub77c\ub294 \ubb38\uad6c\uac00 \ub728\uac8c\ub429\ub2c8\ub2e4.'),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3-2-\uc870\uac74\ubd80-\ub80c\ub354\ub9c1ver-\ucef4\ud3ec\ub10c\ud2b8"},"3-2 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1(ver \ucef4\ud3ec\ub10c\ud2b8)"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\uc0bc\ud56d \uc5f0\uc0b0\uc790\ub97c \uc774\uc6a9\ud558\uc5ec \ucef4\ud3ec\ub10c\ud2b8 \ub610\ud55c \uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\xa0","\uc704\uc758 \uc608\uc2dc\ub97c \ub450\uac00\uc9c0\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ubd84\ub9ac\ud558\uc5ec \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\uae30-1"},"\ud83d\udc40 \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\uae30"),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ud30c\uc77c \uad6c\uc870\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbUJTpa%2Fbtq0AG2s8A0%2FfOlKmvecnZzaojz6Hujd41%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-srccomponentshellojsx-1"},"\ud83d\udcc2 src>components>Hello.jsx"),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ub85c\uadf8\uc778\uc774 \ub418\uc5c8\uc744 \uacbd\uc6b0 UserGreeting \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubcf4\uc5ec\uc8fc\uace0 \ube44\ub85c\uadf8\uc778\uc77c \uacbd\uc6b0 GuestGreeting \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.  "),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucd94\uac00\uc801\uc73c\ub85c name\uc774\ub77c\ub294 props\ub97c UserGreeting \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport GuestGreeting from "./GuestGreeting";\nimport UserGreeting from "./UserGreeting";\n\nconst Hello = ({ name, isLoggedIn }) => {\n  return (\n    <div>{isLoggedIn ? <UserGreeting name={name} /> : <GuestGreeting />}</div>\n  );\n};\n\nexport default Hello;\n')),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdjulww%2Fbtq0HbGVDYh%2FakiPRB448kJ9kFi6hT5zQk%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-srccomponentsusergreetingjsx"},"\ud83d\udcc2 src>components>UserGreeting.jsx"),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ub85c\uadf8\uc778\uc77c \uacbd\uc6b0 \ucef4\ud3ec\ub10c\ud2b8"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nconst UserGreeting = ({ name }) => {\n  return <div>\ub85c\uadf8\uc778\uc644\ub8cc \uc548\ub155\ud558\uc138\uc694 {name}</div>;\n};\n\nexport default UserGreeting;\n')),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-srccomponentsguestgreetingjsx"},"\ud83d\udcc2 src>components>GuestGreeting.jsx"),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ube44\ub85c\uadf8\uc778\uc77c \uacbd\uc6b0 \ucef4\ud3ec\ub10c\ud2b8"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nconst GuestGreeting = () => {\n  return <div>\uc548\ub155\ud558\uc138\uc694 guset</div>;\n};\n\nexport default GuestGreeting;\n')),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-\uacb0\uacfc"},"\ud83c\udf89 \uacb0\uacfc"),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ub85c\uadf8\uc778\uc774 \ub418\uc5c8\uc744\uacbd\uc6b0"),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEeMYX%2Fbtq0zuVUzrH%2FmhoLUHy55U0vWZlqlBKfzK%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsBS93%2Fbtq0EEbx1ub%2FQGBMwLy95tzHlivbSdkoLk%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0","\ube44\ub85c\uadf8\uc778\uc77c \uacbd\uc6b0"),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRtJoi%2Fbtq0HaBejoV%2F1LnQGw3apArLK5auULCfnK%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrfPll%2Fbtq0HanJO3J%2FgBUIHveP2QnH96kfsWwqL0%2Fimg.png"})),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-\ucd94\uac00\uc801\uc73c\ub85c-props\uc758-\uac12-\uc124\uc815\uc744-\uc0dd\ub7b5\ud558\uba74-true\uac00-\ub429\ub2c8\ub2e4"},"\u2728 \ucd94\uac00\uc801\uc73c\ub85c props\uc758 \uac12 \uc124\uc815\uc744 \uc0dd\ub7b5\ud558\uba74 true\uac00 \ub429\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import "./App.css";\nimport Hello from "./components/Hello";\n\nfunction App() {\n  return <Hello name="Juno" isLoggedIn />;\n  // return <Hello name="Juno" isLoggedIn={true} />;\n}\n\nexport default App;\n')),(0,l.kt)("br",null),(0,l.kt)("p",null,"\ud83d\udc4b"))}c.isMDXComponent=!0}}]);