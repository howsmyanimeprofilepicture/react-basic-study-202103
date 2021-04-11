# URL Parameter(query string)

<br>

`URL parameter`는 `query string`이라고도 부릅니다. 이것은 `URL`에 대한 추가적인 정보를 제공합니다.   
`URL parameter`는 주로 가변적인 콘텐츠를 처리하기 위해 사용합니다.   
우리가 검색할 때 페이지는 하나지만 검색어에 따라서 콘텐츠나 레이아웃이 변할 수 있습니다.   
이때 `parameter`를 추가함으로써 어떤 검색어가 들어왔는지 우리는 구분할 수 있습니다.

<br>

다음은 카우치코딩을 구글에 카우치코딩을 검색했을 때의 `URL`입니다.

#### https://www.google.com/search?q=카우치코딩&rlz=1C5GCEA_enKR867KR867&oq=카우치코딩

<br>

`Parameter`는 `'?'` 기호 뒤에 `URL` 끝에 추가됩니다. 복수의 파라미터는 `'&'` 기호로 구분할 수 있습니다.   

<br>

이렇게 `Parameter`는 주로 웹 페이지의 콘텐츠를 지정하고 정렬하는 데 사용되지만 트래픽 추적에도 종종 사용된다고 합니다.   
예를 들어 파워 링크를 타고 들어왔을 경우에는 특정한 `parameter`를 추가하고 나중에 `parameter` 값을 분석해서 사용자가 어떤 링크를 타고 들어왔는지 등을 파악하여 트래픽을 추적할 수 있습니다.

<br>

### Sub Router

서브 라우트는, 라우트 내부의 라우트를 만드는것을 의미합니다. 컴포넌트를 만들어서 그 안에 또 Route 컴포넌트를 렌더링하면 됩니다.

##### Shop이라는 컴포넌트 안에서 URL이 `/shop` 이거나 `/shop:id` 일 때를 구분해서 렌더링해보겠습니다.

먼저 Sub-Router를 만들기 전의 코드입니다.   

```javascript
import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="Nav">
        <Nav />
        <Switch>
          <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```
<br>

`Router`를 `URL`이 `/` 일 때는 `Home`,   
`/about` 일 때는 `About` 컴포넌트,   
`/shop` 일 때는 `Shop` 컴포넌트,   
그리고 `/shop` 뒤에 `id`가 붙은 경우는 `ItemDetail` 컴포넌트가 렌더링 되도록 했습니다.   

<br>

다음은  `Shop`컴포넌트 입니다. `ItemList`를 `fetch`하여 가져오고, 각각의 `item`에 `Link`를 달아
클릭하면 `Item Id`가 뒤에 `parameter`로 붙은 `URL`로 이동하도록 해주었습니다.

```javascript
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
      const result = await response.json();
      setItems(result.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="Shop">
      {items.map(item => {
        const { name } = item.item;
        return (
          <h1 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{name}</Link>
          </h1>
        );
      })}
    </div>
  );
}

export default Shop;

```
<br>

현재는 모든 Router 관련 설정이 App 컴포넌트에서 이루어지고 있습니다.   
여기에서 sub-router를 만들기위해 Shop 컴포넌트 안에서 또 다른 Router를 만들어  ItemDetail 을 렌더링하도록 만들겠습니다.

<br>

먼저 기존 Router에서 DetailItem을 렌더링하는 라우터를 삭제하였습니다.

```javascript
import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="Nav">
        <Nav />
        <Switch>
          <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

그다음 Shop 컴포넌트로 가서, 해당 컴포넌트 내부에 새로운 라우터를 만들어 주었습니다.   

```javascript
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function Shop({ match }) {
  const [items, setItems] = useState([]);
  console.log('match', match)

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
      const result = await response.json();
      setItems(result.data);
    };
    fetchItems();
  }, []);

  const itemList = items.map(item => {
    const { name } = item.item;
    return (
      <h1 key={item.itemId}>
        <Link to={`/shop/${item.itemId}`}>{name}</Link>
      </h1>
    );
  });

  return (
    <div className="Shop">
      <Route exact path={match.path} render={() => itemList} />
      <Route
        path={`${match.path}/:id`}
        component={ItemDetail}
      />
    </div>
  );
}

export default Shop;
```
<br>

살펴보면 `Shop` 컴포넌트에서 `match prop`을 이용하여 `Router`의 분기점을 만들어주었습니다.   
만약 `URL`이 `match.path(/shop)` 일 경우에는 `itemList`를 렌더링해줍니다.   
`URL`이 `/shop:id` 일 경우에는 `ItemDetail`을 렌더링해줍니다.   
`sub-router`는 구조의 차이일 뿐 결과적으로 바꾸기 전과 똑같이 작동합니다.

conference: https://www.youtube.com/watch?v=Law7wfdg_ls&t=1515s,   
https://react.vlpt.us/integrate-api/04-react-async.html
