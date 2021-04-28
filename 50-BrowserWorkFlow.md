참고한 컨텐츠들

https://velopert.com/3236

https://www.youtube.com/watch?v=wKwMRH0PkMg

https://www.youtube.com/watch?v=muc2ZF0QIO4&t=0s

https://davidhwang.netlify.app/Developments/browser-rendering-process/

# Browser의 Work FLow

[![renderingengine](https://davidhwang.netlify.app/static/58dd63a5db0e6951536d1f080d54a9a0/b9e4f/renderingengine.png)](https://davidhwang.netlify.app/static/58dd63a5db0e6951536d1f080d54a9a0/448d4/renderingengine.png)

1. `DOM tree 구축`을 위한 HTML parsing, CSS, Javascript parsing : HTML 문서를 파싱한 후, content tree 내부에서 tag(a, div)를 DOM node 로 변환한다. 그 다음 CSS 파일과 함꼐 모든 스타일 요소를 파싱한다. 스타일 요소와 HTML 표시 규칙, Javascript 의 파싱 결과물은 render tree 를 생성한다

2. `render tree 구축` : HTML 과 CSS 를 파싱해서 만들어진 render tree 는 색상 또는 면적 등 시각적 속성을 갖는 사각형을 포함한다. 정해진 순서대로 렌더링한다

3. `render tree 배치`  (layout) : render tree 가 생성이 끝나면, 배치가 시작된다. 각 node 가 정확한 위치에 표시되기 위해 이동한다

4. `render tree 그리기` (paint) : 각 node 배치를 완료하면 UI 벡엔드에서 각 node를 가로지르며 paint 작업을 한다

   

**1번과 2,3,4번은 병렬적으로 진행된다**
즉, 통신 레이어에서 data를 계속 받아오면서(통신 레이어)
받아온 HTML, CSS, Javascript 를 parsing 하면서(1번)
render tree에 node를 그린다(2,3,4번)



# virtual DOM

 

기존 Browser Work Flow의 문제, 특히 SPA에서 많이 발생하는 문제는 

각각의 DOM 조작이 각각의 레이아웃 변화, 트리변화, 렌더링을 발생시킨다는 것이다.



30개의 엘리먼트를 하나 하나 수정하면, 30번의 레이아웃 재계산과 30번의 리렌더링이 발생한다는 것이다.



virtual DOM은 DOM의 변화를 먼저 가상 DOM트리에 먼저 적용시킨다. 가상 DOM은 렌더링이 되지 않아 연산비용이 적다. 연산이 끝나면 최종적인 변화만 실제 DOM에 던져주는 것이다. 딱 한 번만, 모든 변화를 하나로 묶는 것이다.



30개의 사소한 DOM조작으로 30개의 리플로우, 리페인팅을 만드는 것이 아니라 virtual DOM에 먼저 DOM 변화를 적용하고, 최종적인 형태만을 실제로 DOM에 전달해 리플로우와 리렌더링은 한 번으로 줄이는 것이다.



*사실 이러한 과정은 virtual DOM이 없어도 이루어질 수 있다.*



