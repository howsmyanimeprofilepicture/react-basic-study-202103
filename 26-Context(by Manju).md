# Context in React

## 🤔 Why we use Context?

<br>

![image](https://user-images.githubusercontent.com/75834421/113876415-b2a57600-97f2-11eb-9ad2-c58671115b0a.png)

React는 원래부터 component로 잘게 쪼개서 하나의 큰 어플리케이션을 을 만들 수 있는 Library(혹은 Framwork..?) 입니다. 위의 그림 처럼, 각각의 component에 공통적인 state가 필요할 때 모든 components를 포함하는 아주 큰! super big component으로 싸서 관리하면 됩니다!

<br>

![image](https://user-images.githubusercontent.com/75834421/113877433-aa9a0600-97f3-11eb-895d-3aea71fb588c.png)

그럼 이렇게 깊게 component가 구성되어 있을 땐 어떻게 해야 할까요?보통 부모 component에서 정의한 state를 자식 component에서도 사용하기 위해선 props로 전달해 주어야합니다. big component(파란색) 에서 정의한 상태를 주황색 동그라미에서 쓰려면 너무나 많은, props 전달 만을 위한 component들이 필요해집니다!! 여기서 필요한게 바로 **Context**입니다.

<br>

![image](https://user-images.githubusercontent.com/75834421/113878246-652a0880-97f4-11eb-952f-b90aa413528a.png)

각 component에 필요한 state(data) 들을 한 곳에 모아두고, 필요할 때마다 불러오고, 사용하는 component안에서 새로운 상태로 대체할 수 있습니다. 이렇게 React에서 **state managemen를 가능하게 해주는 것이
`Context`**라고 할수 있습니다.

<br>

<br>

## 🤔 How to use Context

<br>

> **Context와 자주 같이 쓰이는 useReducer!**
