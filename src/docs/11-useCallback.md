---
sidebar_position: 14
---
# useCallback🙄

### ❓ 이게 뭐에요?
**memoized function을 반환** 해주는 **hook**이에요!  

**값**이 아닌 **function**을 반환해주는거에요!  

### ❓ 네? 이해가 안돼요...
한번 **decalre( 이 하 '선언' )** 되었던 함수를 재차 **declare 안해도 된다**는 거에요. ^^  

**memoized!!**

### ❓ 아! 그럼 useCallback으로 감싸진 함수는 영원히 선언 안해주나요?
아닙니다!  
dependency에 넣어준 값이 변경을 할 시에, 재차 선언을 해줘요!!  

### ❓ dependecy에 있는 값이 변경은 어떻게 알아요?
**참조 통일성(Referencial equality)**을 참고하시면, 값의 변경이 언제 일어나는지 확인 하 실 수 있어요!  

```bash
/* Primitive Values */
true === true // true
false === false // true
1 === 1 // true
'a' === 'a' // true

/* Reference Values */
{} === {} // false
[] === [] // false
() => {} === () => {} // false


const z = {}
z === z // true
```

### ❓ 와! 그럼 컴포넌트에 선언되는 함수들을 매번 useCallback으로 감싸줘야겠네요!  
아닙니다!!  

가벼운 함수들은 적용을 안해도 됩니다.  

최적화를 할려다, 최적화가 되지 않은 결과가 나오기 떄문입니다.  

### ❓ 예? 최적화를 위한 코드인데, 되려 최적화가 안된다는게 무슨 🐶소리에요?
최적화라는건 결국 trade-off(등가교환)에요.  

> Every line of code which is executed comes with a cost.

대가 없는 코드는 없어요!  

```bash
// #1
const hello = () => {}


// #2
const hello = useCallback(() => {}, [])

```

첫번 쨰 코드와 두번 째 코드를 성능을 비교하면 어떤게 더 좋을까요?  

### ❓ 2 ..2 ... 2번이요! useCallback 함수로 최적화를 했잖아요!!

1번 입니다. 🤦‍♂️  

이해하기 쉽도록, 2번을 풀어보면  
```bash
// refactored #2
const hello = () => {}

const helloCallback = useCallback(hello, []);
```

hello도 선언 해줘야 되면서, 🤦‍♂️  
useCallback 함수의 property 세팅과 안에 기타 로직도 돌아가고... 🤦‍♂️  
dependency를 잡아주는 `[]` 배열안에도 무엇이 들어가있는지도 확인해야 되네요....🤦‍♂️  

### ❓ 그러네요. 최적화를 할려, 사용했지만 되려, 일이 더 추가 됬네요... 

(TMI)  

더군다나, 1번 코드의 hello 함수는 garbage collected가 되는 반면!  

2번 코드안에 hello 함수는 garbage collected가 되지 않습니다.  

※ garbage collected가 무엇인지 궁금하시면 하단 출처를 참고해주세요.  

### ❓ ㅎㅎ... 🤪🤪🤪🤪

다시 원점으로 돌아가서,  
> "컴포넌트에 선언되는 함수들을 매번 useCallback으로 감싸줘야겠네요!"  

NO NO NO  


간단한 작업조차 최적화를 진행하면,  
메모리에 더 무리를 주는 행동으로 이어집니다.  

**"과유불급"**  

물론,  
브라우저는 똑똑하고,  
리액트도 똑똑하기에,  
위에 언급한 사소한 케이스는 별 다른 impact를 주지 않아요.  

### ❓ 오.... 그래서 useCallback을 언제 사용하면 되나요? (점점 더 미궁으로...)

크게, 두개의 중점으로 보시면 됩니다.  

1. 참조 통일성을 하고 싶을 때  
2. 계산 비용이 비싼 드는 혹은 복잡한 로직이 있을 때  

### ❓ 와!! 그럼 이제 사용하는 방법만 알면 되겠어요. 🤗  

오늘 준비한 코드부터 보시죠.  

[샌드박스 링크](https://codesandbox.io/s/usecallback-zuuwh?file=/src/App.js)

**(라이브 코딩 설명 진행)**


See Also:
- [useCallback 공식문서](https://reactjs.org/docs/hooks-reference.html#usecallback) 
- [When to use useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
- [Understanding useCallback in react](https://dev.to/ilizette/understanding-usecallback-in-react-5d34)
- [All Things Memory in Javascript (Garbage Collector)](https://youtu.be/AeUCN2lPqL8)
- [Javascript Data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects)
- [Reference Type](https://javascript.info/reference-type)