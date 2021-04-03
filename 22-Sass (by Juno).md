# 15-Sass

## 🙏 Sass(**Syntactically Awesome** Style Sheets)?

<br/>

> Sass는 CSS pre-processor로서, 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성과 가독성을 높여줍니다.

<br/>

> 💡 CSS pre-processor(CSS 전처리기) ?
>
> CSS를 확장하는 스크립팅 언어로서, 컴파일러를 통하여 브라우저에서 사용 할 수 있는 일반 CSS 문법 형태로 변환합니다.
>
> Sass, Less, PostCSS, Stylus etc...

<br/>

## 1. 💾 셋팅하기

---

<br/>

&nbsp; Sass를 사용하기위해 node-sass를 설치합니다.

<br/>

```bash
yarn add node-sass
```

<br/>

&nbsp; 이후 Sass를 사용하기위해 css파일의 확장자명을 .scss를 사용하여 생성합니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Ft4zLY%2Fbtq1JANybVD%2FprnbSgGPNPaMstmksO3DX0%2Fimg.png"/></p>

<br/>

> 💡 .sass 와 .scss  
>  Sass가 처음 릴리즈 되었을때는 .sass확장자로 CSS와 문법이 많이 달랐습니다.  
> 때문에 Sass버전 3이상부터는 주 문법으로 .scss로 변경되었습니다.  
> .scss는 .css의 상위 집합으로 css와 동일한 문법에서 Sass의 특별한 기능이 추가되었습니다.

<br/>

## 2. 👓 살펴보기

---

<br/>

### 2-1. Comment (주석)

<br/>

&nbsp; .scss내부에서 주석을 할 경우 한줄 주석은 //로 표기합니다.

<br/>

```scss
/*This is comment*/

// This is comment

/*
This
is
comment
*/
```

<br/>

```css
/*This is comment*/

/*
This
is
comment
*/
```

<br/>

### 2-2. Variable (변수)

---

<br/>

&nbsp; Sass에서 변수의 개념을 사용할 수 있습니다. 원하는 변수명의 앞에 $문자를 사용합니다.

<br/>

```scss
/* Sass */
$personal: #369fff;

.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: $personal;
  border-radius: 3px;
  border: 0;
  outline: 0;
}
```

<br/>

```css
/* css */
.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: #369fff;
  border-radius: 3px;
  border: 0;
  outline: 0;
}
```

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2uqd5%2Fbtq1JWJzWjF%2FBEBOzTPpNkJczUOxKgi7bk%2Fimg.png"/></p>

<br/>

#### 2-2-1. Variable Scope (변수 범위)

---

<br/>

&nbsp; sass의 변수는 javascript와 마찬가지로 Block Scope를 사용합니다.

<br/>

```scss
/* Sass */
$personal: #369fff;

.btn {
  $personal: #000;
  padding: 5px 20px;
  color: #fff;
  background-color: $personal;
  border-radius: 3px;
  border: 0;
  outline: 0;
}

.p {
  color: $personal;
}
```

<br/>

```css
/* css */
.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: #000;
  border-radius: 3px;
  border: 0;
  outline: 0;
}

.p {
  color: #369fff;
}
```

<br/>

#### 2-2-2. Variable Scope (!global)

---

<br/>

&nbsp; Block Scope내에서 변수를 선언하더라도 !global 플래그를 사용하면 전역에서 사용이 가능합니다.

<br/>

```scss
/* Sass */
$personal: #369fff;

.btn {
  $personal: #000 !global;
  padding: 5px 20px;
  color: #fff;
  background-color: $personal;
  border-radius: 3px;
  border: 0;
  outline: 0;
}

.p {
  color: $personal;
}
```

<br/>

```css
/* css */
.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: #000;
  border-radius: 3px;
  border: 0;
  outline: 0;
}

.p {
  color: #000;
}
```

<br/>

#### 2-2-3. Variable Scope (!default)

---

<br/>

&nbsp; 추가적인, !default 플래그를 사용하면 해당 변수가 설정되지 않았거나 값이 null때 해당 값을 사용합니다. (\* 대부분 mixin을 작성 할 때 사용)

<br/>

```scss
/* Sass */
$personal: #369fff;

$personal: #000 !default;

.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: $personal;
  border-radius: 3px;
  border: 0;
  outline: 0;
}

.p {
  color: $personal;
}
```

<br/>

```css
/* css */
.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: #369fff;
  border-radius: 3px;
  border: 0;
  outline: 0;
}

.p {
  color: #369fff;
}
```

<br/>

### 2-3. Built-in Functions (내장함수)

---

<br/>

&nbsp; Sass에서는 여러 내장함수를 제공합니다.(darken, lighten, saturate etc...)  
예를들어 darken은 색과 인수값을 던져주면 얼마나 어둡게할지, lighten은 얼마나 밝게할지 계산하여줍니다.

