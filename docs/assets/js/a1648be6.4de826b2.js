"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[9666],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:27},l="Sass\ub780?",s={unversionedId:"Sass--by-woori-",id:"Sass--by-woori-",title:"Sass\ub780?",description:"Sass(Syntactically Awesome Style Sheets)\ub294 CSS preprocessor\ub85c\uc11c, CSS\uc758 \uae30\ub2a5\uc744 \ud655\uc7a5\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Extension \uc785\ub2c8\ub2e4.",source:"@site/docs/22-Sass--by-woori-.md",sourceDirName:".",slug:"/Sass--by-woori-",permalink:"/react-basic-study-202103/docs/Sass--by-woori-",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/22-Sass--by-woori-.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"22-Sass",permalink:"/react-basic-study-202103/docs/Sass--by-Juno-"},next:{title:"CSS Module \uc774\ub780?",permalink:"/react-basic-study-202103/docs/CSS-Module-eunbee-"}},i={},c=[{value:"Sass \uc2e4\ud589 \uacfc\uc815",id:"sass-\uc2e4\ud589-\uacfc\uc815",level:2},{value:"Sass source code ---&gt; (Sass Compiler) ---&gt; compiled CSS code",id:"sass-source-code-----sass-compiler-----compiled-css-code",level:3},{value:"Sass\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5",id:"sass\uc758-\ub2e4\uc591\ud55c-\uae30\ub2a5",level:2},{value:"1. Variable",id:"1-variable",level:3},{value:"2. Nesting",id:"2-nesting",level:3},{value:"3. Mixins",id:"3-mixins",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sass\ub780"},"Sass\ub780?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Sass(Syntactically Awesome Style Sheets)"),"\ub294 CSS preprocessor\ub85c\uc11c, CSS\uc758 \uae30\ub2a5\uc744 \ud655\uc7a5\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Extension \uc785\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","preprocessor\ub780 '\uc804\ucc98\ub9ac\uae30'\ub77c\ub294 \uc758\ubbf8\ub97c \uac00\uc9c0\uace0\uc788\uc73c\uba70, \ub9d0\uadf8\ub300\ub85c CSS\uac00 \ub3d9\uc791\ud558\uae30 \uc804\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uae30\ub2a5\uc73c\ub85c CSS\uac00 \uac00\uc9c0\uace0 \uc788\ub294",(0,a.kt)("br",{parentName:"p"}),"\n","\ubb38\uc81c\uc810\uc744 \ubcf4\uc644\ud574\uc8fc\ub294 \ud655\uc7a5 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,a.kt)("p",null,"CSS\ub97c \uc791\uc131\ud560 \ub54c \ucf54\ub4dc\uac00 \uc911\ubcf5\ub418\ub294 \uacbd\ud5d8\uc744 \ub2e4\ub4e4 \ud574\ubcf4\uc168\uc744 \uac81\ub2c8\ub2e4. \ub610\ud55c \ud30c\uc77c\uc774 \ubc29\ub300\ud574\uc9c0\uba74 \uadf8\ub9cc\ud07c \uac00\ub3c5\uc131\ub3c4 \ub5a8\uc5b4\uc9c0\uace0 \uc720\uc9c0 \ubc0f \ubcf4\uc218\uac00 \ud798\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ub7ec\ud55c \ubb38\uc81c\uc810\ub4e4\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4"),"\uc640 \uac00\uae4c\uc6b4 \ubc29\uc2dd\uc73c\ub85c \ubcc0\ud658\ud558\uc5ec ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubcc0\uc218, \ud568\uc218 \ub4f1\uc758 \ud504\ub85c\uadf8\ub798\ubc0d \uac1c\ub150"),"\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCSS(Sassy CSS)"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"SASS")," \uc774\ud6c4\uc5d0 \ub098\uc628 \uac83\uc785\ub2c8\ub2e4. \ub450\uac1c\ub294 \ubb38\ubc95\uc758 \ucc28\uc774\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4. \ud070 \ud2b9\uc9d5\uc744 \ubf51\uc790\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"SASS"),"\ubb38\ubc95\uc740 \ub4e4\uc5ec\uc4f0\uae30\ub97c \uc798\ud574\uc57c\ud558\uba70",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"SCSS"),"\uc640 \ub2e4\ub974\uac8c ",(0,a.kt)("inlineCode",{parentName:"p"},"{} curly braces")," \ub098 ",(0,a.kt)("inlineCode",{parentName:"p"},"; semicolon")," \uc740 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"SASS"),"\uac00 \uc5c5\uadf8\ub808\uc774\ub4dc \ub41c \ubc84\uc804\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"SCSS"),"\ub77c\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCSS"),"\uac00 \ubc94\uc6a9\uc131\uacfc CSS\uc640\uc758 \ud638\ud658\uc131\uc774 \ub354 \ub192\uc544 ",(0,a.kt)("inlineCode",{parentName:"p"},"SCSS"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uad8c\uc7a5\ub418\uae30 \ub54c\ubb38\uc5d0 \uc774 \ub4a4\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"SCSS"),"\uc758 \ubb38\ubc95\uc744 \ub2e4\ub8e8\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.   "),(0,a.kt)("h2",{id:"sass-\uc2e4\ud589-\uacfc\uc815"},"Sass \uc2e4\ud589 \uacfc\uc815"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SASS"),"\ub294 css file\uc774 \uc544\ub2cc sass file\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"SASS"),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},".sass")," \ud655\uc7a5\uc790\ub97c \uc0ac\uc6a9\ud558\uba74 \ub418\uace0, ",(0,a.kt)("inlineCode",{parentName:"p"},"SCSS"),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},".scss")," \ud655\uc7a5\uc790\ub97c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub807\uac8c \uc791\uc131\ub41c \ucf54\ub4dc\ub294 css\ucf54\ub4dc\ub85c \ubcc0\ud658\ub418\ub294 \uacfc\uc815\uc744 \uac70\uccd0\uc57c \ud569\ub2c8\ub2e4. \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub294 css\ub9cc \uc774\ud574\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ucef4\ud30c\uc77c\ud558\ub294 \uacfc\uc815\uc774 \ud544\uc694\ud55c \uac83\uc785\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uac04\ub2e8\ud558\uac8c \uc815\ub9ac\ud558\uc790\uba74 \uc774\ub807\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"sass-source-code-----sass-compiler-----compiled-css-code"},"Sass source code ---\x3e (Sass Compiler) ---\x3e compiled CSS code"),(0,a.kt)("h2",{id:"sass\uc758-\ub2e4\uc591\ud55c-\uae30\ub2a5"},"Sass\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5"),(0,a.kt)("h3",{id:"1-variable"},"1. Variable"),(0,a.kt)("p",null,"SCSS\ub294 \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0c9\uae54, \ud3f0\ud2b8\ud06c\uae30 \ub4f1\uc744 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<nav>\n  <ul class="menu">\n    <li><a href="#">Incense</a></li>\n    <li><a href="#">Diffuser</a></li>\n    <li><a href="#">Candle</a></li>\n  </ul>\n  <div class="button">\n    <a class="checkout-button" href="#">checkout</a>\n    <a class="cart-Button" href="#">add to cart</a>\n  </div>\n</nav>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*SCSS*/\n\n/*\ub2e4\uc74c\uacfc \uac19\uc774 \ubcc0\uc218\ub97c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4.*/\n$color-mint: #c9fffe;\n$color-purple: #c9d0ff;\n$color-yellow: #fcee90;\n$color-gray: #808080;\n$color-white: #fff;\n$width-button: 150px;\n\n/*nav tag\uc758 background-color\uc5d0 \ubcc0\uc218\ub97c \ub123\uc5b4\uc92c\uc2b5\ub2c8\ub2e4.*/\n\nnav {\n  margin: 30px;\n  background-color: $color-mint;\n}\n\n")),(0,a.kt)("h3",{id:"2-nesting"},"2. Nesting"),(0,a.kt)("p",null,"SCSS\uc5d0\uc11c\ub3c4 selectors \uc548\uc5d0 \ub2e4\ub978 selectors\ub97c \ud3ec\ud568\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubc29\ubc95\uc73c\ub85c \uc6b0\ub9ac\ub294 \ucf54\ub4dc\ub97c \uac04\uacb0\ud558\uac8c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".menu {\n  list-style: none;\n  float: left;\n  \n  li { /* nested selelctor */\n    margin-left: 50px;\n    \n    &:first-child {  /* &\ub294 \uc5ec\uae30\uae4c\uc9c0\uc758 selector path\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.*/\n      margin: 0;\n    }\n\n    a:link {\n      text-decoration: none;\n      text-transform: uppercase;\n      color: $color-gray;\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c\ub294 depth\uac00 \ud55c \ub2e8\uacc4\ubfd0\uc774\uc9c0\ub9cc \uc81c\ud55c\uc5c6\uc774 \uc5bc\ub9c8\ub4e0\uc9c0 \uae4a\uac8c nest\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","CSS\uc600\ub2e4\uba74 \uc774\ub7f0 \uc2dd\uc73c\ub85c \uc791\uc131\ub410\uc744 \uac83\uc785\ub2c8\ub2e4.   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".menu {\n  list-style: none;\n  float: left;\n}\n.menu li {\n  margin-left: 50px;\n}\n.menu li:first-child {\n  margin: 0;\n}\n.menu li a:link {\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #808080;\n}\n")),(0,a.kt)("h3",{id:"3-mixins"},"3. Mixins"),(0,a.kt)("p",null,"\ubc84\ud2bc\uc744 \uafb8\ubbf8\ub294 scss \ucf54\ub4dc\ub97c \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\n.button {\n  float: right;\n}\n\n.checkout-button:link,\n.cart-Button:link {\n  padding: 10px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 100px;\n  text-transform: uppercase;\n  width: $width-button;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: $color-white;\n}\n\n.checkout-button {\n  &:link {\n    background-color: $color-purple;\n  }\n  \n  &:hover {\n    background-color: darken($color-purple, 20%);\n  }\n}\n\n.cart-Button {\n  &:link {\n    background-color: $color-yellow;\n  }\n  \n  &:hover {\n    background-color: darken($color-yellow, 20%);\n  }\n}\n")),(0,a.kt)("p",null,"\uadf8\ub7f0\ub370 \uc911\ubcf5\ub418\ub294 \ucf54\ub4dc\uac00 \ubcf4\uc785\ub2c8\ub2e4. \ubc14\ub85c menu class\uc548\uc5d0 \uc788\ub294 a tag\uc758 \ud14d\uc2a4\ud2b8\ub97c \uafb8\uba70\uc8fc\ub294 \ubd80\ubd84\uacfc",(0,a.kt)("br",{parentName:"p"}),"\n","\ubc84\ud2bc\uc758 \ud14d\uc2a4\ud2b8\ub97c \uafb8\uba70\uc8fc\ub294 \ubd80\ubd84\uc785\ub2c8\ub2e4. \ubc14\ub85c \uc774 \ubd80\ubd84\uc785\ub2c8\ub2e4.   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"   .menu li a:link {\n     text-decoration: none;\n     text-transform: uppercase;\n     color: $color-gray;\n   }\n\n   .cart-Button:link {\n     text-decoration: none;\n     text-transform: uppercase;\n     color: $color-white;\n   }\n")),(0,a.kt)("p",null,"\uc774 \ubd80\ubd84\uc744 mixin\uc744 \uc0ac\uc6a9\ud574\uc11c \uac04\uacb0\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.    "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"@mixin text-style($color) {\n  text-transform: uppercase;\n  text-decoration: none;\n  color: $color;\n}\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ud14d\uc2a4\ud2b8 \uc2a4\ud0c0\uc77c mixin\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4. \ud568\uc218\ucc98\ub7fc \ubcc0\uc218\ub97c \ub123\uc5b4 \uc0c9\uae54\ub3c4 \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".menu {\n  list-style: none;\n  float: left;\n  \n  li {\n    margin-left: 50px;\n    \n    &:first-child {\n      margin: 0;\n    }\n\n    a:link {\n      @include text-style($color-gray);\n      /* \n      text-decoration: none;\n      text-transform: uppercase;\n      color: $color-gray;\n      */\n    }\n  }\n}\n")),(0,a.kt)("p",null,"@include\ub97c \uc0ac\uc6a9\ud574 \ud3ec\ud568\uc2dc\ucf1c\uc90d\ub2c8\ub2e4. \ubc84\ud2bc\ub3c4 \ub9c8\ucc2c\uac00\uc9d1\ub2c8\ub2e4.   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".checkout-button:link,\n.cart-Button:link {\n  padding: 10px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 100px;\n  text-transform: uppercase;\n  width: $width-button;\n  @include text-style($color-white);\n}\n")),(0,a.kt)("p",null,"\ubcf4\ub2e4 \ub354 \uac04\uacb0\ud558\uace0 \uc7ac\uc0ac\uc6a9\uae4c\uc9c0 \uac00\ub2a5\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.   "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53216594/113511814-bc35a080-959c-11eb-88bb-c86d2a1f5378.png",alt:"img"})),(0,a.kt)("p",null,"reference: ",(0,a.kt)("a",{parentName:"p",href:"https://www.udemy.com/course/advanced-css-and-sass"},"https://www.udemy.com/course/advanced-css-and-sass")))}u.isMDXComponent=!0}}]);