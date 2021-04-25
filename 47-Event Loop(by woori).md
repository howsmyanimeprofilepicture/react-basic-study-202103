# Event Loop

Event Loop에 대해 설명하기에 앞서 우리는 자바스크립트가 어떻게 동작하는지 살펴볼 필요가 있습니다.   

## 자바스크립트 엔진
자바스크립트는 구글의 V8 엔진으로 돌아갑니다. 자바스크립트 엔진은 크게 두 가지의 구성 요소로 이루어져 있습니다.   

<img width="312" alt="99747F465C3214AF30" src="https://user-images.githubusercontent.com/53216594/115993409-9df81900-a60d-11eb-92ba-aadfd848ea2a.png">

- Memory Heap: 객체는 힙, 대부분 구조화되지 않은 메모리 영역에 할당된다. 변수와 객체에 대한 모든 메모리 할당은 여기서 발생한다.
- Call Stack: 코드가 실행될 때 호출 스택이 쌓인다.

자바스크립트의 call stack 에 대해서는 많이들 들어보셨을 거라고 생각합니다.   
자바스크립트의 코드를 시행할 때 Execution Context를 만들게 되고 이것이 call stack에 쌓이는 형식으로 자바스크립트의 코드가 시행됩니다.   
call stack의 맨 위에 쌓인 코드가 먼저 시행되는, 후입선출의 구조를 가졌습니다.

<br>

call stack의 안에서 코드를 한번에 한줄씩만 시행하게 될 것이고, xecution Context가 생성되면서 어떻게 시행될지 순서가 정해지게 됩니다.   
이러한 특징 때문에 자바스크립트는 synchronous, single-threaded language 라고 표현됩니다.

<br>

그렇다면 우리가 서버에서 한 요청의 결과를 기다리거나, 타이머를 설정해야할 때는 call stack에서 어떻게 동작하는 걸까요?   

분명히 위에서 call stack은 동기적으로, 한번에 한줄씩 코드를 시행한다고 했습니다.   
call stack에는 타이머 기능이 없습니다.   
그런데 우리는 어떻게 이러한 기능을 자바스크립트에서 사용할 수 있는 것일까요?

<br>

JS engine에 있는 call stack에는 이러한 기능이 없으므로, JS engine 외부로 눈을 돌려봅시다.   
JS engine은 어디에 존재하고 있는 것일까요?

(그림)

위의 그림에서 보이듯이, JS Engine은 바로 브라우저 안에 있습니다.   

그리고 이 브라우저는 JS Engine을 돌리는 것 뿐만이 아니라 훨씬 더 많은 기능을 가지고 있습니다.   
LocalStorage를 사용하는 것, 타이머를 사용하는 것, http://www.... 같은 도메인 주소로 서버에다가 요청을 하는 것...   
이 모든 기능은 바로 브라우저의 기능입니다.   

<br>

우리가 자바스크립트에서 이러한 기능을 쓸 수 있는 것은, 자바스크립트의 기능을 쓰는 게 아니라 바로 브라우저의 기능들을 가져와서 쓰게 되는 것입니다.   
그렇다면 자바스크립트에서 어떻게 브라우저의 기능에 접근할 수 있는 것일까요?   

바로 Web Api를 사용해서 이 기능을 사용할 수 있는 것입니다.   

<br>

### Web Api

The window object는 브라우저에서 열린 하나의 윈도우(창)라고 볼 수 있습니다.   
윈도우 객체는 브라우저의 요소들과 자바스크립트 엔진 등을 담고 있는 자바스크립트의 최상위 객체입니다.   

윈도우 객체는 DOM(Document Object Model), BOM(Browser Object Model), Javascript 표준 내장 객체 정보를 담고 있습니다.   

DOM 객체들로부터 제공되는 getElementById()나 querySelector()를 DOM API라고 합니다.   