<br/>

```scss
/* Sass */
$personal: #369fff;

.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: $personal;
  border-radius: 3px;
  border: 0;
  outline: 0;

  &:hover {
    background-color: darken($personal, 10%);
  }
}
```

<br/>

```css
/* css */
.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: #369fff;
  border-radius: 3px;
  border: 0;
  outline: 0;
}

.btn:hover {
  color: #0387ff;
}
```

<br/>

[Sass 내장함수 알아보기](https://poiemaweb.com/sass-built-in-function)

<br/>

### 2-4. Nesting (중첩)

---

<br/>

&nbsp; Sass에서는 선언의 중첩이 가능합니다. 기본 CSS에서는 아래와 같이 작성합니다.

<br/>

```css
/* css */
.wrap {
  width: 100%;
}

.wrap .wrap-title {
  color: #000;
}
```

<br/>

&nbsp; Sass에서는 아래와 같이 작성합니다.

<br/>

```scss
/* Sass */
.wrap {
  width: 100%;

  .wrap-title {
    color: #000;
  }
}
```

<br/>

&nbsp; Sass에서는 아래와 같이 작성합니다.

<br/>

```css
/* css */
.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: #369fff;
  border-radius: 3px;
  border: 0;
  outline: 0;
}

.btn:hover {
  color: #0387ff;
}
```

<br/>

&nbsp; Sass에서는 부모선택자를 참고할때 문자를 사용하여 간편하게 표현가능합니다.

<br/>

```scss
/* Sass */
.btn {
  padding: 5px 20px;
  color: #fff;
  background-color: #369fff;
  border-radius: 3px;
  border: 0;
  outline: 0;

  &:hover {
    background-color: darken($personal, 10%);
  }
}
```

<br/>

<!-- <p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2uqd5%2Fbtq1JWJzWjF%2FBEBOzTPpNkJczUOxKgi7bk%2Fimg.png"/></p>

<br/> -->

<!-- <br/>

&nbsp; 아래와 같은 컴포넌트 구조를 가진 사이트가 있다고 가정하여봅시다.

<br/>

<p align="center"><img src="https://i.imgur.com/tmOeRAT.png"/></p>

<br/>

&nbsp; state의 value값을 보여주는 컴포넌트는 F와 J라고 가정하고 값을 변화시키는
이벤트는 G 컴포넌트에서 발생한다는 가정 할 경우 value는 F컴포넌트까지 해당 value를 사용하지도 않는 A,B라는 컴포넌트의 props를 거쳐야합니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKq24c%2Fbtq1tCegRlf%2FkU8KWl6XOi2XgbycSL2VG0%2Fimg.png"/></p>

<br/>

&nbsp; handleSetValue()또한 A, B, E 컴포넌트동안 props를 전달받아야 최종 G컴포넌트에 전달이 됩니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnTZrJ%2Fbtq1yXVKTbG%2FColU6Mwd1JnL5jzQ2XFwQ0%2Fimg.png"/></p>

<br/>

&nbsp; 이러한 문제점을 해결 해주는 Hooks가 바로 Context API입니다.

<br/>

<p align="center"><img src="https://i.imgur.com/iyNKCIz.png"/></p>

<br/>

&nbsp; Context API는 사실 단순 `props drilling`을 해결하기 위한 솔루션이였으며 지금은 기존의 state management대체제로도 많이 활용 되고있습니다.

<br/>

[참고](https://tsh.io/state-of-frontend/#future-of-frontend)

<br/>

### 👀 코드로 알아보기

---

<br/>

&nbsp;전체의 파일 구조는 아래와 같습니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FejGw65%2Fbtq1z3IaguX%2FhVLLgxlU0HYJaFVyR5vDHK%2Fimg.png"/></p>

<br/>

> **🔑 Key Point**
> context API는 4가지의 용어가 나옵니다.
>
> 1. createContext(defalutValue) - context API를 사용하기 위한 선언입니다.
> 2. Context.Provider - 제공자 즉, 사용할 state를 제공해줍니다.
> 3. Context.Consumer - 사용자,소비자 즉, 데이터를 사용할 주체입니다. Provider의 상태를 바라보고있습니다.
> 4. useContext(Context) - 사용하고자 하는 Context의 value에 접근합니다.
>
> 이러한 용어들이 나올것이며 중점으로 보시면 됩니다.

<br/>

### 📂 src>App.js

---

<br/>

&nbsp;테스트를 위하여 App.js의 코드는 아래와 같습니다.

<br/>

```js
import React from "react";
import NumberProvider from "./provider/NumberProvider";
import ThemProvider from "./provider/ThemProvider";
import Page from "./routes/Page";

const App = () => {
  return (
    <ThemProvider>
      <NumberProvider>
        <Page />
      </NumberProvider>
    </ThemProvider>
  );
};
export default App;
```

<br/>

### 📂 src>components>Page.jsx

---

<br/>

&nbsp; Page 컴포넌트 코드는 아래와 같습니다.

<br/>

```js
import React from "react";
import Button from "../components/Button";
import Content from "../components/Content";
import Header from "../components/Header";

const Page = () => {
  return (
    <div>
      <Header />
      <Button />
      <Content />
    </div>
  );
};

export default Page;
```

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcRQGS3%2Fbtq1yZsKRPB%2FreKcegPjKPdJP3uudNBVu0%2Fimg.png"/></p>

<br/>

### 📂 src>routes>Page.jsx

---

<br/>

&nbsp; Page 컴포넌트 코드는 아래와 같습니다.

<br/>

```js
import React from "react";
import Button from "../components/Button";
import Content from "../components/Content";
import Header from "../components/Header";

const Page = () => {
  return (
    <div>
      <Header />
      <Button />
      <Content />
    </div>
  );
};

export default Page;
```

<br/>

&nbsp; 해당 컴포넌트는 Route의 역할만 하고있으며 어떠한 props도 받지 않고있습니다.

<br/>

### 📂 src>context>NumberContext.js

---

<br/>

&nbsp; 먼저 number값을 변경하는 예시를 알아 보겠습니다. NumberContext의 코드는 아래와 같습니다.

<br/>

```js
import { createContext } from "react";

const NumberContext = createContext({
  number: 0,
  increase: () => {},
  decrease: () => {},
});

export default NumberContext;
```

<br/>

&nbsp; createContext()를 사용하였고 기본 value값들을 가지고있습니다.

<br/>

### 📂 src>provider>NumberProvider.js

---

<br/>

&nbsp; NumberProvider의 코드는 아래와 같습니다.

<br/>

```js
import React, { useState } from "react";
import NumberContext from "../context/NumberContext";

const NumberProvider = ({ children }) => {
  const increase = () => {
    setNumber((prevState) => {
      return {
        ...prevState,
        number: prevState.number + 1,
      };
    });
  };

  const decrease = () => {
    setNumber((prevState) => {
      return {
        ...prevState,
        number: prevState.number - 1,
      };
    });
  };

  const initialState = {
    number: 0,
    increase,
    decrease,
  };

  const [number, setNumber] = useState(initialState);

  return (
    <NumberContext.Provider value={number}>{children}</NumberContext.Provider>
  );
};

export default NumberProvider;
```

<br/>

&nbsp; createContext()를 사용하였기때문에 NumberContext.Provider를 사용 할 수 있게 되었고 value라는 props에 number를 담고있으며 number는 위에서 명시한 number, increase, decrease를 담고있습니다.

<br/>

### 📂 src>components>Header.jsx

---

<br/>

&nbsp; Header컴포넌트의 코드는 아래와 같습니다.

<br/>

```js
import React, { useContext } from "react";
import NumberContext from "../context/NumberContext";
import ThemBtn from "./ThemBtn";

const Header = () => {
  const value = useContext(NumberContext);

  return (
    <>
      <div>{value.number}</div>
      <ThemBtn />
    </>
  );
};

export default Header;
```

<br/>

&nbsp; 해당 컴포넌트에는 저희가 변경할 number의 값을 보여줄것이며 useContext(NumberContext)를 사용함으로써 value값을 접근 할 수 있게 됩니다.

<br/>

### 📂 src>components>Button.jsx

---

<br/>

&nbsp; Button컴포넌트의 코드는 아래와 같습니다.

<br/>

```js
import React, { useContext } from "react";
import NumberContext from "../context/NumberContext";

const Button = () => {
  const { increase, decrease } = useContext(NumberContext);
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Button;
```

<br/>

&nbsp; number를 변경할 버튼 두개를 가지고 있으며 useContext(NumberContext)를 사용함으로써 value값을 접근 할 수 있게 됩니다.

<br/>

<p align="center"><img src="https://blog.kakaocdn.net/dn/cBHIpu/btq1zsIh4G2/kLkILYkDrMIZv3e4Mwd9k1/img.gif"/></p>

<br/>

&nbsp; 여기서 Context API의 장점을 눈치 채셨나요? 분명 Header이나 Button컴포넌트는 아무 props를 전달 받지 않았는데도 state에 변화를 주고있습니다.

<br/>

### 📂 src>context>ThemContext.js

---

<br/>

&nbsp; 이번엔 them의 state를 변경해보도록 하겠습니다. ThemContext의 코드는 아래와 같습니다.

<br/>

```js
import { createContext } from "react";

const ThemContext = createContext({
  them: "light",
  onClick: () => {},
});

export default ThemContext;
```

<br/>

&nbsp; NumberContext의 구조와 마찬가지로 createContext()를 사용하고 기본 value값을 가지고잇습니다.

<br/>

### 📂 src>provider>ThemProvider.js

---

<br/>

&nbsp; ThemProvider 코드는 아래와 같습니다.

<br/>

```js
import React, { useState } from "react";
import ThemContext from "../context/ThemContext";

const ThemProvider = ({ children }) => {
  const onClick = () => {
    setThem((prevState) => {
      return {
        ...prevState,
        them: prevState.them === "light" ? "dark" : "light",
      };
    });
  };

  const init = {
    them: "light",
    onClick,
  };

  const [them, setThem] = useState(init);
  return <ThemContext.Provider value={them}>{children}</ThemContext.Provider>;
};

export default ThemProvider;
```

<br/>

&nbsp; ThemContext.Provider를 사용하여 value라는 props에 them을 담고있으며 them은 위에서 명시한 them, onClick를 가지고있습니다.

<br/>

### 📂 src>components>ThemBtn.jsx

---

<br/>

&nbsp; them의 state를 변경할 ThemBtn컴포넌트의 코드는 아래와 같습니다.

<br/>

```js
import React, { useContext } from "react";
import ThemContext from "../context/ThemContext";

const ThemBtn = () => {
  const { onClick } = useContext(ThemContext);

  return <button onClick={onClick}>them</button>;
};

export default ThemBtn;
```

<br/>

&nbsp; useContext(ThemContext)를 사용함으로써 value값을 접근 하여 onClick를 사용하고있습니다.

<br/>

### 📂 src>components>Content.jsx

---

<br/>

&nbsp; 이번엔 them의 state에 따라 색이 바뀔 Content입니다.

<br/>

```js
import React from "react";
import ThemContext from "../context/ThemContext";

const Content = () => {
  return (
    <ThemContext.Consumer>
      {(ThemContext) => {
        const themStyle = {
          backgroundColor: ThemContext.them === "light" ? "#fff" : "#000",
          color: ThemContext.them === "light" ? "#000" : "#fff",
        };
        return (
          <article style={themStyle}>
            <h1>가사</h1>
            <p>
              나리는 꽃가루에 눈이 따끔해 (아야) 눈물이 고여도 꾹 참을래 내 마음
              한켠 비밀스런 오르골에 넣어두고서 영원히 되감을 순간이니까 우리
              둘의 마지막 페이지를 잘 부탁해 어느 작별이 이보다 완벽할까 Love me
              only till this spring 오 라일락 꽃이 지는 날 goodbye 이런 결말이
              어울려 안녕 꽃잎 같은 안녕 하이얀 우리 봄날의 climax 아 얼마나
              기쁜 일이야 Ooh ooh Love me only till this spring 봄바람처럼 Ooh
              // ... 중략
            </p>
          </article>
        );
      }}
    </ThemContext.Consumer>
  );
};

export default Content;
```

<br/>

&nbsp; 이전의 Header 컴포넌트와 같이 변경된 state를 받을 컴포넌트지만 다른점을 눈치 채셨나요? Header컴포넌트는 useContext()를 이용하여 value의 값에 접근하였지만 Content 컴포넌트는 다릅니다. ThemContext.Consumer를 사용하여 Provider의 value값을 구독하고있으며 변경된 state를 자체적으로 받아서 배경과 폰트의 색에 변화를 줄것입니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeLHboy%2Fbtq1AEOXkq5%2FXcyaLeyCzBPS5M5zbabNCk%2Fimg.gif"/></p>

<br/>

&nbsp; Content 또한 상위 컴포넌트로 부터 어떠한 props를 전달 받지 않았음에도 state를 업데이트하고 변경 값에따른 변화를 보여주고있습니다.

<br/>

<p align="center"><img src="https://blog.kakaocdn.net/dn/LHexh/btq1xlDamk1/pusrpjMD6ffA1hFe3utLak/img.png"/></p>

<br/>

&nbsp; 현재 파일의 구조를 쉽게 보자면 위와 같이 되어있습니다. 만약 Context API를 사용하지 않는다면 App.js부터 Them.jsx까지 가기위해 Page, Header 컴포넌트에 props를 전달 해야하지만 Context API를 이용하여 그러한 불필요한 작업을 하지않았습니다.

<br/>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fz8C3c%2Fbtq1uwrBbrI%2FrezUlpoQkpKaQ6krDkaVE1%2Fimg.png"/></p>

<br/>

&nbsp; 위와 같은 형태로 불필요한 props를 전달하지 않고 전역상태 관리를 위해서는 Context API를 활용하여 어플리케이션을 설계할수 있습니다.

<br/> -->

[참고](https://reactjs.org/docs/context.html)

👋
