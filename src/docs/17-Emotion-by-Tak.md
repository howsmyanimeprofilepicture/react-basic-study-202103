---
sidebar_position: 24
---
# Emotion 😭😱🤢😡

### Emotion
Css-in-JS 의 빅브라더 중 하나 인 📦 패키지 입니다. 


### 들어가기에 앞서, Css-in-JS가 무엇이냐?
styling을 더 이상 stylesheet으로 관리를 안하고,   
JS에서 관리를 해보자라는 **취지**로 나온 전술입니다.

### styling은 당연지사 css로 해야되는거 아니냐! 왜 JS에서 관리하느냐?
이제 modern web들은 component architecture로 작성하기 떄문입니다.

문서 level이 아닌 컴포넌트 level로 로 관리하자는 needs가  
Css-in-JS를 탄생시키지 않았나 싶습니다.

css도 몰랐겠죠... 이렇게 web이 변할 줄... 😂

### 됐고, 나는 css로 styling을 관리하는게 편하다!

네. 괜찮습니다.  
  
Modern Web에서 무조건 Css-in-JS를 선택해서 styling을 해야되는 것은 아닙니다. 
  
정답은 없습니다~
  
단지! 한번 찍먹해볼만한데~ 라는 느낌으로 다가가는게 좋습니다.
---
### ㅇㅋ 🤷‍♀️ 사용하면 어떤 이점이 있는지 알려주세요.

아래와 같은 장점들이 있습니다.
- 컴포넌트로 styling 하기
- Javscript 환경을 최대한 활용할 수 있다!
- 코드 공유가 쉽다!
- 더 이상 쓸모가 없어진 코드 삭제!
- 이 외 많습니다.

  
이런 단점들도 있습니다.  
- 배우기 어렵다! (초반 하이 러닝 커브)
- 팀에 적용 시킬려면, 팀원들이 적응하는데 시간이 소요된다.
- 의존성이 생성된다!
  
그래도 찍먹(도전) 해보기에는 나쁘지 않습니다.  

C++을 찍먹해볼까 생각해보면 Css-in-JS를 훨씬 가뿐한 마음으로 하실 수 있습니다.

---

### Css-in-JS 대홍수

![image](https://user-images.githubusercontent.com/77006427/113510076-c99a5d00-9593-11eb-9b57-2eab46d84b6b.png)

최근 1년 트랜드  

[Check out every package of Css-in-JS github](https://github.com/tuchk4/awesome-css-in-js)

Ah... emotion 패키지는 1등이 아니네요. 😯

(emotion을 스터디 주제로 제안한 사람은 조용히 머리 박습니다.)

### 제일 선호되는 패키지도 아닌데 굳이 emotion을 사용하는 이유가?

CSS IN JS 패키지를 선택하는건 개취입니다. (팀취/회취)

emotion이 인기를 끈 이유는 아래와 같습니다.

1. 패키지 용량이 작다. (styled-component와 2kb 차이 밖에 안난다는 분석도 있습니다.)
2. 성능이 좋다. (1번과 동일)
3. 유연하다. (FrameWork-agnostic)
4. 남들이 좋다길래...

이모션 공식문서 소개를 보면  
![image](https://user-images.githubusercontent.com/77006427/113511480-f30ab700-959a-11eb-8b24-a27654ffa933.png)


다른 패키지들과 비교를 하자면, 한도 끝도 없습니다. 

현재진행형 대환장 파티입니다. 

그만 비교하자...

---
### 탁's emotion

### string vs object

emotion을 사용해서 styling 하실려면 두 방식 중 하나를 택합니다.  
(inline styling보다 styled Component에 관한 이야기를 중점으로 다루겠습니다.)

1. 기존 css 문법을 사용 할 수 있는 string으로 할 것이냐!
![image](https://user-images.githubusercontent.com/77006427/113511580-657b9700-959b-11eb-90e1-a8141aafd0c9.png)  
  
  
  
2. object로 할것이냐!  
![image](https://user-images.githubusercontent.com/77006427/113511674-f6527280-959b-11eb-8f66-c266133a0020.png)

익숙한 css 문법을 사용하고 싶다는 욕망을 접어두고,  
저는 object를 선택합니다. 

string으로 작성 할 시에는 
- typographical error를 잡아주지 않습니다.
- 자동 완성도 돼지 않습니다.

위에서 언급한 javascript 환경을 활용 할 수 있는 case들도 있기에,  
**통일성을 위해, object를 선택합니다.**  
(개인 견해)

초기에는 불편 할 수 도 있겠지만,     
object를 사용해서 Dom Style Object (🤢) 에 금방? 익숙해지실겁니다.
(언급 된 단점 1: 초반 하이 러닝 커브)

위의 예시를 보듯이 Component에 prop을 활용해서 사용 할 수 있습니다.

bool을 사용한다던가, 특정 로직 값을 넣는다 던가... 등등

Styled Component에서 prop을 전달 받아 사용하느게,  
꼭 function을 만들고 있다는 느낌도 없잖아 있습니다.


### 디자인 시스템 구축을 ThemeProvider로 가능

theme.js
```bash
export default {
  colors: {
    orange: '#FF8000',
    gray: '#666666',
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};
  
```
index.jsx
```js
ReactDOM.render(
  (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  ),
  document.getElementById('app'),
);
```

./common/button.jsx
```js
// import styled from '@emotion/styled';

const Button = styled.button(({ theme }) => ({
  width: '100px',
  padding: '.5rem',
  textAlign: 'center',

  color: 'white',
  backgroundColor: theme.colors.orange,

  borderRadius: '5%',
}));

export default Button;
//

```

일일히 Component로 만들어서 import 하기보다는,  
최상단에 감싸서 theme을 어디에서든지 사용가능하게 만들 수 도 있습니다.


외에도 정말 많은 기능들을 emotino에서 제공하고 있습니다.

심심풀이땅콩으로 들여다보시고, 재미보시면 될듯합니다 :) 


위에 object로 해야되는건 순전한 제 주관적인 의견이니 편하신대로 선택해서,  
사이트를 꾸미시면됩니다.  

이상. 디자인 감각 1도 없는 XX의 난잡한 정리.

See Also:
- [emotion](https://emotion.sh/docs/introduction)
- [CSS in JS: Benefits, Drawbacks, and Tooling](https://medium.com/object-partners/css-in-js-benefits-drawback-and-tooling-80286b03f9aa)
- [emotion을 활용한 크몽 프론트엔드 스타일링 시스템](https://brunch.co.kr/@kmongdev/17)
- [styled components vs emotion](https://blog.logrocket.com/styled-components-vs-emotion-for-handling-css/#:~:text=The%20biggest%20advantage%20of%20Emotion,while%20avoiding%20identical%20naming%20styles.)
- [CSS in JS 에 관해 알아야 할 모든 것](https://d0gf00t.tistory.com/22)