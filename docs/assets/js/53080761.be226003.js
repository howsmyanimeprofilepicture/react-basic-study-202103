"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[6909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||s;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<s;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:23},i="Immer",o={unversionedId:"Immer-by_manju-",id:"Immer-by_manju-",title:"Immer",description:"\ud83e\udd14 Why is Immutability important in React??",source:"@site/docs/16-Immer-by_manju-.md",sourceDirName:".",slug:"/Immer-by_manju-",permalink:"/react-basic-study-202103/docs/Immer-by_manju-",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/16-Immer-by_manju-.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"immer\ub97c \uc0ac\uc6a9\ud55c \ub354 \uc26c\uc6b4 \ubd88\ubcc0\uc131 \uad00\ub9ac",permalink:"/react-basic-study-202103/docs/immer-Bohyun-"},next:{title:"Emotion \ud83d\ude2d\ud83d\ude31\ud83e\udd22\ud83d\ude21",permalink:"/react-basic-study-202103/docs/Emotion-by-Tak"}},p={},m=[{value:"Make copy using Javascript",id:"make-copy-using-javascript",level:2},{value:"How Immer works",id:"how-immer-works",level:2}],l={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"immer"},"Immer"),(0,a.kt)("p",null,"\ud83e\udd14 ",(0,a.kt)("strong",{parentName:"p"},"Why is Immutability important in React??")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"React\ub294 state\uac00 \ubcc0\ud560 \ub54c \uadf8\uac78 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc778\uc9c0"),"\ud558\uace0 re-rendering\ud569\ub2c8\ub2e4. \uadf8\ub7fc React\ub294 \uc5b4\ub5bb\uac8c \uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubcc0\ud654\ub97c \uc778\uc9c0"),"\ud558\ub294 \uac78 \uae4c\uc694? ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc5b4\ub5a4\uac8c \ubcc0\ud588\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc54c\uae30 \uc704\ud574\uc11c\ub294 \uc77c\ub2e8 \ube44\uad50 \ub300\uc0c1, \uc989 \uc6d0\ubcf8\uc774 \uc788\uc5b4\uc57c '\uc544! \uc6d0\ubcf8\uc774 \ubcc0\ud588\uad6c\ub098'\ub77c\ub294 \uac78 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\uc6d0\ubcf8\uc744 \ubcf5\uc0ac\ud574\uc11c \uadf8 \ubcf5\uc0ac\ubcf8\uc744 \uc218\uc815\ud55c \ub2e4\uc74c \uc6d0\ubcf8\uacfc \ubcf5\uc0ac\ubcf8\uc744 \ube44\uad50\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"strong"},'"\uc6d0\ubcf8\uc774 \ubcc0\ud588\ub2e4"'),'\ub294 \uc0ac\uc2e4\uacfc "\uc5b4\ub5a4 \ubd80\ubd84\uc774 \ubcc0\ud588\ub2e4"\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud558\uc9c0\ub9cc \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \ud558\ub098 \ud558\ub098 \ube44\uad50\ud558\uba74\uc11c \uc5b4\ub5a4\ubd80\ubd84\uc774 \ubcc0\ud55c\uc9c0\ub97c \uba3c\uc800 \ucc3e\uace0 \ubcc0\ud55c \uc0ac\uc2e4\uc744 \uc778\uc9c0\ud558\ub294 \uac74 \uac1d\uccb4\uac00 \uae4a\uc5b4 \uc9c8\uc218\ub85d \uc2dc\uac04\uc774 \uc624\ub798 \uac78\ub9ac\uace0 \uacfc\uc815\uc774 \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const userState = {\n    name: 'Choi', \n    age: '25', \n    loginToken: 'asfwerasdf', \n    friends: ['Lee', 'Park'], \n    skills: { \n        frontEnd: ['React', 'Vue', 'jQuery', 'HTML','CSS'], \n        backEnd: ['Node.js'], \n        common: ['TS'] \n        } \n    }\n")),(0,a.kt)("p",{parentName:"li"},"  \uc608\ub97c \ub4e4\uc5b4, \uc704\uc640 \uac19\uc740 \uac1d\uccb4\uac00 \uc788\uc744 \ub54c 'skills' \uac1d\uccb4 \ud504\ub85c\ud37c\ud2f0\uc5d0\uc11c, 'backend' \ud504\ub85c\ud37c\ud2f0\uc5d0 'JAVA'\ub97c \ucd94\uac00\ud588\ub2e4\uba74 React\ub294 \ubcc0\ud654\ud588\ub2e4\ub294 \uac78 \uc54c\uc544\ub0b4\uae30 \uc704\ud574 \ubaa8\ub4e0 \ud504\ub85c\ud37c\ud2f0\ub97c \ud558\ub098\ud558\ub098 \ube44\uad50\ud574\uc57c \ud569\ub2c8\ub2e4. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uadf8\ub798\uc11c React\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc6d0\ubcf8\uc774 \ubcc0\ud588\ub2e4"),"\ub294 \uc0ac\uc2e4\ub9cc \ube60\ub974\uac8c \uc54c\uc544\ub0b4\uace0 re-rendering\uc744 \ud569\ub2c8\ub2e4. \uc774\ub807\uac8c ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc6d0\ubcf8\uc774 \ubcc0\ud588\ub2e4\ub294 \uc0ac\uc2e4"),"\uc744 \uc81c\uc77c \ube68\ub9ac \uc54c\uc544\ub0bc \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \ucc38\uc870 \uac12\uc774 \ub2e4\ub978 \ubcf5\uc0ac\ubcf8\uc744 \ub9cc\ub4dc\ub294 \uac83\uc785\ub2c8\ub2e4. \uac1d\uccb4 \ub0b4\ubd80\ub97c \uae4a\uc774 \ub4e4\uc5ec\ub2e4 \ubcfc \ud544\uc694 \uc5c6\uc774, \uc0c1\uc704 \uac1d\uccb4 \uc790\uccb4\uac00 \ub2e4\ub978 \ucc38\uc870\uac12\uc744 \uac00\uc9c0\ub294 \ubcf5\uc0ac\ubcf8\uc744 \ub9cc\ub4e4\uc5b4 \ub0c8\ub2e4\ub294 \uac83\uc740 \uadf8 \uac1d\uccb4\ub97c \ubcc0\ud558\uac8c \ud560\uac70\ub77c\ub294 \uc758\ubbf8\uc640 \ub3d9\uc77c\ud558\ubbc0\ub85c re-rendering\uc744 \uacb0\uc815 \ud569\ub2c8\ub2e4. "))),(0,a.kt)("h2",{id:"make-copy-using-javascript"},"Make copy using Javascript"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"array.concat()"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"handleClick() {\nthis.setState(state => ({\n    words: state.words.concat(['marklar'])\n}));\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spread syntax"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"handleClick() {\nthis.setState(state => ({\n    words: [...state.words, 'marklar'],\n}));\n};\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Object.assign()"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateColorMap(colormap) {\n    return Object.assign({}, colormap, {right: 'blue'});\n}\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uac04\ub2e8\ud558\uac8c \uc704\uc758 \ud568\uc218 \uc5f0\uc2b5\ud574\ubcf4\uae30: ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/suspicious-resonance-lv6wj"},"https://codesandbox.io/s/suspicious-resonance-lv6wj"))),(0,a.kt)("p",null,"\ud83e\udd14 ",(0,a.kt)("strong",{parentName:"p"},"Why we need 'Immer'?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc704\uc5d0\uc11c \uc0b4\ud3b4\ubd24\ub4ef\uc774, \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574 javascript\uc5d0\uc11c \uc6d0\ub798 \ubd80\ud130 \uc0ac\uc6a9\uac00\ub2a5\ud55c \ud568\uc218\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7fc \uc5b4\ub5a8 \ub54c 'Immer' library\ub97c \uc0ac\uc6a9\ud558\uba74 \uc88b\uc744\uae4c\uc694??"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const user = { \n    name: 'Choi', \n    age: 25, \n    friends: ['Park', 'Kim']\n    } \n\nconst otherUser = { ...user }; \n\nuser.name = 'Lee'; \n\nuser.friends.push('Kang'); \n\n/* user = { name: 'Lee', age: 25, friends: ['Park', 'Kim', 'Kang'] } \notherUser = { name: 'Choi', age: 25, friends: ['Park', 'Kim', 'Kang'] } */ \n\nuser === otherUser // false \nuser.friends === otherUser.friends // true\n")),(0,a.kt)("p",{parentName:"li"},"  spread syntax\ub85c otherUser\ub77c\ub294 \ubcf5\uc0ac\ubcf8 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. user.name\uc744 \ubc14\uafd4\uc900 \uac83\uc740 otherUser\uc5d0 \ubc18\uc601\ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc user.friends.push()\ub97c \ud588\uc744 \ub550 \ub450 \uac1d\uccb4\uac00 \uac19\uc774 \ubc14\ub01d\ub2c8\ub2e4. React\ub77c\uace0 \uc0dd\uac01 \ud588\uc744 \ub550 \uc5b4\ub5a4 \ubb38\uc81c\uac00 \uc0dd\uae38\uae4c\uc694?"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc704\uc640 \uac19\uc774 \uc6b0\ub9ac\uac00 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 spread syntax\ub294  shallow copy(\uc595\uc740 \ubcf5\uc0ac)\ub97c \ud558\uac8c \ub418\ub294\ub370, \uc800\ud76c\uac00 \uc6d0\ud558\ub294 \uac74 \uc644\uc804\ud788 \ub2e4\ub978 \uac1d\uccb4\ub97c \ub9cc\ub4e4\ub418, \uc548\uc758 \ub0b4\uc6a9\uc740 \uc644\uc804\ud788 \ub611\uac19\uae30\ub97c \uc6d0\ud569\ub2c8\ub2e4. \uc774\uac78 \ubc14\ub85c deep copy(\uae4a\uc740 \ubcf5\uc0ac)\ub77c\uace0 \ud558\ub294 \ub370, \uac1d\uccb4\uac00 \uae4a\uc5b4\uc9c8 \uc218\ub85d deep copy\ub3c4 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4. \uc774 \ub54c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uac83\uc774 \ubc14\ub85c ",(0,a.kt)("strong",{parentName:"li"},"'Immer' library")," \uc785\ub2c8\ub2e4. ")),(0,a.kt)("h2",{id:"how-immer-works"},"How Immer works"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uac1d\uccb4\uac00 \uc788\ub2e4\uace0 \ud588\uc744 \ub54c, immer\uc740 \uc790\uccb4\uc801\uc73c\ub85c \uadf8 \uac1d\uccb4\uc758 drafState\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uc774 \ubcf5\uc0ac\ubcf8\uc5d0\uc11c \uc6d0\ud558\ub294 \ub300\ub85c \uc218\uc815\uc744 \ub05d\ub0b4\uba74 immer\ub294 \uadf8 \uc218\uc815\ub41c \uc0ac\ud56d\ub4e4\uc744 \ubc18\uc601\ud55c nextState\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"![image](https://user-images.githubusercontent.com/75834421/113087067-d4fd2980-921d-11eb-811a-9072c9ed7d6b.png)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"immer \uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc120 \uc678\ubd80 library\uc774\ubbc0\ub85c \uc124\uce58\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"$ npm install immer \n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uadf8\ub9ac\uace0 \uc791\uc131\uc911\uc778 \ucf54\ub4dc \uc0c1\ub2e8\uc5d0\uc11c import \ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import produce from 'immer';\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"produce \ud568\uc218\ub97c \uc0ac\uc6a9 \ud560 \ub54c\uc5d0\ub294 \uccab\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\uc5d0\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc218\uc815\ud558\uace0 \uc2f6\uc740 \uc0c1\ud0dc"),", \ub450\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\uc5d0\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc5b4\ub5bb\uac8c \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \uc2f6\uc744\uc9c0 \uc815\uc758\ud558\ub294 \ud568\uc218"),"\ub97c \ub123\uc5b4\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"//immer\uc0ac\uc6a9 \uc804 \ncase \"CREATE_USER\":\n    return {\n        inputs: initialState.inputs,\n        users: state.users.concat(action.user)\n    }\ncase \"REMOVE_USER\":\n    return {\n        ...state,\n        users: state.users.filter(user => user.id !== action.id)\n    }\ncase \"TOGGLE_USER\":\n    return {\n        ...state, \n        users: state.users.map(user => \n            user.id === action.id ? {...user, active: !user.active} : user\n        )\n    };\n\n//immer \uc0ac\uc6a9 \ud6c4\ncase 'CREATE_USER':\n    return produce(state, draft => {\n        draft.users.push(action.user);\n    });\ncase 'REMOVE_USER':\n    return produce(state, draft => {\n        const index = draft.users.findIndex(user => user.id === action.id);\n        draft.users.splice(index, 1);\n    });\ncase 'TOGGLE_USER':\n    return produce(state, draft => {\n        const user = draft.users.find(user => user.id === action.id);\n        user.active = !user.active;\n    });\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc40 \uc5ec\uae30\uc11c \uc54c \uc218 \uc788\ub4ef\uc774 \uac1d\uccb4\uac00 \uae4a\uc9c0 \uc54a\uac70\ub098, immutability\ub97c \uc720\uc9c0\ud558\uae30\uc704\ud574 \ucf54\ub4dc\uac00 \uae38\uc5b4 \uc9c0\ub294 \uacbd\uc6b0\uac00 \uc544\ub2cc \uc774\uc0c1 immer\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4. \ucd5c\ub300\ud55c \uc77c\ubc18 javascript\ub85c \uad6c\ud604\ud558\uace0, \ud544\uc694\ud55c \uacf3\uc5d0\ub9cc immer\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4! ")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"React\uc758 setState\uc640 \uac19\uc774 \uc0ac\uc6a9\ud558\uae30 "),(0,a.kt)("p",{parentName:"li"},"  : \uccab\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub97c \uc0dd\ub7b5\ud558\uace0 \ubc14\ub85c \uc5c5\ub370\uc774\ud2b8 \ud568\uc218\ub97c \ub123\uc5b4\uc8fc\uac8c \ub41c\ub2e4\uba74, \ubc18\ud658 \uac12\uc740 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\uac00 \uc544\ub2cc ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8 \ud574\uc8fc\ub294 \ud568\uc218"),"\uac00 \ub429\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const todo = {\ntext: 'Hello',\ndone: false\n};\n\nconst updater = produce(draft => {\ndraft.done = !draft.done;\n});\n\nconst nextTodo = updater(todo);\n\nconsole.log(nextTodo);\n// { text: 'Hello', done: true }\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},": setTodo \ud568\uc218\uc5d0\uc11c \ud568\uc218\ud615 \uc5c5\ub370\uc774\ub97c \ud568\uc73c\ub85c\uc368, useCallback \uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \ub450\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\uc778 deps \ubc30\uc5f4\uc5d0 todo \ub97c \ub123\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4. \uc774\ub807\uac8c setState(\uc5ec\uae30\uc11c\ub294 setTode)\ub294 \ud568\uc218\ub97c \uac00\uc9c8 \uc218 \uc788\uc73c\ubbc0\ub85c \uc704\uc640 \uac19\uc740 \uccab\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub97c \uc0dd\ub7b5\ud55c produce\ud568\uc218\ub97c \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n\n:produce \uac00 \ubc18\ud658\ud558\ub294\uac83\uc774 \uc5c5\ub370\uc774\ud2b8 \ud568\uc218\uac00 \ub418\uae30 \ub54c\ubb38\uc5d0 useState \uc758 \uc5c5\ub370\uc774\ud2b8 \ud568\uc218\ub97c \uc0ac\uc6a9 \ud560 \ub584 \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\ud604 \ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.\n\n```jsx\n//immer \uc0ac\uc6a9 \uc804\n\nconst [todo, setTodo] = useState({\n    text: 'Hello',\n    done: false\n});\n\nconst onClick = useCallback(() => {\n    setTodo(todo => ({\n        ...todo,\n        done: !todo.done\n    }));\n}, []);\n\n//immer\uc0ac\uc6a9 \ud6c4 \nconst [todo, setTodo] = useState({\n    text: 'Hello',\n    done: false\n});\n\nconst onClick = useCallback(() => {\nsetTodo(\n    produce(draft => {\n    draft.done = !draft.done;\n    })\n);\n}, []);\n```\n")),(0,a.kt)("p",null,"\ucc38\uace0\uc790\ub8cc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Immutability in React with Immer: ",(0,a.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/immutability-in-react-with-immer/"},"https://blog.logrocket.com/immutability-in-react-with-immer/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pros and Cons of using immutability with React.js: ",(0,a.kt)("a",{parentName:"p",href:"https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/"},"https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"React\uc5d0\uc11c \ubd88\ubcc0\uc131\uc744 \uc9c0\ucf1c\uc57c \ud558\ub294 \uc774\uc720: ",(0,a.kt)("a",{parentName:"p",href:"https://webigotr.tistory.com/293"},"https://webigotr.tistory.com/293"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"immer \uacf5\uc2dd \ud398\uc774\uc9c0: ",(0,a.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"https://immerjs.github.io/immer/")))))}u.isMDXComponent=!0}}]);