---
sidebar_position: 7
---
# useRef 사용하기

useRef는 React Hook의 한 종류입니다. 함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef Hook을 사용하게 됩니다.   
(클래스형 컴포넌트에서는 React.createRef 또는 callback 함수를 사용한다고 합니다.)

JavaScript에서 특정 DOM 요소를 가져올 때 getElementById, querySelector 같은 DOM Selector 함수를 사용합니다.   
이와 같이 React에서는 useRef를 통해서 특정 DOM 요소를 선택할 수 있습니다.

## useRef 사용 방법

useRef hook을 import 한 이후 초기값을 넣어줍니다.

```javascript
import React, { useRef } from 'react';

const myRef = useRef(initialValue);
```

이것은 current property를 가진 객체를 반환합니다.
초기값을 0으로 지정했다면 { current: 0 } 와 같은 형태가 반환될 것입니다.

```javascript
const myRef = useRef(0); // { current: 0 }
```

## useRef를 사용해 특정 DOM 요소 선택하기

```javascript
import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();

  const makeFocus = () => {
      console.log(inputRef.current); // <input> DOM Node
      inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={makeFocus}>Focus Input</button>
    </>
  );
};

export default App;
```

## useRef 와 useState 비교

```javascript
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count => count + 1);
  });

  return <div>I rendered {count} times</div>;
};
```

```javascript
const App = () => {
  const count = useRef(0);

  useEffect(() => {
     count.current = count.current + 1;
  });

  return <div>I rendered {count.current} times</div>;
};
```
* state가 바뀌면 component의 re-rendering을 야기시키는 반면, refs는 값이 변해도 컴포넌트가 re-rendering 되지 않습니다.      
   

# Rendering Array

React에서 컴포넌트에서 배열을 반환하게 하면 대괄호는 생략하고 해당 배열의 값을 차례대로 보여주게 됩니다.
자바스크립트에 내장되어 있는 map 매소드를 사용해 배열 안의 각각의 요소를 원하는 형태로 반환하여 렌더링할 수 있습니다.

```javascript
const App = () => {
  const arr = [1, 2, 3, 4, 5];

  return arr;
};
```

배열 안의 각 element의 값을 중괄호 {}를 이용하여 JSX에 포함 시킬 수 있습니다.

```javascript
const App = () => {
    const todoLists = [
        {id: 1, task: '샤워'},
        {id: 2, task: '산책'},
        {id: 3, task: '리엑트 공부'},
        {id: 4, task: '저녁 약속'}
    ];

  return todoLists.map(element => <div>{element.task}</div>);
};
```

하지만 이 상태에서는 warning 문구가 뜹니다.

![img](https://user-images.githubusercontent.com/53216594/112291266-4cd5cc00-8cd3-11eb-94d0-6bcf6be383e3.png)


## list key

```javascript
const App = () => {
    const todoLists = [
        {id: 1, task: '샤워'},
        {id: 2, task: '산책'},
        {id: 3, task: '리엑트 공부'},
        {id: 4, task: '저녁 약속'}
    ];

  return todoLists.map(element => <div key={element.id}>{element.task}</div>);
};
```
배열 속 각각의 요소에 key 속성을 넣어주면 경고문구가 사라집니다.

이때 key값은 반드시 고유해야합니다. 각각의 요소에 고유한 아이디를 부여함으로써 아이디가 동일하면 나중에 다른 자식 요소가 추가되거나   
배열 속에서 위치가 변경이 됐을 때도 아이디가 동일하고 content가 바뀌지 않았다면 불필요하게 re-rendering을 하지 않는다고 합니다.   
즉 key 값은 React가 배열값을 효율적으로 rendering하고 업데이트하기위해 필요합니다.

![img](https://user-images.githubusercontent.com/53216594/112297684-8b6e8500-8cd9-11eb-87fc-bb56ccfe0709.png)


배열 안의 요소에 id가 없을 경우에 배열의 index값을 사용하기도 하지만 이는 권장되지 않는 방법이라고 합니다.   
배열 안의 아이템의 순서가 바뀔 경우 index값이 변할 것이고, 이는 React가 작동할 때 큰 혼란을 줄 수 있기 때문입니다.   

다음 기사를 읽으면 key값을 index를 사용했을 때 부작용에 대한 예시를 볼 수 있습니다.   
[reference: Pokorny’s article for an in-depth explanation on the negative impacts of using an index as a key]
* 링크: <https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318/>

