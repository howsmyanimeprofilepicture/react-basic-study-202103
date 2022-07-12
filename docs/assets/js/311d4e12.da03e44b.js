"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[2673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(k,p(p({ref:t},c),{},{components:r})):n.createElement(k,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:78},p="Browser Workflow",i={unversionedId:"BrowserWorkFlow-\ub2e8\ubc1c\ubaac-",id:"BrowserWorkFlow-\ub2e8\ubc1c\ubaac-",title:"Browser Workflow",description:"\ucc38\uace0\ud55c \ucee8\ud150\uce20\ub4e4",source:"@site/docs\\50-BrowserWorkFlow-\ub2e8\ubc1c\ubaac-.md",sourceDirName:".",slug:"/BrowserWorkFlow-\ub2e8\ubc1c\ubaac-",permalink:"/react-basic-study-202103/docs/BrowserWorkFlow-\ub2e8\ubc1c\ubaac-",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/50-BrowserWorkFlow-\ub2e8\ubc1c\ubaac-.md",tags:[],version:"current",sidebarPosition:78,frontMatter:{sidebar_position:78},sidebar:"tutorialSidebar",previous:{title:"\uc6f9 \ube0c\ub77c\uc6b0\uc800 \ub79c\ub354\ub9c1 \uc21c\uc11c",permalink:"/react-basic-study-202103/docs/BrowserRenderingFlow-eunbee-"},next:{title:"Critical Rendering Path",permalink:"/react-basic-study-202103/docs/How-browser-works-and-renders-a-page-by-woori-"}},o={},s=[{value:"1. Browser\uc758 Work Flow \ud83d\udc99",id:"1-browser\uc758-work-flow-",level:2},{value:"1.1. \ube0c\ub77c\uc6b0\uc800\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815",id:"11-\ube0c\ub77c\uc6b0\uc800\uc758-\ub80c\ub354\ub9c1-\uacfc\uc815",level:4},{value:"1.2. \uadf8\ub9ac\uace0 +\u03b1",id:"12-\uadf8\ub9ac\uace0-\u03b1",level:4},{value:"2. virtual DOM \ud83d\udc9b",id:"2-virtual-dom-",level:2},{value:"2.1. virtual DOM\uc744 \ud1b5\ud55c DOM\uc870\uc791\uc758 \uadf8\ub8e8\ud551",id:"21-virtual-dom\uc744-\ud1b5\ud55c-dom\uc870\uc791\uc758-\uadf8\ub8e8\ud551",level:4},{value:"2.2. virtual DOM\uc5d0 \ub300\ud55c \uc624\ud574(\ud639\uc740 \ub9ac\uc561\ud2b8\uc5d0 \ub300\ud55c \uc624\ud574)",id:"22-virtual-dom\uc5d0-\ub300\ud55c-\uc624\ud574\ud639\uc740-\ub9ac\uc561\ud2b8\uc5d0-\ub300\ud55c-\uc624\ud574",level:4},{value:"3. CSR, SSR \ud83e\udde1",id:"3-csr-ssr-",level:2},{value:"3.1. Client Side Rendering",id:"31-client-side-rendering",level:4},{value:"3.2. Server Side Rendering",id:"32-server-side-rendering",level:4},{value:"3.3. TTV(Time To View) TTI(Time To Interact)",id:"33-ttvtime-to-view-ttitime-to-interact",level:4},{value:"4. Async / Defer \uc18d\uc131 \ud83d\udc94",id:"4-async--defer-\uc18d\uc131-",level:2},{value:"4.1. &lt;head&gt;\uc5d0 &lt;script&gt;\ub97c \ub123\uc744 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc810",id:"41-head\uc5d0-script\ub97c-\ub123\uc744-\uacbd\uc6b0-\ubc1c\uc0dd\ud558\ub294-\ubb38\uc81c\uc810",level:4},{value:"4.2. &lt;body&gt;\ud0dc\uadf8 \ucd5c\ud558\ub2e8\ubd80\uc5d0 &lt;script&gt;\ub97c \ub123\ub294\ub2e4\uba74?",id:"42-body\ud0dc\uadf8-\ucd5c\ud558\ub2e8\ubd80\uc5d0-script\ub97c-\ub123\ub294\ub2e4\uba74",level:4},{value:"4.3. defer\uc18d\uc131\uc744 \ud65c\uc6a9\ud558\uc790",id:"43-defer\uc18d\uc131\uc744-\ud65c\uc6a9\ud558\uc790",level:4},{value:"4.4. async \uc18d\uc131\uc744 \ud65c\uc6a9\ud55c\ub2e4\uba74",id:"44-async-\uc18d\uc131\uc744-\ud65c\uc6a9\ud55c\ub2e4\uba74",level:4}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browser-workflow"},"Browser Workflow"),(0,a.kt)("p",null,"\ucc38\uace0\ud55c \ucee8\ud150\uce20\ub4e4"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://velopert.com/3236"},"https://velopert.com/3236")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wKwMRH0PkMg"},"https://www.youtube.com/watch?v=wKwMRH0PkMg")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=muc2ZF0QIO4&t=0s"},"https://www.youtube.com/watch?v=muc2ZF0QIO4&t=0s")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://davidhwang.netlify.app/Developments/browser-rendering-process/"},"https://davidhwang.netlify.app/Developments/browser-rendering-process/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://jess2.xyz/web/browser-rendering/"},"https://jess2.xyz/web/browser-rendering/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iZ9csAfU5Os"},"https://www.youtube.com/watch?v=iZ9csAfU5Os")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tJieVCgGzhs"},"https://www.youtube.com/watch?v=tJieVCgGzhs")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ko.javascript.info/script-async-defer"},"https://ko.javascript.info/script-async-defer")),(0,a.kt)("p",null,"\uc644\ubcbd\ud558\uac8c \uc774\ud574\ud55c \ub0b4\uc6a9\ub4e4\uc774 \uc544\ub2c8\uc5b4\uc11c"),(0,a.kt)("p",null,"\uad00\ub828\ub41c \ucf58\ud150\uce20\ub4e4\uc744 \ub2e4\uc18c \ubcd1\ub82c\uc801\uc73c\ub85c \uc774\uc5b4 \ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud639\uc2dc \uc54c\uace0 \uc788\ub294 \ub0b4\uc6a9\uc774 \uc788\uc73c\uc2dc\ub2e4\uba74 \uc9c0\uc2dd\uc744 \ub354\ud574\uc8fc\uc2dc\uba74 \uac10\uc0ac\ud558\uaca0\uc74d\ub2c8\ub2e4..."),(0,a.kt)("h2",{id:"1-browser\uc758-work-flow-"},"1. Browser\uc758 Work Flow \ud83d\udc99"),(0,a.kt)("h4",{id:"11-\ube0c\ub77c\uc6b0\uc800\uc758-\ub80c\ub354\ub9c1-\uacfc\uc815"},"1.1. \ube0c\ub77c\uc6b0\uc800\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://davidhwang.netlify.app/static/58dd63a5db0e6951536d1f080d54a9a0/b9e4f/renderingengine.png",alt:"renderingengine"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"DOM tree \uad6c\ucd95\uc744 \uc704\ud55c ",(0,a.kt)("strong",{parentName:"li"},"HTML parsing, CSS, Javascript parsing"),(0,a.kt)("br",{parentName:"li"}),"HTML \ubb38\uc11c\ub97c \ud30c\uc2f1\ud55c \ud6c4, content tree \ub0b4\ubd80\uc5d0\uc11c tag(a, div)\ub97c DOM node \ub85c \ubcc0\ud658\ud55c\ub2e4. \uadf8 \ub2e4\uc74c CSS \ud30c\uc77c\uacfc \ud568\uaf10 \ubaa8\ub4e0 \uc2a4\ud0c0\uc77c \uc694\uc18c\ub97c \ud30c\uc2f1\ud55c\ub2e4. \uc2a4\ud0c0\uc77c \uc694\uc18c\uc640 HTML \ud45c\uc2dc \uaddc\uce59, Javascript \uc758 \ud30c\uc2f1 \uacb0\uacfc\ubb3c\uc740 render tree \ub97c \uc0dd\uc131\ud55c\ub2e4")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jess2.xyz/static/0c389301ba794f3ca7b491572d73971d/13e20/browser4.png",alt:"browser4"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"render tree \uad6c\ucd95"),"\nHTML \uacfc CSS \ub97c \ud30c\uc2f1\ud574\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 render tree \ub294 \uc0c9\uc0c1 \ub610\ub294 \uba74\uc801 \ub4f1 \uc2dc\uac01\uc801 \uc18d\uc131\uc744 \uac16\ub294 \uc0ac\uac01\ud615\uc744 \ud3ec\ud568\ud55c\ub2e4. \uc815\ud574\uc9c4 \uc21c\uc11c\ub300\ub85c \ub80c\ub354\ub9c1\ud55c\ub2e4")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"render tree \ubc30\uce58  (",(0,a.kt)("strong",{parentName:"p"},"layout"),")  "),(0,a.kt)("p",{parentName:"li"},"render tree \uac00 \uc0dd\uc131\uc774 \ub05d\ub098\uba74, \ubc30\uce58\uac00 \uc2dc\uc791\ub41c\ub2e4. \ubdf0\ud3ec\ud2b8(Viewport) \uc548\uc5d0\uc11c \uac01 node\ub4e4\uc758 \uc815\ud655\ud55c \uc704\uce58\uc640 \ud06c\uae30\uac00 \uacc4\uc0b0\ub41c\ub2e4. %, vh, vw\uc640 \uac19\uc774 \uc0c1\ub300\uc801\uc778 \uc704\uce58, \ud06c\uae30 \uc18d\uc131\uc740 pixel \ub2e8\uc704\ub85c \ubcc0\ud658\ub41c\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"render tree \uadf8\ub9ac\uae30 (",(0,a.kt)("strong",{parentName:"p"},"paint"),")\n3\ubc88(Layout) \ub2e8\uacc4\uc5d0\uc11c \uc218\ud589\ud588\ub358 \uacc4\uc0b0\uc5d0 \uae30\ubc18\ud558\uc5ec \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uc2e4\uc81c \ud654\uba74\uc5d0 \uadf8\ub9b0\ub2e4. \ucc98\ub9ac\ud574\uc57c \ud560 \uc2a4\ud0c0\uc77c\uc774 \ubcf5\uc7a1\ud560\uc218\ub85d Paint\ub2e8\uacc4\uc5d0 \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc740 \ub298\uc5b4\ub09c\ub2e4. \uc608\ub97c \ub4e4\uba74 \ub2e8\uc0c9\ubcf4\ub2e4 \uadf8\ub77c\ub370\uc774\uc158\uc774\ub098 \uadf8\ub9bc\uc790 \ud6a8\uacfc\uac00 Paint \uc18c\uc694\uc2dc\uac04\uc744 \ub9ce\uc774 \uc694\uad6c\ud55c\ub2e4."))),(0,a.kt)("h4",{id:"12-\uadf8\ub9ac\uace0-\u03b1"},"1.2. \uadf8\ub9ac\uace0 +\u03b1"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Reflow")," (Layout \uc7ac\uc218\ud589)"),(0,a.kt)("p",{parentName:"li"},"\uc704\uc758 \uc5b8\uae09\ub41c \uacfc\uc815(1~4\ubc88 \uacfc\uc815)\uc774 \ubaa8\ub450 \uc218\ud589\ub418\uc5c8\ub2e4\uace0 \ub80c\ub354\ub9c1\uc774 \ub05d\ub09c \uac83\uc740 \uc544\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800 \uc548\uc5d0\ub294 \uc218\ub9ce\uc740 action\uacfc event\uac00 \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc774\ub2e4. \uc5b4\ub5a0\ud55c action \ud639\uc740 event\uac00 html \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud06c\uae30\ub098 \uc704\uce58 \ub4f1 \ub808\uc774\uc544\uc6c3 \uc218\uce58\ub97c \uc218\uc815\ud558\uba74 \uadf8\uc5d0 \uc601\ud5a5\uc744 \ubc1b\ub294 \uc790\uc2dd \ub178\ub4dc \ud639\uc740 \ubd80\ubaa8 \ub178\ub4dc\ub4e4\uc744 \ud3ec\ud568\ud558\uc5ec Layout\uacfc\uc815\uc744 \ub2e4\uc2dc \uc218\ud589\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Repaint")," (Paint \uc7ac\uc218\ud589)"),(0,a.kt)("p",{parentName:"li"},"Layout(\ud639\uc740 Reflow)\ub294 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc704\uce58\uc640 \ud06c\uae30\ub97c \uacc4\uc0b0\ud558\ub294 \uacfc\uc815\uc774\ub2e4. \ud654\uba74\uc5d0 \ubc18\uc601\ub418\uae30 \uc704\ud574\uc11c\ub294 paint\uac00 \ub2e4\uc2dc \uc218\ud589\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,a.kt)("p",{parentName:"li"},"\ubb3c\ub860 layout\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\ub294 \uc2a4\ud0c0\uc77c \uc18d\uc131\uc758 \ubcc0\uacbd(\uc608\ub97c \ub4e4\uc5b4 color, background-color, visibility \ub4f1)\uc740 Reflow \uc5c6\uc774 Repaint\ub9cc \uc218\ud589\ub41c\ub2e4."))),(0,a.kt)("h2",{id:"2-virtual-dom-"},"2. virtual DOM \ud83d\udc9b"),(0,a.kt)("h4",{id:"21-virtual-dom\uc744-\ud1b5\ud55c-dom\uc870\uc791\uc758-\uadf8\ub8e8\ud551"},"2.1. virtual DOM\uc744 \ud1b5\ud55c DOM\uc870\uc791\uc758 \uadf8\ub8e8\ud551"),(0,a.kt)("p",null,"\uae30\uc874 Browser Work Flow\uc758 \ubb38\uc81c, \ud2b9\ud788 SPA\uc5d0\uc11c \ub9ce\uc774 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\ub294 "),(0,a.kt)("p",null,"\uac01\uac01\uc758 DOM \uc870\uc791\uc774 \uac01\uac01\uc758 \ub808\uc774\uc544\uc6c3 \ubcc0\ud654, \ud2b8\ub9ac\ubcc0\ud654, \ub80c\ub354\ub9c1\uc744 \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("u",null,"30\uac1c\uc758 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud558\ub098 \ud558\ub098 \uc218\uc815\ud558\uba74, 30\ubc88\uc758 \ub808\uc774\uc544\uc6c3 \uc7ac\uacc4\uc0b0\uacfc 30\ubc88\uc758 \ub9ac\ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud55c\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"virtual DOM\uc740 DOM\uc758 \ubcc0\ud654\ub97c \uba3c\uc800 \uac00\uc0c1 DOM\ud2b8\ub9ac\uc5d0 \uba3c\uc800 \uc801\uc6a9\uc2dc\ud0a8\ub2e4. \uac00\uc0c1 DOM\uc740 \ub80c\ub354\ub9c1\uc774 \ub418\uc9c0 \uc54a\uc544 \uc5f0\uc0b0\ube44\uc6a9\uc774 \uc801\ub2e4. \uc5f0\uc0b0\uc774 \ub05d\ub098\uba74 \ucd5c\uc885\uc801\uc778 \ubcc0\ud654\ub9cc \uc2e4\uc81c DOM\uc5d0 \ub358\uc838\uc8fc\ub294 \uac83\uc774\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"\ub531 \ud55c \ubc88\ub9cc, \ubaa8\ub4e0 \ubcc0\ud654\ub97c \ud558\ub098\ub85c \ubb36\ub294 \uac83"),"\uc774\ub2e4."),(0,a.kt)("p",null,"30\uac1c\uc758 \uc0ac\uc18c\ud55c DOM\uc870\uc791\uc73c\ub85c 30\uac1c\uc758 \ub9ac\ud50c\ub85c\uc6b0, \ub9ac\ud398\uc778\ud305\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774 \uc544\ub2c8\ub77c virtual DOM\uc5d0 \uba3c\uc800 DOM \ubcc0\ud654\ub97c \uc801\uc6a9\ud558\uace0, \ucd5c\uc885\uc801\uc778 \ud615\ud0dc\ub9cc\uc744 \uc2e4\uc81c\ub85c DOM\uc5d0 \uc804\ub2ec\ud574 \ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ub80c\ub354\ub9c1\uc740 \ud55c \ubc88\uc73c\ub85c \uc904\uc774\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc0ac\uc2e4 \uc774\ub7ec\ud55c \uacfc\uc815\uc740 virtual DOM\uc774 \uc5c6\uc5b4\ub3c4 \uc774\ub8e8\uc5b4\uc9c8 \uc218 \uc788\ub2e4. "),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"document.createDocumentFragment() \uac19\uc740 DOM \uc870\uc791\uacfc \uad00\ub828\ub41c \uba54\uc11c\ub4dc\ub9cc\uc73c\ub85c\ub3c4 \ucda9\ubd84\ud788 \uad6c\ud604\ud560 \uc218 \uc788\ub2e4\uace0 \ud55c\ub2e4."))),(0,a.kt)("h4",{id:"22-virtual-dom\uc5d0-\ub300\ud55c-\uc624\ud574\ud639\uc740-\ub9ac\uc561\ud2b8\uc5d0-\ub300\ud55c-\uc624\ud574"},"2.2. virtual DOM\uc5d0 \ub300\ud55c \uc624\ud574(\ud639\uc740 \ub9ac\uc561\ud2b8\uc5d0 \ub300\ud55c \uc624\ud574)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://velopert.com/wp-content/uploads/2017/03/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2017-03-25-%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB-12.45.56.png",alt:"img"})),(0,a.kt)("p",null,"Dan Abramov\uc758 \ucf54\uba58\ud2b8\ub97c \uac00\uc838\uc654\ub2e4. \ubd80\uc871\ud55c \uc601\uc5b4\ub85c \ub300\ucda9 \uc774\ud574\ud55c \ubc14\ub85c\ub294 virtual DOM\uae30\ubc18\uc758 \ub9ac\uc561\ud2b8\ub294 (\uc81c\ub300\ub85c \ucd5c\uc801\ud654 \uc791\uc5c5\uc774 \uc218\ud589\ub41c, \uc77c\ubc18 DOM \uae30\ubc18\uc758) \ubc14\ub2d0\ub77c JS\uc5d0 \ube44\ud574 \ub354 \ube60\ub978 \uac83\uc740 \uc544\ub2c8\ub77c\ub294 \uc774\uc57c\uae30 \uac19\ub2e4."),(0,a.kt)("p",null,"\uadf8\uc800 \ubd88\ud3b8\ud558\uc9c0 \uc54a\uc744 \uc815\ub3c4\ub85c \ube60\ub97c \ubfd0\uc774\ub2e4. \ub9ac\uc561\ud2b8\ub294 \uac1c\ubc1c\uacfc \uc720\uc9c0\ubcf4\uc218\uac00 \ud3b8\ud574\uc11c \uc4f0\ub294 \uac83\uc774\uc9c0 \ubc14\ub2d0\ub77cJS\ubcf4\ub2e4 \ube68\ub77c\uc11c \uc4f0\ub294 \uac83\uc774 \uc544\ub2c8\ub77c\ub294 \uc774\uc57c\uae30\ub97c \ud558\uace0 \uc2f6\uc740 \uac83 \uac19\ub2e4."),(0,a.kt)("h2",{id:"3-csr-ssr-"},"3. CSR, SSR \ud83e\udde1"),(0,a.kt)("h4",{id:"31-client-side-rendering"},"3.1. Client Side Rendering"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/116494586-0da32800-a8dc-11eb-989e-8af19c9c9aec.png",alt:"img"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\ucd9c\ucc98: \ub4dc\ub9bc\ucf54\ub529 \uc5d8\ub9ac \uc720\ud23d")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"HTML\uc758 \ubc14\ub514\uac00 \ud145 \ube44\uc5b4\uc788\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc11c\ubc84\ub85c \ubd80\ud130 \uc804\ub2ec \ubc1b\ub294 JS\ud30c\uc77c(app.js)\uc744 \ud1b5\ud574 \uc6f9\uc5d0 \ud544\uc694\ud55c \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud568 "),(0,a.kt)("li",{parentName:"ol"},"SEO(Serach Engine Optimization)\uc774 \ub098\uc058\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\ub2e4.")),(0,a.kt)("h4",{id:"32-server-side-rendering"},"3.2. Server Side Rendering"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/116495744-81463480-a8de-11eb-8953-cb42a5379da3.png",alt:"image"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uae30\ubcf8\uc801\uc73c\ub85c Static \uc0ac\uc774\ud2b8\uc5d0 \uc601\uac10\uc744 \ubc1b\uc74c,")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc11c\ubc84\uc5d0\uc11c \ub80c\ub354\ub9c1\uc774 \uc644\ub8cc\ub41c, \uc989 ",(0,a.kt)("strong",{parentName:"p"},"\uc644\uc131\ub41c \ud398\uc774\uc9c0"),"\ub97c \uc804\ub2ec\ubc1b\ub294 \uac83\uc5d0 \uac00\uae4c\uc6c0. SEO\uac00 \uc88b\uc74c")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ub2e4\ub9cc static\ud398\uc774\uc9c0\uc640\uc758 \ucc28\uc774\uc810\uc774 \uc788\ub2e4\uba74, \uc5b4\ub290 \uc815\ub3c4 \ud398\uc774\uc9c0\ub97c \ub3d9\uc801\uc73c\ub85c \uc870\uc815\ud560 \uc218 \uc788\ub294 Js\ub85c\uc9c1\uc744 \ud568\uaed8 \uc804\ub2ec\ubc1b\uc74c.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud398\uc774\uc9c0 \uac04\uc758 \uc774\ub3d9\uc5d0 \ub530\ub978(index.html\uc5d0\uc11c profile.html\uc73c\ub85c \uc774\ub3d9\ud55c\ub2e4\uac70\ub098 \ud558\ub294) Blinking Issue\uac00 \ubc1c\uc0dd\ud558\uace0, \uc774\ub85c \uc778\ud574 \uc774\ub7ec\ud55c \ud398\uc774\uc9c0 \uac04\uc758 \uc774\ub3d9\uc740 \uc0c1\ub300\uc801\uc73c\ub85c CSR\uc5d0 \ube44\ud574 \uc778\ud130\ub799\ud2f0\ube0c\ud568\uc774 \ub5a8\uc5b4\uc9d0 \ubabb\ud568."))),(0,a.kt)("h4",{id:"33-ttvtime-to-view-ttitime-to-interact"},"3.3. TTV(Time To View) TTI(Time To Interact)"),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/116496080-2cef8480-a8df-11eb-9038-f90cdc9a188f.png",alt:"image"})),(0,a.kt)("p",null,"CSR\uc5d0\uc11c\ub294 app.js\ud30c\uc77c\uc774 \ube0c\ub77c\uc6b0\uc800\ub85c \uc804\ub2ec\ub418\uc5c8\uc744 \ub54c\uac00 \ubc14\ub85c TTV\uc774\uc790 TTI\uc774\ub2e4."),(0,a.kt)("p",null,"\uacb0\uad6d \ud398\uc774\uc9c0\uc758 View\ub97c \ub2f4\ub2f9\ud558\ub294 \uac83\ub3c4, Interact\ub97c \ub2f4\ub2f9\ud558\ub294 \uac83\ub3c4 app.js \ud30c\uc77c\uc774\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/116496222-85bf1d00-a8df-11eb-8463-61169ed6790b.png",alt:"image"})),(0,a.kt)("p",null,"SSR\uc5d0\uc11c\ub294 index.html\ud30c\uc77c\uc5d0 \uc774\ubbf8 \uc644\uc131\ub41c \ud398\uc774\uc9c0\uac00 \ub2f4\uaca8\uc838 \uc788\ub2e4."),(0,a.kt)("p",null,"index.html\uc774 \ube0c\ub77c\uc6b0\uc800\ub85c \uc804\ub2ec\ub418\uc5c8\uc744 \ub54c\uac00 TTV\uac00 \ub418\uace0,"),(0,a.kt)("p",null,"\ub3d9\uc801\uc778 \ub85c\uc9c1\uc774 \ub2f4\uae34 app.js\uac00 \uc804\ub2ec\ub418\uc5c8\uc744 \ub584 TTI\uac00 \ub41c\ub2e4."),(0,a.kt)("h2",{id:"4-async--defer-\uc18d\uc131-"},"4. Async / Defer \uc18d\uc131 \ud83d\udc94"),(0,a.kt)("h4",{id:"41-head\uc5d0-script\ub97c-\ub123\uc744-\uacbd\uc6b0-\ubc1c\uc0dd\ud558\ub294-\ubb38\uc81c\uc810"},"4.1. \\<head",">","\uc5d0 \\<script",">","\ub97c \ub123\uc744 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc810"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/116502887-b27b3080-a8ef-11eb-97ae-7f39162f8322.png",alt:"image"})),(0,a.kt)("p",null,"\\<head",">"," \ud639\uc740 \\<body",">"," \uc0c1\ub2e8\ubd80\uc5d0 \uc678\ubd80 JS\ud30c\uc77c\uc744 \ubd88\ub7ec\uc624\uba74"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JS\ud30c\uc77c\uc744 fetching\ud558\ub294 \uc2dc\uac04 \ub3d9\uc548 HTML\ud30c\uc2f1\uc774 \uc911\ub2e8\ub41c\ub2e4.")),(0,a.kt)("p",null,"\ud2b9\ud788 DOM \uc870\uc791\uc744 \uc218\ud589\ud558\ub294 JS\ud30c\uc77c\uc758 \uacbd\uc6b0,"),(0,a.kt)("p",null,"DOM\uc544 \uc644\uc131\ub418\uc9c0\ub3c4 \uc54a\uc558\ub294\ub370 JS\ud30c\uc77c\uc774 \ub85c\ub529\ub418\uc5b4 \uc624\ub958\ub97c \ubc1c\uc0dd\uc2dc\ud0ac \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c head\ub098 body \uc0c1\ub2e8\ubd80\uc5d0 script\ud0dc\uadf8\ub97c \ub123\ub294 \uac83\uc740 \ud53c\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,a.kt)("h4",{id:"42-body\ud0dc\uadf8-\ucd5c\ud558\ub2e8\ubd80\uc5d0-script\ub97c-\ub123\ub294\ub2e4\uba74"},"4.2. \\<body",">","\ud0dc\uadf8 \ucd5c\ud558\ub2e8\ubd80\uc5d0 \\<script",">","\ub97c \ub123\ub294\ub2e4\uba74?"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/116502910-c0c94c80-a8ef-11eb-99df-6bbe2d1d9017.png",alt:"image"})),(0,a.kt)("p",null,"\ubb3c\ub860 \\<script",">","\ub97c \\<body",">"," \ucd5c\ud558\ub2e8\uc5d0 \ub123\ub294 \uac83\uc744 \uc0dd\uac01\ud574\ubcfc \uc218\ub3c4 \uc788\ub2e4."),(0,a.kt)("p",null,"DOM\uc774 \ub2e4 \uc644\uc131\ub41c \ud6c4\uc5d0 js\uac00 executing \ub418\ub294 \uac83\uc774\ub2c8 \uc5d0\ub7ec\ub294 \ud53c\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h4",{id:"43-defer\uc18d\uc131\uc744-\ud65c\uc6a9\ud558\uc790"},"4.3. defer\uc18d\uc131\uc744 \ud65c\uc6a9\ud558\uc790"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/116503171-61b80780-a8f0-11eb-8d2e-c0056f4a3270.png",alt:"image"})),(0,a.kt)("p",null,"\ub354 \uc88b\uc740 \ubc29\ubc95\uc740 \\<script",">","\uc5d0 ",(0,a.kt)("strong",{parentName:"p"},"defer=true")," \uc18d\uc131\uc744 \ub123\uc5b4\uc8fc\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"defer\uc18d\uc131\uc774 \ub4e4\uc5b4\uac00\uba74 HTML \ud30c\uc2f1\uacfc \ubcc4\uac1c\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\ubc31\uadf8\ub77c\uc6b4\ub4dc(Web API)\uc5d0\uc11c js\ud30c\uc77c\uc774 fetch"),"\ub41c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc989 fetch \ub3c4\uc911\uc5d0 HTML \ud30c\uc2f1\uc774 \uc911\ub2e8\ub418\uc9c0 \uc54a\ub294\ub2e4.")),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 HTML\ud30c\uc2f1\uc774 \uc885\ub8cc\ub41c \ud6c4\uc5d0  \\<script",">","\ud0dc\uadf8\uac00 \uc120\uc5b8\ub41c \uc21c\uc11c\ub300\ub85c js\ud30c\uc77c\uc774 \uc2e4\ud589\ub41c\ub2e4."),(0,a.kt)("h4",{id:"44-async-\uc18d\uc131\uc744-\ud65c\uc6a9\ud55c\ub2e4\uba74"},"4.4. async \uc18d\uc131\uc744 \ud65c\uc6a9\ud55c\ub2e4\uba74"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75282888/116503128-48af5680-a8f0-11eb-8f17-2f1d067c239d.png",alt:"image"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"async"),"\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0, \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c fetching\uc774 \uc9c4\ud589\ub418\ub294 \uac83\uae4c\uc9c0\ub294 \ub3d9\uc77c\ud558\ub2e4."),(0,a.kt)("p",null,"\ub2e8, script\uac00 \uc120\uc5b8\ub41c \uc21c\uc11c\uc640 \ubb34\uad00\ud558\uac8c ",(0,a.kt)("strong",{parentName:"p"},"\uba3c\uc800 fetching\uc774 \uc644\ub8cc\ub41c \uc21c\uc11c\ub300\ub85c js\ud30c\uc77c\uc774 \uc2e4\ud589"),"\ub418\uba70, "),(0,a.kt)("p",null,"js\ud30c\uc77c\uc774 \uc2e4\ud589\ub418\ub294 \ub3d9\uc548\uc5d0\ub294 ",(0,a.kt)("strong",{parentName:"p"},"HTML\uc758 parsing\uc774 \uc911\ub2e8\ub41c\ub2e4.")))}u.isMDXComponent=!0}}]);