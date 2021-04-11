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
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/Board1">Board1</Link>
        </li>
        <li className="item">
          <Link to="/Board2">Board2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
```

<br/>

&nbsp; Routing 즉, 링크를 클릭하여 페이지를 이동하기 위해서는 anchor 태그를 사용했었습니다. 하지만 React-Router에서는 Link혹은 NavLink를 사용하며 이동할 url의 주소는 href라는 attribute 아닌 to라는 props를 사용하여 명시하여줍니다.

<br/>

### 📂 src>provider>DataProvider.js

---

<br/>

&nbsp; DataProvider 코드는 아래와 같습니다.

<br/>

```js
import React, { useState } from "react";
import DataContext from "../context/DataContext";

const DataProvider = ({ children }) => {
  const handleState = (state) => {
    setState((prevState) => {
      return {
        ...prevState,
        state,
      };
    });
  };

  const init = {
    state: "init",
    handleState,
  };

  const [state, setState] = useState(init);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataProvider;
```

<br/>

&nbsp; createContext()를 사용하였기때문에 DataContext.Provider를 사용 할 수 있게 되었고 value라는 props에 state를 담고있으며 state는 위에서 명시한 state, handleState를 담고있습니다.

<br/>

### 📂 src>components>KoreaData>KoreaAllData>KoreaAllData.jsx

---

<br/>

&nbsp; KoreaAllData컴포넌트의 코드는 아래와 같습니다.

<br/>

```js
import DataContext from "../../../context/DataContext";

const KoreaAllData = () => {
  const { state, handleState } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);

  //... 중략

  useEffect(() => {
    //... 중략

    axios
      .get("https://projectgoc.herokuapp.com/api")
      .then((res) => {
        const data = res.data.elements[0].elements[1].elements[0].elements;
        const items = data.slice(0, 133);
        const totalData = items[18].elements;
        const yesterDayData = items[37].elements;
        panelDataHandler(totalData);
        cardsDataHandler(totalData, yesterDayData);
        chartDataHandler(items);
        setIsLoading(false);
        handleState("success");
      })
      .catch((err) => {
        handleState("false");
        console.log(err);
      });
  }, [state]);

  return (
    <DataContext.Consumer>
      {(DataContext) => {
        return (
          <>
            {DataContext.state != "false" ? (
              <>{isLoading ? <Loading /> : <>//... 중략</>}</>
            ) : (
              <Err />
            )}
          </>
        );
      }}
    </DataContext.Consumer>
  );
};

export default KoreaAllData;
```

<br/>

&nbsp; 해당 컴포넌트는 Axios를 이용하여 공공데이터포털의 API를 사용하여 데이터를 로드하고 있으며, 성공을 하게되면 handleState에 success를 전달하고 실패시 false를 전달하게 됩니다. 또 이 컴포넌트는 DataContext.Consumer를 사용하여 DataContext의 상태를 구독하고 있기 때문에 그에 따른 결과를 보여주게 됩니다.

<br/>

👋
