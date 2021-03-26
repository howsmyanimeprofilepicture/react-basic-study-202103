#### React.Memo는 불필요한 렌더링을 줄이기 위해 사용합니다.



> 1. (리액트는 기본적으로) <u>부모 컴포넌트가 리렌더링 되면 **자식 컴포넌트도 함께 리렌더링**</u> 됩니다. 
> 2. 근데 굳이 자식 컴포넌트까지 리렌더링 시킬 필요가 없다면
> 3. React.Memo를 통해 이를 막아줄 수 있습니다.



#### React.Memo는 **Props가 변경된 경우를 제외**하고는 모든 리렌더링을 막아줍니다.



React.Memo를 사용할 경우, 부모 컴포넌트가 리렌더링 되더라도 자식 컴포넌트에 전달되는 Props에 변화가 없다면, 자식 컴포넌트는 리렌더링되지 않습니다.



```jsx
import React from 'react';
const User = React.memo(function User({ user, onRemove, onToggle }) {
    // 👀컴포넌트 전체를 React.memo() 메서드의 인자로 전달하는 식으로 활용할 수 있습니다.
    // 👀이렇게 되면 User컴포넌트는 Props({user, onRemove, onToggle}) 값이 변경되지 않는 한
    // 👀리렌더링이 발생하지 않습니다 !!
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
    // 👀아니면 선언한 컴포넌트를 React.memo의 인자로 전달해서 export하는 것도 한 방법입니다.

```









## 1. 언제 자식 컴포넌트의 리렌더링을 막아야 할까?

  가장 쉽게 생각할 수 있는 건 자식 컴포넌트가 정적인 컴포넌트인 경우입니다. state나 life cycle에 따른 어떠한 변화 없이 고정된 뷰를 제공하는 정적인 컴포넌트는 굳이 리렌더링을 해줄 필요가 없습니다. 



##  2.언제 useCallback을 쓰는 진짜 이유

앞서 우리가 useCallback()에 대해서 알아봤는데요. 근데 사실 함수 자체를 선언할 때 발생하는 리소스를 줄이는 것보다는 함수의 선언으로 발생하는 다른 컴포넌트들의 리렌더링을 막고자하는 게 더 커요.

사실 함수를 선언하는 것 자체는 그렇게 크게 리소스를 잡아먹지 않는 걸로 알아요. 물론 조금이라도 최적화시켜주는 게 좋겠죠? 

예를 들어 App 컴포넌트에서 onCreate() 함수를 선언하고, 해당 함수를 Create컴포넌트로 전달한다고 가정해볼게요. 그리고 Create 컴포넌트는 React.memo를 통해 props의 변경을 제외하곤 어떠한 리렌더링도 발생하지 않게 해줬어요.

onCreate()는 정적인 함수여서 굳이 재선언이 필요 없는 함수인데, useCallback을 사용하지 않아 리렌더링 될 때마다 onCreate()가 선언된다면, 이에 따라 onCreate가 props로 전달되는 다른 컴포넌트들까지 리렌더링 되고 말아요.



## 3. useState의 함수형 업데이트를 쓰는 이유



```javascript
const onRemove = useCallback(
  id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  },
  [users]
);
```

```javascript
const onRemove = useCallback(
  (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers((users) => users.filter(user => user.id !== id));
  }, 
  []
);
```



함수형 업데이트를 사용하면 의존성배열을 비울 수 있음.

setUsers` 에 등록하는 콜백함수의 파라미터에서 최신 `users` 를 참조 할 수 있기 때문에 `deps` 에 `users` 를 넣지 않아도 된답니다.

즉 users 스테이트의 변경에 따른 onRemove함수의 재선언을 줄일 수 있고, 해당함수를 props로 받는 다른 컴포넌트들의 리렌더링도 막을 수 있음. 
