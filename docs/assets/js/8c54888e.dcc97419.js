"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[5020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(d,".").concat(m)]||p[m]||s[m]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:52},o="37-Redux-logger & Middleware",i={unversionedId:"redux-logger---middleware--by-Juno-",id:"redux-logger---middleware--by-Juno-",title:"37-Redux-logger & Middleware",description:"\ud83e\udd37\u200d\u2640\ufe0f Middleware \ub780?",source:"@site/docs/37-redux-logger---middleware--by-Juno-.md",sourceDirName:".",slug:"/redux-logger---middleware--by-Juno-",permalink:"/react-basic-study-202103/docs/redux-logger---middleware--by-Juno-",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/37-redux-logger---middleware--by-Juno-.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52},sidebar:"tutorialSidebar",previous:{title:"Redux With UI and React",permalink:"/react-basic-study-202103/docs/Redux-with-UI-and-React-By-Tak"},next:{title:"37. redux-logger & \ubbf8\ub4e4\uc6e8\uc5b4",permalink:"/react-basic-study-202103/docs/Redux-middleware-Redux-logger-Bohyun-"}},d={},u=[{value:"\ud83e\udd37\u200d\u2640\ufe0f Middleware \ub780?",id:"\ufe0f-middleware-\ub780",level:2},{value:"\ud83d\udcda \uad6c\uc870 \uc54c\uc544\ubcf4\uae30",id:"-\uad6c\uc870-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ud83d\udc40 \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\uae30",id:"-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ud83d\udcc2 src&gt;middlewares&gt;myLogger.js",id:"-srcmiddlewaresmyloggerjs",level:3},{value:"\ud83d\udcbe Redux-logger \uc14b\ud305 \ubc0f \uc0ac\uc6a9",id:"-redux-logger-\uc14b\ud305-\ubc0f-\uc0ac\uc6a9",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"37-redux-logger--middleware"},"37-Redux-logger & Middleware"),(0,a.kt)("h2",{id:"\ufe0f-middleware-\ub780"},"\ud83e\udd37\u200d\u2640\ufe0f Middleware \ub780?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Redux\uc5d0\uc11c\uc758 Middleware\ub294 \uc561\uc158\uc774 \ub514\uc2a4\ud328\uce58(\uc2e4\ud589)\ub418\uc5b4 \ub9ac\ub4c0\uc11c\uc5d0\uc11c \ucc98\ub9ac\ud558\uae30\uc804\uc5d0 \uc9c0\uc815\ub41c \uc791\uc5c5\ub4e4\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc561\uc158\uacfc \ub9ac\ub4c0\uc11c \uc0ac\uc774\uc758 \uc911\uac04\uc790\ub77c\uace0\ub3c4 \ud560 \uc218 \uc788\uc73c\uba70, \uc561\uc158\uc744 \ucf58\uc194\uc5d0 \uae30\ub85d\ud558\uace0 \uc561\uc158\ucde8\uc18c, \ub2e4\ub978 \uc885\ub958\uc758 \uc561\uc158\uc744 \ucd94\uac00\uc801\uc73c\ub85c \ub514\uc2a4\ud328\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"blockquote"},"Redux\uc758 Middleware\ub294 Redux-Saga, Redux-thunk\uac00 \uc788\uc73c\ub098 \uc9c1\uc811 \ub9cc\ub4e4\uc5b4\ubcf4\uba70 \ub3d9\uc791\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ud574\ubd05\uc2dc\ub2e4.")),(0,a.kt)("h2",{id:"-\uad6c\uc870-\uc54c\uc544\ubcf4\uae30"},"\ud83d\udcda \uad6c\uc870 \uc54c\uc544\ubcf4\uae30"),(0,a.kt)("p",null,"\uba3c\uc800 Middleware\ub294 \uc544\ub798\uc640 \uac19\uc740 \ud15c\ud50c\ub9bf\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const middleware = (store) => (next) => (action) => {\n  // something working...\n};\n")),(0,a.kt)("p",null,"\uc704\uc758 \ud615\ud0dc\uac00 \ub09c\ud574\ud558\ub2e4\uba74 function\uc758 \ud615\ud0dc\ub85c \ubc14\uafd4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function middleware(store) {\n  return function (next) {\n    return function (action) {\n      // something working...\n    };\n  };\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\ud83d\udca1 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"store"),"\ub294 \ub9ac\ub355\uc2a4 \uc2a4\ud1a0\uc5b4 \uc778\uc2a4\ud134\uc2a4\uc785\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"li"},"dispatch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"getState"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"subscribe")," \ub0b4\uc7a5\ud568\uc218\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"next"),"\ub294 \uc561\uc158\uc744 \ub2e4\uc74c \ubbf8\ub4e4\uc6e8\uc5b4\uc5d0\uac8c \uc804\ub2ec\ud558\ub294 \ud568\uc218\uc774\uba70, ",(0,a.kt)("inlineCode",{parentName:"li"},"next(action)"),"\ud615\ud0dc\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub2e4\uc74c \ubbf8\ub4e4 \uc6e8\uc5b4\uac00 \uc5c6\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"li"},"reducer"),"\uc5d0\uac8c \uc561\uc158\uc744 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"action"),"\uc740 \ud604\uc7ac \ucc98\ub9ac\ud558\uace0 \uc788\ub294 \uc561\uc158 \uac1d\uccb4 \uc785\ub2c8\ub2e4."))),(0,a.kt)("p",null,"\uad6c\uc870\ub85c \uc54c\uc544 \ubcf4\uc790\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/2400/1*94LKNs35Z3GOZPhQ_Sd5qw.png",alt:"img"})),(0,a.kt)("p",null,"Middleware\ub294 \uc5ec\ub7ec \uac1c\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc561\uc158\uc774 \ub514\uc2a4\ud328\uce58(\uc2e4\ud589)\ub418\uba74 \ubbf8\ub4e4\uc6e8\uc5b4\uac00 \ud638\ucd9c\ub418\uace0, Middleware\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"next(action)"),"\ub97c \ud638\ucd9c\ud558\uac8c \ub418\uba74 \ub2e4\uc74c \ubbf8\ub4e4\uc6e8\uc5b4\ub098 \uc561\uc158\uc744 \uc804\ub2ec\ud558\uba70 \ub9cc\uc57d \ubbf8\ub4e4\uc6e8\uc5b4\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"store.dispatch"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\ub978 \uc561\uc158\uc744 \ucd94\uac00\uc801\uc73c\ub85c \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\uae30"},"\ud83d\udc40 \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\uae30"),(0,a.kt)("p",null,"\uba3c\uc800 Middleware \uc0dd\uc131\uc744 \uc704\ud574 \uc608\uc2dc \ucf54\ub4dc\ub97c \uc791\uc131\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"-srcmiddlewaresmyloggerjs"},"\ud83d\udcc2 src>middlewares>myLogger.js"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const myLogger = (store) => (next) => (action) => {\n  console.log(action); // \uc561\uc158\ucd9c\ub825\n  const result = next(action); // \ub2e4\uc74c \ubbf8\ub4e4\uc6e8\uc5b4 (\ub610\ub294 \ub9ac\ub4c0\uc11c) \uc5d0\uac8c \uc561\uc158\uc804\ub2ec\n  console.log(store.getState());\n  return result; //\ubc18\ud658\uac12\uc740 dispatch(action)\uc758 \uacb0\uacfc\ubb3c\n};\n\nexport default myLogger;\n")),(0,a.kt)("p",null,"\ub2e4\uc74c Middleware \uc801\uc6a9\ud558\uae30 \uc704\ud574 \uc2a4\ud1a0\uc5b4\uc5d0 \uc801\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"applyMiddleware")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { applyMiddleware, createStore } from "redux";\nimport myLogger from "./middlewares/myLogger";\n\nconst init = {\n  number: 0,\n  diff: 1,\n};\n\nconst reducer = (state = init, action) => {\n  switch (action.type) {\n    case "INCREASE":\n      return { ...state, number: state.number + state.diff };\n    case "DECREASE":\n      return { ...state, number: state.number - state.diff };\n    default:\n      return state;\n  }\n};\n\nconst store = createStore(reducer, applyMiddleware(myLogger));\n\nexport default store;\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2InOz%2Fbtq2MzUPegD%2F8WV6kMbkUciLMmK12431j1%2Fimg.gif",alt:"img"})),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc774 \ub85c\uae45\uc744 \ud558\ub294 \uc791\uc5c5\uc744 \uc704\ud574\uc11c\ub294 \uc9c1\uc811 \ub9cc\ub4dc\ub294 \uac83 \ubcf4\ub2e8 redux-logger\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"-redux-logger-\uc14b\ud305-\ubc0f-\uc0ac\uc6a9"},"\ud83d\udcbe Redux-logger \uc14b\ud305 \ubc0f \uc0ac\uc6a9"),(0,a.kt)("p",null,"\uba3c\uc800 Redux-logger\ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add redux-logger\n")),(0,a.kt)("p",null,"\uc774\ud6c4 store\uc5d0 \uc9c1\uc811 \uc791\uc131\ud588\ub358 myLogger\ub294 \uc9c0\uc6cc\uc8fc\uace0 \uc124\uce58\ud55c logger\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { applyMiddleware, createStore } from "redux";\nimport logger from "redux-logger";\n\nconst init = {\n  number: 0,\n  diff: 1,\n};\n\nconst reducer = (state = init, action) => {\n  switch (action.type) {\n    case "INCREASE":\n      return { ...state, number: state.number + state.diff };\n    case "DECREASE":\n      return { ...state, number: state.number - state.diff };\n    default:\n      return state;\n  }\n};\n\nconst store = createStore(reducer, applyMiddleware(logger));\n\nexport default store;\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcOu8il%2Fbtq2RjQwn1r%2FhzBmeab3rFo0nylDp6dYJ1%2Fimg.gif",alt:"img"})),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc774 \ub85c\uae45\uc744 \uc704\ud55c \uc791\uc5c5\uc774\ub77c\uba74 redux-logger\ub97c \ud1b5\ud558\uc5ec \uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react.vlpt.us/redux-middleware/03-logger-and-devtools.html"},"Redux DevTool \uc801\uc6a9\ud558\uae30")),(0,a.kt)("p",null,"\ud83d\udc4b"))}s.isMDXComponent=!0}}]);