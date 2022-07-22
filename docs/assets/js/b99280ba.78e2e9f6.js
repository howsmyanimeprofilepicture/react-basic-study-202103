"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[4567],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),s=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return l.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},g=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(t),k=r,d=g["".concat(i,".").concat(k)]||g[k]||p[k]||a;return t?l.createElement(d,o(o({ref:n},u),{},{components:t})):l.createElement(d,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var l=t(7462),r=(t(7294),t(3905));const a={sidebar_position:74},o="49-Capturing & Bubbling (feat.Event Delegation)",c={unversionedId:"Capturing---Bubbling--feat.Event-Delegation---by-Juno-",id:"Capturing---Bubbling--feat.Event-Delegation---by-Juno-",title:"49-Capturing & Bubbling (feat.Event Delegation)",description:"&nbsp; \uc544\ub798\uc640 \uac19\uc740 \uad6c\uc870\ub97c \uac00\uc9c4 \uc0c1\ud0dc\ub77c\uace0 \uac00\uc815\ud558\uc5ec\ubd05\uc2dc\ub2e4.",source:"@site/docs/49-Capturing---Bubbling--feat.Event-Delegation---by-Juno-.md",sourceDirName:".",slug:"/Capturing---Bubbling--feat.Event-Delegation---by-Juno-",permalink:"/react-basic-study-202103/docs/Capturing---Bubbling--feat.Event-Delegation---by-Juno-",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/49-Capturing---Bubbling--feat.Event-Delegation---by-Juno-.md",tags:[],version:"current",sidebarPosition:74,frontMatter:{sidebar_position:74},sidebar:"tutorialSidebar",previous:{title:"49. \ubc84\ube14\ub9c1\uacfc \ucea1\uccd0\ub9c1, \uadf8\ub9ac\uace0 \uc774\ubca4\ud2b8 \uc704\uc784",permalink:"/react-basic-study-202103/docs/Bubbling-Capturing-and-Event-delegation-Bohyun-"},next:{title:"Event Bubbling, Caputuring, and Delegation",permalink:"/react-basic-study-202103/docs/Event_Bubbling_Capturing_and_Delegation--by-Tak-"}},i={},s=[{value:"<strong>\ud83e\udd37\u200d\u2640\ufe0f\ud83e\udd37\u200d\u2642\ufe0f WHY ?</strong>",id:"\ufe0f\ufe0f-why-",level:2},{value:"<strong>\ud83c\udfa2 flow ?</strong>",id:"-flow-",level:2},{value:"<strong>\ud83d\udd27 \uc81c\uc5b4\ud558\uae30</strong>",id:"-\uc81c\uc5b4\ud558\uae30",level:2},{value:"<strong>\ud83e\udd14 \ud574\uacb0 \ubc29\uc548 ?</strong>",id:"-\ud574\uacb0-\ubc29\uc548-",level:2},{value:"<strong>Event Delegation(\uc774\ubca4\ud2b8 \uc704\uc784)</strong>",id:"event-delegation\uc774\ubca4\ud2b8-\uc704\uc784",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"49-capturing--bubbling-featevent-delegation"},"49-Capturing & Bubbling (feat.Event Delegation)"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc544\ub798\uc640 \uac19\uc740 \uad6c\uc870\ub97c \uac00\uc9c4 \uc0c1\ud0dc\ub77c\uace0 \uac00\uc815\ud558\uc5ec\ubd05\uc2dc\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Capturing & Bubbling</title>\n    <link rel="stylesheet" href="style.css" />\n    <script src="main.js" defer><\/script>\n  </head>\n  <body>\n    <div class="red">\n      <div class="blue">\n        <div class="black"></div>\n      </div>\n    </div>\n  </body>\n</html>\n')),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const red = document.querySelector(".red");\nconst blue = document.querySelector(".blue");\nconst black = document.querySelector(".black");\n\nred.addEventListener("click", (e) => {\n  console.log("red");\n});\n\nblue.addEventListener("click", (e) => {\n  console.log("blue");\n});\n\nblack.addEventListener("click", (e) => {\n  console.log("black");\n});\n')),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvOxV1%2Fbtq3zM6LIGG%2FYt8EwIWqbyEYilc2DXUEK0%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc911\ucca9\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"\ub4e4\uc740 \uac01\uac01 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event Handler"),"\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc0c1\ud669\uc5d0\uc11c \uc81c\uc77c \ud558\uc704 ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"\uc778 black\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?"),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdQgkQs%2Fbtq3EJHJtRz%2FKcGmecq1opE0kuq4lFGqf1%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc9c1\uc811 \ud074\ub9ad\uc744 \ud55c black\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uac00 \uba3c\uc800 \ubc1c\uc0dd\uc774 \ub418\uace0 \uadf8\ub2e4\uc74c \uc21c\ucc28\uc801\uc73c\ub85c \ud55c\ub2e8\uacc4\uc529 \ubd80\ubaa8 ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uac00 \ubc1c\uc0dd \ub41c\uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7fc \ub9cc\uc57d blue\ub97c \ub204\ub974\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?"),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbVJ297%2Fbtq3AraeTrF%2FlKgMKD749HCxhQaHPKI8kK%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc774\ubc88\uc5d0\ub294 \uc9c1\uc811 \ud074\ub9ad\uc744 \ud55c blue\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uac00 \uba3c\uc800 \ubc1c\uc0dd\uc774 \ub418\uace0 \uadf8\ub2e4\uc74c \ubd80\ubaa8 ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"\uc778 red\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uac00 \ubc1c\uc0dd \ub41c\uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ufe0f\ufe0f-why-"},(0,r.kt)("strong",{parentName:"h2"},"\ud83e\udd37\u200d\u2640\ufe0f\ud83e\udd37\u200d\u2642\ufe0f WHY ?")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uba3c\uc800 \uc774\ub7ec\ud55c \ud604\uc0c1\uc744 \uc124\uba85\ud558\uae30 \uc704\ud574 \ub3c4\ud615\uc73c\ub85c \ub098\ud0c0\ub0b4\uc5b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FchoFuK%2Fbtq3zOKi2Zo%2Fsc3CJYew9YZzNM15Ff9II1%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc704\uc640 \uac19\uc740 \ub3c4\ud615\uc5d0\uc11c \uccab\ubc88\uc9f8 \uac00\uc815\uc774\uc600\ub358 black\uc744 \ud074\ub9ad\ud574\ubd05\uc2dc\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmfNTi%2Fbtq3DJOLBzi%2FkoEOtE1IJXeMSogbo4AjkK%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc774 \ub54c\uc758 black\uc740 \ubaa8\ub4e0 \uc774\ubca4\ud2b8\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc2dc\ubc1c\uc810")," ",(0,r.kt)("inlineCode",{parentName:"p"},"event.target")," \uc989, \uc2e4\uc81c ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uac00 \uc2e4\ud589\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),"\uc774 \ub418\uba70"),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTZ2ZI%2Fbtq3DJutBEU%2Fl3Ktp3MWXEexuX6pdI8Rk1%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uadf8 \ub2e4\uc74c blue\uc640 red\ub610\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"Event Handler"),"\ub97c \uac00\uc9c0\uace0 \uc788\uae30\ub54c\ubb38\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\uc774\ubca4\ud2b8 \ud0d1\uc2b9"),"\uc744 \ud558\uac8c \ub418\uba70 \uac01\uac01\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event.currentTarget"),"\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRKs1A%2Fbtq3zoFcTvi%2FD4v27XILv6GYh4K1b8Hbl1%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc2e4\uc81c \uac01\uac01\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uc758 \ub0b4\uc5d0\uc11c \ud655\uc778\ud574\ubcf4\uba74"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const red = document.querySelector(".red");\nconst blue = document.querySelector(".blue");\nconst black = document.querySelector(".black");\n\nred.addEventListener("click", (e) => {\n  console.log("----------------------------");\n  console.log("red");\n  console.log("red event.target", e.target.className);\n  console.log("red event.currentTarget", e.currentTarget.className);\n});\n\nblue.addEventListener("click", (e) => {\n  console.log("----------------------------");\n  console.log("blue");\n  console.log("blue event.target", e.target.className);\n  console.log("blue event.currentTarget", e.currentTarget.className);\n});\n\nblack.addEventListener("click", (e) => {\n  console.log("black");\n  console.log("black event.target", e.target.className);\n  console.log("black event.currentTarget", e.currentTarget.className);\n});\n')),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FreyY5%2Fbtq3CALyB1v%2FcUgKXQfxmH6TArkkvi6ibk%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc704\uc640\uac19\uc740 \uacb0\uacfc\uac00 \ub098\uc624\uac8c\ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"-flow-"},(0,r.kt)("strong",{parentName:"h2"},"\ud83c\udfa2 flow ?")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc774\ub7ec\ud55c flow\ub294 3\uac00\uc9c0\uc758 \uacfc\uc815\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9pCx9%2Fbtq3z4M8FSh%2FNiF4q8otI77JRgre5Hi2h1%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\uba3c\uc800 black\ub97c \ub204\ub974\uac8c \ub418\uba74 \uc0c1\uc704\uc758 red -> blue\ub97c \uba3c\uc800 \uac70\uce58\uac8c \ub429\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 ",(0,r.kt)("strong",{parentName:"li"},"capture phase"),"\ub77c\uace0 \ud558\uba70 ",(0,r.kt)("strong",{parentName:"li"},"propagate up")," \uc774\ub77c\uace0\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ub2e4\uc74c \uc9c1\uc811\uc801\uc73c\ub85c \ud074\ub9ad\ud55c black\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"event"),"\uac00 \uc2e4\ud589\uc774 \ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"target phase"),"\uac00 \uc77c\uc5b4\ub0a9\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ub2e4\uc2dc blue -> red\ub85c \uac00\ub294 ",(0,r.kt)("strong",{parentName:"li"},"bubble phase"),", ",(0,r.kt)("strong",{parentName:"li"},"propagate down"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc774\ub7ec\ud55c \uacfc\uc815\uc740 \ub108\ubb34\ub098 \ube44\ud6a8\uc728\uc801\uc778 \uacfc\uc815\uc774\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\ub97c \ud0d1\uc2b9\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"\uac00 ",(0,r.kt)("strong",{parentName:"p"},"capturing"),"\uc5d0\uc11c \uc2e4\ud589\ub420\uc9c0 ",(0,r.kt)("strong",{parentName:"p"},"bubbling"),"\uc5d0\uc11c \uc2e4\ud589\ub420\uc9c0\uc758 \uc81c\uc57d\uc744 \uc90d\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\ud83d\udca1 propagate"),(0,r.kt)("br",{parentName:"p"}),"\n","\uc5ec\uae30\uc11c ",(0,r.kt)("strong",{parentName:"p"},"propagate"),"\ub294 \uc0ac\uc804\uc801\uc778 \uc758\ubbf8\ub85c\ub294 \uc804\ud30c\ud558\ub2e4, \ubc88\uc2dd\ud558\ub2e4\uc758 \uc758\ubbf8\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"-\uc81c\uc5b4\ud558\uae30"},(0,r.kt)("strong",{parentName:"h2"},"\ud83d\udd27 \uc81c\uc5b4\ud558\uae30")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uae30\ubcf8\uc801\uc73c\ub85c\ub294 ",(0,r.kt)("strong",{parentName:"p"},"bubbling"),"\uc5d0\uc11c \uc2e4\ud589\uc774 \ub418\ub098 \uc0c1\ud669\uc5d0\ub530\ub77c ",(0,r.kt)("strong",{parentName:"p"},"capturing"),"\uc5d0\uc11c \uc2e4\ud589\uc774 \ub418\uae38 \uc6d0\ud55c\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\uc758 \uc138\ubc88\uc9f8 \uc778\uc790\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uac12\uc744 \ub123\uc5b4\uc90d\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const red = document.querySelector(".red");\nconst blue = document.querySelector(".blue");\nconst black = document.querySelector(".black");\n\nred.addEventListener("click", (e) => {\n  console.log("----------------------------");\n  console.log("red");\n  console.log("red event.target", e.target.className);\n  console.log("red event.currentTarget", e.currentTarget.className);\n});\n\nblue.addEventListener(\n  "click",\n  (e) => {\n    console.log("----------------------------");\n    console.log("blue");\n    console.log("blue event.target", e.target.className);\n    console.log("blue event.currentTarget", e.currentTarget.className);\n  },\n  //  \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub098 \uc0dd\ub7b5\uc744\ud558\uc5ec true\uac12\ub9cc \ub123\uc5b4\ub3c4 \ub429\ub2c8\ub2e4.\n  // { capture: true }\n  true\n);\n\nblack.addEventListener("click", (e) => {\n  console.log("black");\n  console.log("black event.target", e.target.className);\n  console.log("black event.currentTarget", e.currentTarget.className);\n});\n')),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgTW8B%2Fbtq3GCCyZi0%2FEUaJNteoCBvurZjDkkvjPK%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud558\uc9c0\ub9cc ",(0,r.kt)("strong",{parentName:"p"},"capturing"),"\ub2e8\uacc4\uc5d0\uc11c \uc791\uc5c5\uc744 \ud558\ub294\uc77c\uc740 \uac70\uc758 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"-\ud574\uacb0-\ubc29\uc548-"},(0,r.kt)("strong",{parentName:"h2"},"\ud83e\udd14 \ud574\uacb0 \ubc29\uc548 ?")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc774\ub7ec\ud55c ",(0,r.kt)("strong",{parentName:"p"},"bubbling"),"\uc744 \ubc29\uc9c0\ud558\ub294 \ubc29\ubc95\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"event.stopPropagation();")," \uc774\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"event.stopImmediatePropagation();"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const red = document.querySelector(".red");\nconst blue = document.querySelector(".blue");\nconst black = document.querySelector(".black");\n\nred.addEventListener("click", (e) => {\n  console.log("----------------------------");\n  console.log("red");\n  console.log("red event.target", e.target.className);\n  console.log("red event.currentTarget", e.currentTarget.className);\n});\n\nblue.addEventListener("click", (e) => {\n  console.log("----------------------------");\n  console.log("blue");\n  console.log("blue event.target", e.target.className);\n  console.log("blue event.currentTarget", e.currentTarget.className);\n  e.stopPropagation();\n});\n\nblack.addEventListener("click", (e) => {\n  console.log("black");\n  console.log("black event.target", e.target.className);\n  console.log("black event.currentTarget", e.currentTarget.className);\n});\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"event.stopPropagation();"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 ",(0,r.kt)("strong",{parentName:"p"},"bubbling"),"\uc2dc \ud574\ub2f9 ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," \uae4c\uc9c0\ub9cc \uc2e4\ud589\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXJYx1%2Fbtq3Kysb3Uz%2FEj3uvrR7OckC14x6O6HvBK%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"event.stopImmediatePropagation();"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc0c1\uc704 \ubfd0\ub9cc\uc544\ub2c8\ub77c \uac19\uc740 \ub2e8\uacc4\uc5d0\uc11c\uc758 \ub2e4\ub978 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\ub610\ud55c \uc2e4\ud589\uc774 \ub418\uc9c0\uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const red = document.querySelector(".red");\nconst blue = document.querySelector(".blue");\nconst black = document.querySelector(".black");\n\nred.addEventListener("click", (e) => {\n  console.log("----------------------------");\n  console.log("red");\n});\n\nblue.addEventListener("click", (e) => {\n  console.log("----------------------------");\n  console.log("blue");\n});\n\nblack.addEventListener("click", (e) => {\n  console.log("black1");\n  e.stopImmediatePropagation();\n});\n\nblack.addEventListener("click", (e) => {\n  console.log("black2");\n});\n')),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6lSOX%2Fbtq3JeufubZ%2FpLgwxadCRgbDwBV8oZNId0%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \ubc29\ubc95\uc73c\ub85c \ud574\uacb0\ud558\ub294\uac83\uc740 \uc633\uc9c0 \ubabb\ud569\ub2c8\ub2e4. \uc784\uc758\ub85c \ube0c\ub77c\uc6b0\uc800\uc758 \uc791\ub3d9\uc744 \ub9c9\ub294\uac83\uc740 \uc608\uc0c1\uce58\ubabb\ud55c \uc624\ub958\uc758 \uc6d0\uc778\uc774 \ub420 \uc218 \uc788\uae30\ub54c\ubb38\uc785\ub2c8\ub2e4. \ub54c\ubb38\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c\ub3c4 \ud574\uacb0\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const red = document.querySelector(".red");\nconst blue = document.querySelector(".blue");\nconst black = document.querySelector(".black");\n\nred.addEventListener("click", (e) => {\n  if (e.target !== e.currentTarget) {\n    return;\n  }\n  console.log("----------------------------");\n  console.log("red");\n});\n\nblue.addEventListener("click", (e) => {\n  if (e.target !== e.currentTarget) {\n    return;\n  }\n  console.log("----------------------------");\n  console.log("blue");\n});\n\nblack.addEventListener("click", (e) => {\n  console.log("black");\n});\n')),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6lSOX%2Fbtq3JeufubZ%2FpLgwxadCRgbDwBV8oZNId0%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"event-delegation\uc774\ubca4\ud2b8-\uc704\uc784"},(0,r.kt)("strong",{parentName:"h2"},"Event Delegation(\uc774\ubca4\ud2b8 \uc704\uc784)")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \uc0ac\uc2e4 \uc704\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"Capturing"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"Bubbling"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"Event Delegation(\uc774\ubca4\ud2b8 \uc704\uc784)")," \uc744 \uc774\ud574\ud558\uace0 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c ",(0,r.kt)("strong",{parentName:"p"},"\ucd08\uc11d"),"\uc785\ub2c8\ub2e4. \ub9cc\uc57d \uc544\ub798\uc640 \uac19\uc740 \uad6c\uc870\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uc5ec \ubd05\uc2dc\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8EmZM%2Fbtq3FlOOQQ1%2FbBJWymrcwEspcYTbSLy2kK%2Fimg.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," Tab\uacfc DropDown\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\ub97c \uad6c\ud604 \ud558\uae30\uc704\ud574\uc11c \ub300\ubd80\ubd84 \uc544\ub798\uc640 \uac19\uc774 \uac01\uac01\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\ub97c \ubd80\uc5ec\ud560\uac83 \uc785\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const items = document.querySelectorAll(".header__nav--item");\nconst gnb = document.querySelector(".gnb");\nconst gnbItems = document.querySelector(".gnb-items");\n\nitems.forEach((item) => {\n  item.addEventListener("click", () => {\n    alert("hi");\n  });\n});\n\ngnb.addEventListener("click", () => {\n  gnbItems.classList.toggle("toggle");\n});\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \ubc29\ubc95\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\ub97c \ubd80\uc5ec\ud560 \uc77c\uc774 \uc0dd\uae38\ub54c\ub9c8\ub2e4 \ubcc0\uc218 \uc120\uc5b8\ub4f1 \ucd94\uac00\ud574\uc918\uc57c \ud569\ub2c8\ub2e4. \ub54c\ubb38\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\uc774\ubca4\ud2b8 \uc704\uc784"),"\uc744 \uc0ac\uc6a9\ud558\ub294\uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const header = document.querySelector(".header");\n\nconst alertHandler = () => {\n  alert("hi");\n};\n\nconst onToggle = () => {\n  const items = document.querySelector(".gnb-items");\n  items.classList.toggle("toggle");\n};\n\nheader.addEventListener("click", (e) => {\n  const { className } = e.target;\n  if (className === "header__nav--item") {\n    alertHandler();\n  } else if (className === "gnb") {\n    onToggle();\n  }\n});\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xa0"," \ucc98\uc74c\uc758 \ubc29\ubc95\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," \ud558\ub098\ud558\ub098\ub97c \ucc3e\uc544\uac00\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\ub97c \ubd80\uc5ec\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7ec\ud55c \ubc29\ubc95\ubcf4\ub2e4\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc774\ubca4\ud2b8 \uc704\uc784"),"\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc131\ub2a5\uc758 \uac1c\uc120\ub4f1\uc758 \uc774\uc810\uc744 \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7gKtNC3b_S8"},"\uae40\ubc84\uadf8")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uace0\uc0dd\ud558\uc168\uc2b5\ub2c8\ub2e4 ~ ! \ud83d\udc4b"))}p.isMDXComponent=!0}}]);