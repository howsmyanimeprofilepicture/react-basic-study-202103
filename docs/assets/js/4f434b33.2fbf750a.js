"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[9459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:9},c=void 0,i={unversionedId:"React_Hook",id:"React_Hook",title:"React_Hook",description:"HOOK\uc774\ub780 \ubb34\uc5c7\uc77c\uae4c\uc694",source:"@site/docs/08-React_Hook.md",sourceDirName:".",slug:"/React_Hook",permalink:"/react-basic-study-202103/docs/React_Hook",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-React_Hook.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"useRef\ub85c \ucef4\ud3ec\ub10c\ud2b8 \uc548\uc758 \ubcc0\uc218 \ub9cc\ub4e4\uae30",permalink:"/react-basic-study-202103/docs/useRefAndAppendItemToArray"},next:{title:"9-useEffect",permalink:"/react-basic-study-202103/docs/useEffect-by-Juno-"}},s={},u=[{value:"HOOK\uc774\ub780 \ubb34\uc5c7\uc77c\uae4c\uc694",id:"hook\uc774\ub780-\ubb34\uc5c7\uc77c\uae4c\uc694",level:3}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"hook\uc774\ub780-\ubb34\uc5c7\uc77c\uae4c\uc694"},"HOOK\uc774\ub780 \ubb34\uc5c7\uc77c\uae4c\uc694"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/112567922-02fcfb00-8e25-11eb-894a-a8c2f6924386.png",alt:"image"})),(0,o.kt)("p",null,"REACT HOOK\uc740 React \ubc84\uc804 16.8\uc5d0 \uc0c8\ub85c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8 \uc774\uc804\uc5d0\ub294 \ud074\ub798\uc2a4\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub9cc State\uc640 Life Cycle\uc744 \uc870\uc791\ud560 \uc218 \uc788\uc5c8\ub294\ub370 \uc774\ub85c \uc778\ud574 ",(0,o.kt)("u",null,"\ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub9e4\uc6b0 ",(0,o.kt)("strong",{parentName:"p"},"\uc815\uc801\uc778 \uae30\ub2a5"),"\ub9cc \uc218\ud589\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")," \ud558\uc9c0\ub9cc REACT HOOK\uc758 \ucd94\uac00\ub85c \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub3c4 State\uc640 Life Cycle\uc744 \uc870\uc791\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uace0 \ub355\ubd84\uc5d0 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\ub9cc\uc73c\ub85c\ub3c4 \ub9e4\uc6b0 \ub3d9\uc801\uc778 \uc6f9\ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"REACT HOOK\uc740 '\ud568\uc218\ud615' \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub3c4 State\uc640 Life Cycle\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud574\uc900\ub2e4.")),(0,o.kt)("p",null,"\uac00\uc7a5 \ub9ce\uc774 \uc4f0\uc774\ub294 REACT HOOK\uc73c\ub85c\ub294 ",(0,o.kt)("strong",{parentName:"p"},"useState"),"\uc640 ",(0,o.kt)("strong",{parentName:"p"},"useEffect"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ubc88 \ucc55\ud130\uc5d0\ub294 HOOK\uc5d0 \ub300\ud574 \uac04\ub7b5\ud558\uac8c\ub9cc \uc54c\uc544\ubcf4\uace0 \uc880 \ub354 \uae4a\uc774 \uc788\ub294 \uacf5\ubd80\ub294 \ub2e4\uc74c \ucc55\ud130\uc5d0\uc11c \ub2e4\ub8f0\uae4c \ud569\ub2c8\ub2e4!"))}l.isMDXComponent=!0}}]);