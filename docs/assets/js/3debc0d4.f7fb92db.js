"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[1204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:7},o="useRef \uc0ac\uc6a9\ud558\uae30",u={unversionedId:"useRef-\ub85c-\ud2b9\uc815-DOM-\uc120\ud0dd\ud558\uae30-\ubc30\uc5f4-\ub80c\ub354\ub9c1\ud558\uae30",id:"useRef-\ub85c-\ud2b9\uc815-DOM-\uc120\ud0dd\ud558\uae30-\ubc30\uc5f4-\ub80c\ub354\ub9c1\ud558\uae30",title:"useRef \uc0ac\uc6a9\ud558\uae30",description:"useRef\ub294 React Hook\uc758 \ud55c \uc885\ub958\uc785\ub2c8\ub2e4. \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c ref \ub97c \uc0ac\uc6a9 \ud560 \ub54c\uc5d0\ub294 useRef Hook\uc744 \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4.",source:"@site/docs\\06-useRef-\ub85c-\ud2b9\uc815-DOM-\uc120\ud0dd\ud558\uae30-\ubc30\uc5f4-\ub80c\ub354\ub9c1\ud558\uae30.md",sourceDirName:".",slug:"/useRef-\ub85c-\ud2b9\uc815-DOM-\uc120\ud0dd\ud558\uae30-\ubc30\uc5f4-\ub80c\ub354\ub9c1\ud558\uae30",permalink:"/react-basic-study-202103/docs/useRef-\ub85c-\ud2b9\uc815-DOM-\uc120\ud0dd\ud558\uae30-\ubc30\uc5f4-\ub80c\ub354\ub9c1\ud558\uae30",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-useRef-\ub85c-\ud2b9\uc815-DOM-\uc120\ud0dd\ud558\uae30-\ubc30\uc5f4-\ub80c\ub354\ub9c1\ud558\uae30.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Form",permalink:"/react-basic-study-202103/docs/Form"},next:{title:"useRef\ub85c \ucef4\ud3ec\ub10c\ud2b8 \uc548\uc758 \ubcc0\uc218 \ub9cc\ub4e4\uae30",permalink:"/react-basic-study-202103/docs/useRefAndAppendItemToArray"}},c={},i=[{value:"useRef \uc0ac\uc6a9 \ubc29\ubc95",id:"useref-\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"useRef\ub97c \uc0ac\uc6a9\ud574 \ud2b9\uc815 DOM \uc694\uc18c \uc120\ud0dd\ud558\uae30",id:"useref\ub97c-\uc0ac\uc6a9\ud574-\ud2b9\uc815-dom-\uc694\uc18c-\uc120\ud0dd\ud558\uae30",level:2},{value:"useRef \uc640 useState \ube44\uad50",id:"useref-\uc640-usestate-\ube44\uad50",level:2},{value:"list key",id:"list-key",level:2}],p={toc:i};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useref-\uc0ac\uc6a9\ud558\uae30"},"useRef \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"useRef\ub294 React Hook\uc758 \ud55c \uc885\ub958\uc785\ub2c8\ub2e4. \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c ref \ub97c \uc0ac\uc6a9 \ud560 \ub54c\uc5d0\ub294 useRef Hook\uc744 \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","(\ud074\ub798\uc2a4\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 React.createRef \ub610\ub294 callback \ud568\uc218\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uace0 \ud569\ub2c8\ub2e4.)"),(0,a.kt)("p",null,"JavaScript\uc5d0\uc11c \ud2b9\uc815 DOM \uc694\uc18c\ub97c \uac00\uc838\uc62c \ub54c getElementById, querySelector \uac19\uc740 DOM Selector \ud568\uc218\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\uc640 \uac19\uc774 React\uc5d0\uc11c\ub294 useRef\ub97c \ud1b5\ud574\uc11c \ud2b9\uc815 DOM \uc694\uc18c\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"useref-\uc0ac\uc6a9-\ubc29\ubc95"},"useRef \uc0ac\uc6a9 \ubc29\ubc95"),(0,a.kt)("p",null,"useRef hook\uc744 import \ud55c \uc774\ud6c4 \ucd08\uae30\uac12\uc744 \ub123\uc5b4\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useRef } from 'react';\n\nconst myRef = useRef(initialValue);\n")),(0,a.kt)("p",null,"\uc774\uac83\uc740 current property\ub97c \uac00\uc9c4 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n\ucd08\uae30\uac12\uc744 0\uc73c\ub85c \uc9c0\uc815\ud588\ub2e4\uba74 { current: 0 } \uc640 \uac19\uc740 \ud615\ud0dc\uac00 \ubc18\ud658\ub420 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myRef = useRef(0); // { current: 0 }\n")),(0,a.kt)("h2",{id:"useref\ub97c-\uc0ac\uc6a9\ud574-\ud2b9\uc815-dom-\uc694\uc18c-\uc120\ud0dd\ud558\uae30"},"useRef\ub97c \uc0ac\uc6a9\ud574 \ud2b9\uc815 DOM \uc694\uc18c \uc120\ud0dd\ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState, useEffect, useRef } from 'react';\n\nconst App = () => {\n  const [name, setName] = useState('');\n  const inputRef = useRef();\n\n  const makeFocus = () => {\n      console.log(inputRef.current); // <input> DOM Node\n      inputRef.current.focus();\n  };\n\n  return (\n    <>\n      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>\n      <div>My name is {name}</div>\n      <button onClick={makeFocus}>Focus Input</button>\n    </>\n  );\n};\n\nexport default App;\n")),(0,a.kt)("h2",{id:"useref-\uc640-usestate-\ube44\uad50"},"useRef \uc640 useState \ube44\uad50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const App = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    setCount(count => count + 1);\n  });\n\n  return <div>I rendered {count} times</div>;\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const App = () => {\n  const count = useRef(0);\n\n  useEffect(() => {\n     count.current = count.current + 1;\n  });\n\n  return <div>I rendered {count.current} times</div>;\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"state\uac00 \ubc14\ub00c\uba74 component\uc758 re-rendering\uc744 \uc57c\uae30\uc2dc\ud0a4\ub294 \ubc18\uba74, refs\ub294 \uac12\uc774 \ubcc0\ud574\ub3c4 \ucef4\ud3ec\ub10c\ud2b8\uac00 re-rendering \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"li"}),"")),(0,a.kt)("h1",{id:"rendering-array"},"Rendering Array"),(0,a.kt)("p",null,"React\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ubc30\uc5f4\uc744 \ubc18\ud658\ud558\uac8c \ud558\uba74 \ub300\uad04\ud638\ub294 \uc0dd\ub7b5\ud558\uace0 \ud574\ub2f9 \ubc30\uc5f4\uc758 \uac12\uc744 \ucc28\ub840\ub300\ub85c \ubcf4\uc5ec\uc8fc\uac8c \ub429\ub2c8\ub2e4.\n\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \ub0b4\uc7a5\ub418\uc5b4 \uc788\ub294 map \ub9e4\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud574 \ubc30\uc5f4 \uc548\uc758 \uac01\uac01\uc758 \uc694\uc18c\ub97c \uc6d0\ud558\ub294 \ud615\ud0dc\ub85c \ubc18\ud658\ud558\uc5ec \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const App = () => {\n  const arr = [1, 2, 3, 4, 5];\n\n  return arr;\n};\n")),(0,a.kt)("p",null,"\ubc30\uc5f4 \uc548\uc758 \uac01 element\uc758 \uac12\uc744 \uc911\uad04\ud638 {}\ub97c \uc774\uc6a9\ud558\uc5ec JSX\uc5d0 \ud3ec\ud568 \uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const App = () => {\n    const todoLists = [\n        {id: 1, task: '\uc0e4\uc6cc'},\n        {id: 2, task: '\uc0b0\ucc45'},\n        {id: 3, task: '\ub9ac\uc5d1\ud2b8 \uacf5\ubd80'},\n        {id: 4, task: '\uc800\ub141 \uc57d\uc18d'}\n    ];\n\n  return todoLists.map(element => <div>{element.task}</div>);\n};\n")),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774 \uc0c1\ud0dc\uc5d0\uc11c\ub294 warning \ubb38\uad6c\uac00 \ub739\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53216594/112291266-4cd5cc00-8cd3-11eb-94d0-6bcf6be383e3.png",alt:"img"})),(0,a.kt)("h2",{id:"list-key"},"list key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const App = () => {\n    const todoLists = [\n        {id: 1, task: '\uc0e4\uc6cc'},\n        {id: 2, task: '\uc0b0\ucc45'},\n        {id: 3, task: '\ub9ac\uc5d1\ud2b8 \uacf5\ubd80'},\n        {id: 4, task: '\uc800\ub141 \uc57d\uc18d'}\n    ];\n\n  return todoLists.map(element => <div key={element.id}>{element.task}</div>);\n};\n")),(0,a.kt)("p",null,"\ubc30\uc5f4 \uc18d \uac01\uac01\uc758 \uc694\uc18c\uc5d0 key \uc18d\uc131\uc744 \ub123\uc5b4\uc8fc\uba74 \uacbd\uace0\ubb38\uad6c\uac00 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub54c key\uac12\uc740 \ubc18\ub4dc\uc2dc \uace0\uc720\ud574\uc57c\ud569\ub2c8\ub2e4. \uac01\uac01\uc758 \uc694\uc18c\uc5d0 \uace0\uc720\ud55c \uc544\uc774\ub514\ub97c \ubd80\uc5ec\ud568\uc73c\ub85c\uc368 \uc544\uc774\ub514\uac00 \ub3d9\uc77c\ud558\uba74 \ub098\uc911\uc5d0 \ub2e4\ub978 \uc790\uc2dd \uc694\uc18c\uac00 \ucd94\uac00\ub418\uac70\ub098",(0,a.kt)("br",{parentName:"p"}),"\n","\ubc30\uc5f4 \uc18d\uc5d0\uc11c \uc704\uce58\uac00 \ubcc0\uacbd\uc774 \ub410\uc744 \ub54c\ub3c4 \uc544\uc774\ub514\uac00 \ub3d9\uc77c\ud558\uace0 content\uac00 \ubc14\ub00c\uc9c0 \uc54a\uc558\ub2e4\uba74 \ubd88\ud544\uc694\ud558\uac8c re-rendering\uc744 \ud558\uc9c0 \uc54a\ub294\ub2e4\uace0 \ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc989 key \uac12\uc740 React\uac00 \ubc30\uc5f4\uac12\uc744 \ud6a8\uc728\uc801\uc73c\ub85c rendering\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ud558\uae30\uc704\ud574 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53216594/112297684-8b6e8500-8cd9-11eb-87fc-bb56ccfe0709.png",alt:"img"})),(0,a.kt)("p",null,"\ubc30\uc5f4 \uc548\uc758 \uc694\uc18c\uc5d0 id\uac00 \uc5c6\uc744 \uacbd\uc6b0\uc5d0 \ubc30\uc5f4\uc758 index\uac12\uc744 \uc0ac\uc6a9\ud558\uae30\ub3c4 \ud558\uc9c0\ub9cc \uc774\ub294 \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub294 \ubc29\ubc95\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ubc30\uc5f4 \uc548\uc758 \uc544\uc774\ud15c\uc758 \uc21c\uc11c\uac00 \ubc14\ub014 \uacbd\uc6b0 index\uac12\uc774 \ubcc0\ud560 \uac83\uc774\uace0, \uc774\ub294 React\uac00 \uc791\ub3d9\ud560 \ub54c \ud070 \ud63c\ub780\uc744 \uc904 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.   "),(0,a.kt)("p",null,"\ub2e4\uc74c \uae30\uc0ac\ub97c \uc77d\uc73c\uba74 key\uac12\uc744 index\ub97c \uc0ac\uc6a9\ud588\uc744 \ub54c \ubd80\uc791\uc6a9\uc5d0 \ub300\ud55c \uc608\uc2dc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","[reference: Pokorny\u2019s article for an in-depth explanation on the negative impacts of using an index as a key]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9c1\ud06c: ",(0,a.kt)("a",{parentName:"li",href:"https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318/"},"https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318/"))))}l.isMDXComponent=!0}}]);