---
sidebar_position: 32
---
# API 연동



`API`는 `Application Programming Interface`의 줄임말로, 응용 프로그램에서 사용할 수 있도록   
운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻합니다.   

정의만 본다면 잘 안 와닿을 것 같아 `API`와 관련된 다른 개념부터 조금씩 살펴보고자 합니다.   



### `Client`와 `Server`



현재는 인터넷만 가능하다면 어디서나 컴퓨터의 웹 서비스를 이용해서 데이터를 공유하고 교환할 수 있습니다.   
이것은 `Client` <---> `Server` 간의 Communication을 통해 가능한 것입니다.



`Client`는 `client machine` 또는 `client program` 이라고 할 수 있습니다.   
`End User`가 `Web`에 접속하기 위해 사용하는 노트북, 컴퓨터, 타블렛, 스마트폰 모두 `client machine` 입니다.   
그리고 `Client program`은 유저가 `request(요청)`을 하는 프로그램입니다. 웹 브러우저, 포토샵 등 입니다.    
`Client`가 기계던지 프로그램이덤지 간에 이것은 `Web을 통해서 request(요청)을 보낼 수 있는 하나의 수단`이 되는 것입니다. 

그리고 `Client` 의 요청을 처리하는 것이 바로 `Server` 입니다.   
하나의 서버가 동시에 여러 `Client`의 요청을 받을 수 있습니다.   
하나의 게임 서버 안에 수백, 수천의 유저가 있는 원리입니다.   



