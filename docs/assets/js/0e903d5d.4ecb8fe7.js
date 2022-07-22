"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:25},i="What is emotion?",s={unversionedId:"Emotion-by-Manju-",id:"Emotion-by-Manju-",title:"What is emotion?",description:"- Emotion is a library designed for writing css styles with JavaScript. Javascript\ud615\uc2dd\uc73c\ub85c css sytling \uc744 \ud560 \uc218 \uc788\ub294 \ub9ce\uc740 library \uc911 \ud558\ub098\uc785\ub2c8\ub2e4.",source:"@site/docs/17-Emotion-by-Manju-.md",sourceDirName:".",slug:"/Emotion-by-Manju-",permalink:"/react-basic-study-202103/docs/Emotion-by-Manju-",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/17-Emotion-by-Manju-.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Emotion \ud83d\ude2d\ud83d\ude31\ud83e\udd22\ud83d\ude21",permalink:"/react-basic-study-202103/docs/Emotion-by-Tak"},next:{title:"22-Sass",permalink:"/react-basic-study-202103/docs/Sass--by-Juno-"}},p={},l=[{value:"How to use emotion in React?",id:"how-to-use-emotion-in-react",level:2},{value:"Emotion VS Styled-components",id:"emotion-vs-styled-components",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-emotion"},"What is emotion?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Emotion is a library designed for writing css styles with ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript"),". Javascript\ud615\uc2dd\uc73c\ub85c css sytling \uc744 \ud560 \uc218 \uc788\ub294 \ub9ce\uc740 library \uc911 \ud558\ub098\uc785\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It has support for ",(0,a.kt)("strong",{parentName:"p"},"nested selectors, media queries, and auto vendor-prefixing"),"."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Media Queries")," : \ubc18\uc751\ud615 \uc6f9\ub514\uc790\uc778\uc744 \uc704\ud55c \uae30\ub2a5. Breakpoint\ub97c \uc124\uc815\ud574\uc11c, '\uadf8 breakpoint\uc5d0\uc11c\ub294 \uc774\ub807\uac8c \uc2a4\ud0c0\uc77c\ub9c1\uc744 \ud574\ub77c' \ucc98\ub7fc \uc870\uac74\uc5d0 \ub530\ub77c \uc2a4\ud0c0\uc77c\uc744 \ub2e4\ub974\uac8c \uc801\uc6a9 \ud560 \uc218 \uc788\uc74c.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"auto-vendor-prefixing")," : vedor-profixing\uc740 \uc6f9\ube0c\ub77c\uc6b0\uc800 \uacf5\uae09\uc790\uac00 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \uc81c\uacf5\ud560 \ub54c \uc774\uc804 \ubc84\uc804\uc758 \uc6f9\ube0c\ub77c\uc6b0\uc800\uc5d0 \uadf8 \uc0ac\uc2e4\uc744 \uc54c\ub824\uc8fc\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \uc811\ub450\uc0ac\ub97c \uc758\ubbf8 => \uc989 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc544\uc9c1 CSS \uad8c\uace0\uc548\uc5d0 \ud3ec\ud568\ub418\uc9c0 \ubabb\ud55c \uae30\ub2a5\uc774\ub098, CSS \uad8c\uace0\uc548\uc5d0\ub294 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0\ub9cc \uc544\uc9c1 \uc644\ubcbd\ud558\uac8c \uc81c\uc815\ub41c \uc0c1\ud0dc\uac00 \uc544\ub2cc \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uace0\uc790 \ud560 \ub54c")," \ubca4\ub354 \ud504\ub9ac\ud53d\uc2a4\ub97c \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<style>\n\n  .button {\n\n       background: -webkit-linear-gradient(red, yellow); /* \ud06c\ub86c\uacfc \uc0ac\ud30c\ub9ac 4.0 \uc774\uc0c1\uc744 \uc704\ud55c \ucf54\ub4dc*/\n\n      background: -moz-linear-gradient(red, yellow);    /* \ud30c\uc774\uc5b4\ud3ed\uc2a4 3.6 \uc774\uc0c1\uc744 \uc704\ud55c \ucf54\ub4dc*/\n\n       background: -ms-linear-gradient(red, yellow);     /* \uc775\uc2a4\ud50c\ub85c\ub7ec 10.0 \uc774\uc0c1\uc744 \uc704\ud55c \ucf54\ub4dc*/\n\n      background: linear-gradient(red, yellow);         /* CSS \ud45c\uc900 \ubb38\ubc95 \ucf54\ub4dc*/\n\n   }\n\n</style>\n")),(0,a.kt)("p",{parentName:"blockquote"},"=> \ubc84\uc804 \ucc28\uc774 \ub54c\ubb38\uc5d0 \uc0dd\uae30\ub294 \ubb38\uc81c\ub97c \ud574\uacb0. \uc774\uac78 \uc9c1\uc811\ud558\uc9c0 \uc54a\uc544\ub3c4 css\ub0b4\ubd80\uc5d0\uc11c \uc54c\uc544\uc11c \ud574\uc8fc\ub294 \uac8c auto-vendor-prefix!")),(0,a.kt)("h2",{id:"how-to-use-emotion-in-react"},"How to use emotion in React?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install package"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jpx"},"npm i @emotion/react\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSX Pragma"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"/** @jsx jsx */\n")),(0,a.kt)("p",{parentName:"li"},"React.createElement \ub300\uc2e0 jsx \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uac8c\ub054 \ud558\ub294 \uac83. jsx\ud568\uc218\ub294 jsx\ub97c \uc77c\ubc18 \uc790\ubc14 \uc2a4\ud06c\ub9bd\ud2b8\ub85c \ubcc0\ud658\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \ud568\uc218."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"example"),(0,a.kt)("p",{parentName:"blockquote"},"[React\uacf5\uc2dd\ubb38\uc11c]"," : ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"https://reactjs.org/docs/introducing-jsx.html")),(0,a.kt)("p",{parentName:"blockquote"},"[jsx pragma\uc0ac\uc6a9]"," : ",(0,a.kt)("a",{parentName:"p",href:"https://www.javaer101.com/ko/article/42050407.html"},"https://www.javaer101.com/ko/article/42050407.html")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'class Hello extends React.Component {\n  render() {\n    return jsx("h1", null, `Hello world!`);\n  }\n}\n'))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"CSS prop")),(0,a.kt)("p",{parentName:"li"},"String Styles, Object Styles"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"String styles"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"```jsx\n/** @jsxRuntime classic */\n/**@jsx jsx */\nimport { jsx, css } from '@emotion/react'\n\nfunction BtnWrapper({ children }) {\n    return (\n        <div className=\"wrapper\" css={css`border: solid 1px black;`}>\n            { children }\n        </div>\n    )\n}\n\n export default BtnWrapper;\n```\n")))))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Object styles"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<div\n  css={{\n    color: "red",\n    [mq[0]]: {\n      color: "orange",\n    },\n    [mq[1]]: {\n      color: "green",\n    },\n  }}\n>\n  Some text!\n</div>\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Style API")),(0,a.kt)("p",{parentName:"li"},": styled-component\uc640 \uc0ac\uc6a9\ubc95\uc774 \uac19\uc2b5\ub2c8\ub2e4!"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"npm i @emotion/styled\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import styled from "@emotion/styled";\n\nconst LinkWithEmotion = styled.a`\n  background-color: pink;\n  color: black;\n  cursor: pointer;\n  &:hover {\n    color: white;\n  }\n`;\n\nfunction App() {\n  return <LinkWithEmotion>emotion\ud83d\ude2e</LinkWithEmotion>;\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Theming")),(0,a.kt)("p",{parentName:"li"},": ",(0,a.kt)("inlineCode",{parentName:"p"},"@emotion/react")," package\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5b4 \ucd94\uac00\uc801\uc778 package \uc124\uce58\uac00 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'/** @jsxRuntime classic */\n/**@jsx jsx */\nimport { jsx, ThemeProvider } from "@emotion/react";\n\nfunction Button({ btn }) {\n  const theme = {\n    colors: {\n      primary: "hotpink",\n    },\n  };\n  return (\n    <ThemeProvider theme={theme}>\n      <button css={(theme) => ({ color: theme.colors.primary })}>\n        {btn}\n      </button>\n    </ThemeProvider>\n  );\n}\n\nButton.defaultProps = {\n  btn: "Button!",\n};\n\nexport default Button;\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Media queries")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'/** @jsxRuntime classic */\n/**@jsx jsx */\nimport { jsx, css } from "@emotion/react";\n\nconst breakpoints = [576, 768, 992, 1200];\n\nconst mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);\n\nconst Text = () => {\n  return (\n    <div css={{ fontSize: 50 }}>\n      <div\n        css={{\n          color: "red",\n          [mq[0]]: {\n            color: "orange",\n          },\n          [mq[1]]: {\n            color: "green",\n          },\n        }}\n      >\n        Some text!\n      </div>\n      <p\n        css={css`\n          color: green;\n          ${mq[2]} {\n            color: orange;\n          }\n          ${mq[3]} {\n            color: blue;\n          }\n        `}\n      >\n        Some other text!\n      </p>\n    </div>\n  );\n};\n\nexport default Text;\n// \n\n')))),(0,a.kt)("h2",{id:"emotion-vs-styled-components"},"Emotion VS Styled-components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Features"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75834421/113499822-08102780-9554-11eb-98a4-e43652cc79a5.png",alt:"image"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Stats"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75834421/113499860-5de4cf80-9554-11eb-822f-1e548717ee3a.png",alt:"image"})),(0,a.kt)("p",{parentName:"li"},"[\ucd9c\ucc98]"," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jsjoeio/styled-components-vs-emotion"},"https://github.com/jsjoeio/styled-components-vs-emotion")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=MN3RWhGudvw"},"emotion vs styled-components PlayWright")),(0,a.kt)("p",null,"[which one should we use?]"," ",(0,a.kt)("a",{parentName:"p",href:"https://community.frontity.org/t/which-one-should-we-use-emotion-vs-styled-components/27"},"https://community.frontity.org/t/which-one-should-we-use-emotion-vs-styled-components/27")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"emotion \uacf5\uc2dd\ubb38\uc11c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/emotion-in-react"},"emotion in React")))}c.isMDXComponent=!0}}]);