그리고 BOM 객체는 웹 브라우저의 정보 및 브라우저가 제공해주는 기능을 객체로 표현하고 있습니다.   
screen, location, navigation 등의 속성을 이용해서 정보에 접근할 수 있고, 특정 메소드를 사용해서 기능을 이용할 수도 있습니다.   
(참고: https://www.w3schools.com/js/js_timing.asp)

Web Api는 웹 브라우저가 제공하는 기능을 의미하므로 위의 API들 역시 Web Api의 일부라고 보아도 무방할 것 같습니다.   
window 객체에는 엄청난 양의 정보가 담기게 되고, 웹 브라우저가 지원하는 Web Api 정보 역시 가지고 있습니다.   

```javascript
setTimeout   
fetch   
LocalStorage   
console   
location   
...
```
<br>

우리들이 정말 많이 사용하는  console.log, setTimeout, fetch…  이들은 웹 브라우저가 기능을 지원해주는 web api 라는 것을 알게되었습니다.   
우리는 이것을 window 객체(인터페이스)를 사용함으로서 해당 기능에 접근해서 사용할 수 있었던 것입니다.   

```javascript
window.setTimeout   
window.localStorage   
window.console
```
우리가 이것을 window. 을 붙이지 않고 사용할 수 있었던 이유는 window가 최상위에 있는 전역 객체(global object)이기 때문입니다.   
scope chain을 타고 올라가 전역 객체의 setTimeout을 찾게 되어 사용할 수 있게 된 것입니다.   

실제로 ECMAScript에서도 JavaScript에서 Web API까지 정의하고 있지 않다고 합니다.   
즉 Web API는 웹 브라우저가 제공하는 기능일 뿐, Vanilla JavaScript에는 포함되지 않습니다.   

<br>

## Event Loop

앞서 자바스크립트 엔진을 비롯한 브라우저와 web api에 대해서 알아봤으니 좀더 수월하게 event loop에 대해 알아갈 수 있을거라고 생각합니다.   

```javscript
console.log('start');

setTimeout(function callback() {
  console.log('callback');
}, 5000);

console.log('end');
```
위의 코드가 어떻게 call stack에 담기고 실행되는지 살펴보겠습니다.   

먼저 stack에 global Execution Context가 쌓입니다.   
그리고 나서 첫번째 줄을 지나면서 'start'를 콘솔창에 찍게됩니다.   

그 다음 setTimeout을 만나게 됩니다.   
setTimeout은 브라우저의 timing 기능을 시행하게 됩니다. setTimeout에 있는 timer는 web api에서 시행됩니다.   

timer는 web api에 있는 채로 call stack에서는 다음 코드를 시행하게 됩니다.   
이어 콘솔창에 'End'를 찍게 됩니다.   

Web Api에 있던 timer는 5초가 지나면 callback queue에 callback function을 전달합니다.   

앞서 모든 자바스크립트의 코드는 call stack에서 시행된다고 했습니다.   
그렇다면 현재 callback queue에 있는 callback function을 stack으로 전달해주어야 하겠죠?

여기서 Event Loop가 필요한 것입니다.   
Event Loop는 계속해서 call stack 과 callback queue를 주시하고 있습니다.   
그러다가 언젠가 스크립트에 있는 모든 코드가 시행이 되고 call stack은 비게 될 것입니다.   

Event loop는 call stack이 비워진 순간에 바로 callback queue에서 대기 중이던 callback 함수를 stack에다가 전달합니다.   
그렇게 call stack에 들어간 함수는 시행이 되고 나면 또 call stack이 비게 될 것입니다.   
callback queue에 다음에 또 대기 중인 함수가 있었다면 차례로 그 함수를  call stack에 전달할 것입니다.   

![ek7ji4zrimozpp2yzk0a](https://user-images.githubusercontent.com/53216594/115998355-d0137600-a621-11eb-8b5d-a5df89ee3a18.png)
(이미지 출처: https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)


참고: http://latentflip.com/loupe/