![img](https://user-images.githubusercontent.com/53216594/113860818-70276d80-97e1-11eb-9edc-8782b5a5553a.png)



이렇게 클라이언트는 서버에게 요청함으로써 다양한 기능을 수행할 수 있습니다.   
우리가 블로그에 글을 올린다고 가정해봅시다.   
회원가입 시켜줘, 로그인 시켜줘, 글을 올려줘, 삭제해줘, 수정해줘... 등등   
이런 일련의 기능들은 전부 클라이언트가 서버에 요청을 하고, 서버는 요청에 따라 응답을 처리해줌으로써 가능한 것입니다.   

### 요청 및 응답할 때의 규칙



서버에 요청이 들어왔습니다. 서버는 어떤 것이 회원가입 요청인지, 결제 요청인지 구분할 수 있어야 합니다.   
요청을 구분할 수 있도록하는 어떤 규칙이 필요합니다. 이러한 체계를 API라고 할 수 있습니다.   
즉 API는 클라리언트와 서버가 요청과 응답을 주고 받을 수 있도록 도와주는 역할을 합니다.   



#### RESTful API

보다 체계적으로 API 체계를 관리하기 위해 생겨난 개념이 바로 `RESTful API` 입니다. `RESTful API`는 protocol이 아닌 일종의 convention입니다.   
클라이언트가 요청을 보낼 때 어떤 요청을 보냈는지 알 수 있도록 특정 method를 사용하기로 약속한 것입니다.   

##### `요청` : `method`   

`Create` : `POST`      (블로그에 글을 올려줘)   
`Read` : `GET`         (지금까지 내가 썼던 글을 불러와줘)   
`Update` : `PUT/PATCH` (전에 썼던 글을 수정할래)   
`Delete` : `DELETE`    (글을 삭제할래)   



#### HTTP 상태 코드

이렇게 `RESTful API`에 따라서 클라이언트가 요청을 하면, 서버에서는 이를 처리하면서 다양한 것을 고려하게 됩니다.   
'자신의 피드를 보여달라는 요청을 보낸 사용자가 회원가입 또는 로그인을 했나?'
'사용자가 지금까지 쓴 글이 있나?' 등등..   



위의 상황에서 로그인이 되어있다면, 서버는 OK 사인과 함께 현 사용자의 요청을 들어줄 것입니다.   
로그인이 되어있지 않다면, 내 피드를 보여달라는 요청에다 NO 사인을 보내야할 것입니다.   



이렇게 서버가 보내는 OK, NO 사인에도 체계가 필요하다고 생각되었고 이에 HTTP 상태 코드를  `Response` 규칙으로 정합니다.   
`client`의 요청이 제대로 처리된 경우에는 `200`번대 코드,   
`client`의 요청이 잘못되어서 제대로 처리되지 못했을 때는 `400`번대 코드,   
`server`의 문제로 요청이 처리되지 못한 경우는 `500`번대 코드를 응답으로 보내주면 됩니다.   



이렇게 Restful API라는 중간 매개체를 통해 `client`와 `server`가 `요청(Request)`과 `응답(Response)`함으로서 소통을 할 수 있습니다.



##### `API` 개념을 더 넓게 생각할 수도 있습니다.   
내가 소프트웨어를 개발하고 있는데, 여기에 지도 기능을 추가하고 싶어졌다고 가정해봅시다.   
그런데 나 혼자서 길, 도로, 건물 위치를 파악할 수 있는 지도를 개발하기에는 어마어마한 시간과 비용이 들 것입니다.   
이런 상황에서 우리는 이미 만들어져있는 구글 또는 다음 지도의 기능을 가져다가 사용하고 싶을 것입니다.   
이 다른 소프트웨어의 기능을 사용하기 위해서 `API`가 필요합니다.   

우리가 다른 소프트웨어의 기능을 가져다가 사용할 수 있도록 `API`를 제공해주는 도구를 `SDK(Software Development Kit)`라고 합니다.   
우리가 구글이나 다음에서 제공하는 지도 `SDK`를 설치하면, `SDK`에서 제공하는 `API`를 통해 구글 지도에 요청을 함으로써 구글 지도의 기능을 사용할 수 있는 것입니다.   



마지막으로 API를 간단하게 정리하자면, 웹에서 데이터를 요청하고 응답을 받는 과정에서 소통하는 것을 도와주는 매개체,   
프로그램들이 서로 상호작용하는 것을 도와주는 매개체라고 할 수 있을 것 같습니다.    




# Data Fetch이후 useReducer로 상태관리하기



먼저 `inisitalState`를 선언하고, 어떻게 `state`를 업데이트 할건지 명시한 `reducer` 함수를 만듭니다.

```javascript
const initialState = {
  isLoading: false,
  isError: false,
  post: []
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        post: action.payload,
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};
```


`Fetch`를 시작하면 `isLoading`을 `true`로 업데이트해주고   
성공적으로 데이터를 가져온 경우 `post` 속성에 데이터를 넣어주며 `isLoading`은 `false`가 됩니다.   
만약 오류가 났다면 `isError`를 `true`로 만들어주고 `isLoading`은 `false`가 됩니다.   



그리고 컴포넌트안에서 `useEffect`를 사용하면서 `dependency`를 빈배열로 줌으로써 컴포넌트가 `mount` 될 때 한번만   
여러가지 포스팅의 타이틀을 가져오는 데이터가 `fetch` 되도록 만들어주었습니다.

```javascript
import React, { useEffect, useReducer } from 'react';


const DataFetching = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'GET'
        });
        const data = await response.json();
        console.log(data);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        console.log(err);
        dispatch({ type: 'FETCH_FAILED' });
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {state.isLoading ? 'Loading' : state.post.map(post => {
        return (
          <div key={post.id.toString()}>
            {post.title}
          </div>
        );
      })}
    </div>
  );
};

export default DataFetching;
```
데이터를 읽어오는 게 목적이기 때문에 `GET` 요청을 사용하였습니다.   



여기서 한가지 주의할 점이 있습니다. `useEffect callback`함수에 `async`를 바로 사용하면 안된다는 것입니다.   
`useEffect`가 return 하는 것은 반드시 `cleanup 함수`(컴포넌트가 unmount || update 되기 전 시행되는 함수)가 되어야 한다고 배웠습니다.   
위 코드에서 `fetch`시 `async & await`을 사용하고 있는데 `async` 함수는 `Promise객체`를 반환하기 때문에 `useEffect callback` 함수로 `async`를 넣으면 안 됩니다.   



`fetch`가 성공하면 `id`와 `userId`, `post의 title` 정보가 담긴 객체가 여러개 들어있는 배열이 데이터에 들어오게 됩니다.   
`title` 정보를 보여주도록 배열을 rendering 한 결과입니다.   



![img](https://user-images.githubusercontent.com/53216594/113868577-c8af3880-97ea-11eb-857b-db771fb23276.png)


