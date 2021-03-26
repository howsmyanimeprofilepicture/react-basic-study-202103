React.Memo는 불필요한 렌더링을 줄이기 위해 사용합니다.



> 1. 리액트는 기본적으로 <u>부모 컴포넌트가 리렌더링 되면 **자식 컴포넌트도 함께 리렌더링**</u> 됩니다. 
> 2. 근데 굳이 자식 컴포넌트까지 리렌더링 시킬 필요가 없다면
> 3. React.Memo를 통해 막아줄 수 있습니다.



React.Memo는 Props가 변경된 경우를 제외하고는 리렌더링을 막아줍니다.



React.Memo를 사용할 경우, 부모 컴포넌트가 리렌더링 되더라도 자식 컴포넌트에 전달되는 Props에 변화가 없다면, 자식 컴포넌트는 리렌더링되지 않습니다.



```jsx

import React from 'react';
const User = React.memo(function User({ user, onRemove, onToggle }) {
    // 👀컴포넌트 전체를 React.memo() 메서드의 인자로 전달하는 식으로 활용할 수 있습니다.
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





