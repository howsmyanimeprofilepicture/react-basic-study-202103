







# Redux Toolkit이 뭔데?

1. 효율적인 리덕스 프로그래밍을 위한 툴셋(toolset)



> \# NPM
> npm install @reduxjs/toolkit
>
> \# Yarn
> yarn add @reduxjs/toolkit





# 구조, 목적

configureStore - Store를 반환한다.

createSlice - 

createAction - 액션생성함수를 반환한다.

createReducer - 리듀서를 반환한다.





#  configureStore

```jsx
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  // 미들웨어를 추가하고 싶다면
  // middleware : [...추가하고 싶은 미들웨어들]
})
```



기존 리덕스의 createStore와 유사하다.

 객체형태의 파라미터를 전달한다.





# createAction

```jsx
const addTodo = createAction('ADD_TODO') 
//
addTodo({ text: 'Buy milk' })
// {type : "ADD_TODO", payload : {text : "Buy milk"}})

```

1. createAction메서드는  **액션생성함수**를 반환한다.

2. 위 예시 코드에서 addTodo는 createAction('ADD_TODO')가 반환한 액션생성함수이다.

3. addTodo에 **전달된 인자**는 addTodo가 반환한 액션 객체의 **payload** 프로퍼티가 된다.

   ![image](https://user-images.githubusercontent.com/82590660/115101994-56292000-9f83-11eb-92c4-2b064cbdedc9.png)

4. 말로 설명하면 이해가 어려운데 위의 예시를 보면 이해가 쉬울 것.







# createReducer

```jsx
const todosReducer = createReducer([], (builder) => {
  builder
    .addCase('ADD_TODO', (state, action) => {
      state.push(action.payload)
      // 👆👆👆👆👆👆👆👆👆
      // 👸return 값이 없다. 
      // 그리고 push 메서드를 써서 기존 state를 직접 조작했다.
      // 매우 mutable한 로직이다.
      // 하지만 createReducer는 이러한 mutable한 로직도
      // 실제 실행해서는 immutable하게 바꿔주기 때문에
      // 어떠한 에러도 발생하지 않는다.
    })
    .addCase('TOGGLE_TODO', (state, action) => {
      const todo = state[action.payload.index]
      // 이것도 mutable한 로직이다.
      todo.completed = !todo.completed
    })
    .addCase('REMOVE_TODO', (state, action) => { 
      // 물론 원한다면 immutable한 업데이트를 써도 무방하다 
      return state.filter((todo, i) => i !== action.payload.index)
    })
})


```

1.  **mutable**한 코드를 작성해도 실제 실행에서는 자동으로 immutable하게 실행된다. 즉 mutable하게 코드를 작성해도 아무 상관이 없다는 이야기다. 



​		** createReducer에서는 immer 라이브러리가 내장되어 있다.* 



```jsx
const actionCreator = createAction('SOME_ACTION_TYPE')

console.log(actionCreator.toString())
// "SOME_ACTION_TYPE"

console.log(actionCreator.type)
// "SOME_ACTION_TYPE"

const reducer = createReducer({}, (builder) => {
	// createReducer안에서는
    // actionCreator의 toString()메서드가 자동으로 호출된다.
    // 따라서 addCase의 첫번째 인자로 액션생성함수만 전달해도 무방하다.
  builder.addCase(actionCreator, (state, action) => {})

  //물론 원한다면 actionCreator의 type프로퍼티를 참조해도 무방하다.
  builder.addCase(actionCreator.type, (state, action) => {})
})

```

2. 또한 **.addCase**의 첫번째 인자로 액션타입문자열(action.type)이 아닌  createAction이 반환한 **액션생성함수**를 바로 전달해도 무방하다. 액션생성함수의 .toString()메서드가 자동으로 호출되기 때문이다.

   





# createSlice

```jsx
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {}, 
      //createPost라는 액션생성함수를 만들어준다. 
    updatePost(state, action) {}, 
    deletePost(state, action) {},
  },
})

console.log(postsSlice)
/*
{
    name: 'posts',
    actions : { 🎈action 생성함수들이 담긴 객체
        createPost,	
        updatePost,
        deletePost,
    },
    reducer 🎈리듀서 함수
}
*/

const { actions, reducer } = postsSlice
export const { createPost, updatePost, deletePost } = actions
export default reducer

console.log(createPost({ id: 123, title: 'Hello World' }))
// {type : "posts/createPost", payload : {id : 123, title : "Hello World"}}
// 👩 createSlice로 만들어진 액션생성함수를 호출해서 반환된 값을 콘솔로 찍어보면 type값이 "posts(name)/액션이름"이라는 것을 알 수 있다. 즉 type값의 충돌로 인한 오류도 예방할 수 있다.
```

action생성함수와 리듀서를 동시에 만들어 준다. 

















