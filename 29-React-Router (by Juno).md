# 29-React-Router

## 🤷‍♀️ Routing(라우팅) 이란?

<br/>

> 라우팅은 프로세스인데 우리가 네트워크에서 있는 traffice의 path를 선택하는 프로세스이다.  
> 즉, 네트워크에서 url를 이용했을때 어떤 데이터를 받아올지 결정해주는것
>
> > 홈페이지에 들어왔을때 -> www.baegofda.com/  
> > 회원가입을 눌렀을때 -> www.baegofda.com/_register_  
> > 로그인 페이지로 들어갔을때 -> www.baegofda.com/_login_  
> > 프로필 페이지로 들어갔을때 -> www.baegofda.com/_profile_
>
> 와 같이 어떤 페이지를 보여줄것인지 결정하고 도와주는것  
> `React-Router` 말고도 `Reach-Router`, `Next.js`등의 대안이 있습니다.

<br/>

## 🙄 Why ?

<br/>

&nbsp;`React` 뿐만아닌 `Vue`, `Angular`, `Svelte`등은 **SPA**(Single Page Application)를 구현하기 위함입니다.  
SSR 방식의 HTML 페이지가 바뀌는거와 달리 하나의 HTML 에서 CRA 방식으로 리로드 되지않고 동적으로 가져와서 보여줍니다.  
때문에 북마크, 페이지 뒤로가기 앞으로가기가 불가능합니다. 위와같은 문제를 해결하기위해 Routing 이라는 개념이 중요합니다.

[(관련 참고) SSR이란? - NaverD2](https://d2.naver.com/helloworld/7804182)

[(관련 참고) SPA 그리고 SSR, CRS](https://velog.io/@ru_bryunak/SPA-%EC%82%AC%EC%9A%A9%EC%97%90%EC%84%9C%EC%9D%98-SSR%EA%B3%BC-CSR)

<br/>

## 👀 코드로 알아보기

---

<br/>

> **🔑 Key Point**  
> React-Router에는 다양한 컴포넌트들이 있습니다.  
> 그 중 저희는 `BrowserRouter`, `Switch`, `Route`, `Link`, `NavLink` 대해 알아볼 것 입니다.  
> 위의 컴포넌트들의 위치와 사용을 중점적으로 봐주시길 바랍니다.

<br/>

&nbsp;전체의 파일 구조는 아래와 같습니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fz8d4u%2Fbtq2lrBB1W8%2F2xnQBVaLpbjmO4bRcsX4E1%2Fimg.png"/></p>

<br/>

### 💾 셋팅하기

---

<br/>

&nbsp;먼저 react-router-dom를 설치합니다.

<br/>

```bash
# npm
npm install react-router-dom
# yarn
yarn add react-router-dom
```

<br/>

### 📂 src>index.js

---

<br/>

&nbsp;먼저 index.js의 코드는 아래와 같습니다.

<br/>

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

<br/>

&nbsp;Routing을 위해 `BrowserRouter` 컴포넌트를 사용하여 App.js을 감싸줍니다.

<br/>

### 📂 src>App.js

---

<br/>

&nbsp;App.js의 코드는 아래와 같습니다.

<br/>

```js
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/Board1"} component={Board1} />
          <Route path={"/Board2"} component={Board2} />
          <Route path={"/Login"} component={Login} />
          <Route path={"/Register"} component={Register} />
        </Switch>
      </main>
    </>
  );
};

export default App;
```

<br/>

&nbsp;먼저 `<Route exact path={"/"} component={Home} />` 내부의 `exact`가 없다면 모든 path의 내부엔 "/"가 포함되어있기 때문에 Routing시 Home 컴포넌트가 함께 렌더링됩니다.  
 때문에 구분을 명확해주기 위해 `exact` 사용하며 `Switch`는 Routing 시 해당하는 path가 있다면 해당 패스의 컴포넌트를 보여주고 끝나게 됩니다.

<br/>

### 📂 src>components>Header.jsx

---

<br/>

&nbsp; 아래는 Header 컴포넌트의 코드입니다.

<br/>

```js
import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <h1>React-Router-DOM</h1>
      <ul className="items">
        <li className="item">
          <Link className="link" to="/" exact>
            Home
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/Board1">
            Board1
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/Board2">
            Board2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
```

<br/>

&nbsp; Routing 즉, 링크를 클릭하여 페이지를 이동하기 위해서는 `anchor` 태그를 사용했었습니다. 하지만 `anchor` 태그는 클릭시 리로드가 되기때문에 React-Router에서는 `Link`혹은` NavLink`를 사용하며 이동할 url의 주소는 `href`라는 attribute 아닌 `to`라는 props를 사용하여 명시하여줍니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fblshbd%2Fbtq2qyfPM8r%2F0VkbR5ed9pIvdgNIhIk4D0%2Fimg.gif"/></p>

<br/>

&nbsp; 하지만 서비스를 제공하는 입장에서는 현재의 서비스가 어디에 위치하고있는지 알려줘야하며 이용자는 이를 알 권리가 있습니다.

<br/>

```js
import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <h1>React-Router-DOM</h1>
      <ul className="items">
        <li className="item">
          <NavLink className="link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/Board1">
            Board1
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/Board2">
            Board2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
```

<br/>

&nbsp; 이전에는 class를 추가하는 식으로 기능을 제공하였으나 위와같이 `NavLink` 컴포넌트를 사용하면 쉽게 구현이 가능합니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Feg10Pi%2Fbtq2iWhYm42%2F7MMQCKAeYtB717XrTv8uik%2Fimg.gif"/></p>

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcl23cY%2Fbtq2qxgVrVG%2FXenTGxidHsGkkUI4OLPDQ1%2Fimg.gif"/></p>

<br/>

&nbsp; 위와 같이 자동적으로 `active` 라는 class가 추가적으로 생기기때문에 쉽게 사용이 가능합니다.

<br/>

```js
import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <h1>React-Router-DOM</h1>
      <ul className="items">
        <li className="item">
          <NavLink className="link" to="/" activeClassName="toggle" exact>
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/Board1" activeClassName="toggle">
            Board1
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/Board2" activeClassName="toggle">
            Board2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
```

<br/>

만약 위의 기능을 제공할 시 className을 `active` 가아닌 다른 className으로 변경하고 싶다면 위와같이 `activeClassName` 이라는 props를 사용하여 변경이 가능합니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyedZZ%2Fbtq2noEGWwD%2FeX9LFMsIZhiUKcHjlKZzK1%2Fimg.gif"/></p>

<br/>

[리액트 라우터 공식 사이트](https://reactrouter.com/)

[라우터내의 컴포넌트에 props를 넘기려면?](https://mingcoder.me/2019/12/04/Programming/React/react-router-component-vs-render/)

👋
