# 클로저란?

클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 클로저는 자바스크립트를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.



내부함수는 외부함수의 지역변수에 접근 할 수 있다.

**외부함수의 실행이 끝나서 외부함수가 소멸된 이후**에도 내부함수가 외부함수의 변수에 접근 할 수 있다.

이러한 매커니즘을 클로저라고 한다. 



```javascript
const outter =() => {
    
    const maru = '마루';
    return () => {
        return maru;
    }
};
undefined
const a = outter();
a();
//"마루"
```



위와 같이 **내부함수는 외부함수의 지역변수에 접근** 할 수 있다.

그리고 **외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지  외부함수는 소멸되지 않는다**.

이와 같은 특성을 설명하는 개념이 클로저이다.





```javascript
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title()); //Ghost in the shell
alert(matrix.get_title()); // Matrix
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title()); //공각기동대
alert(matrix.get_title()); //Matrix
```

1. 클로저는 객체의 메서드에서도 사용할 수 있다.

2. 동일한 외부함수 안에서 만들어진 내부함수나 메서드는 외부함수의 지역변수를 공유한다. ghost.set_title 메서드를 통해 (factory_movie의 지역변수인) title을 변경하고 ghost.get_title 메서드를 호출하니 title변수가 변경된 것을 확인할 수 있다.

3. 그런데 똑같은 외부함수 factory_movie를 공유하고 있는 ghost와 matrix의 get_title의 결과는 서로 각각 다르다. 그것은 **외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성**되기 때문에 ghost와 matrix는 서로 완전히 독립된 객체가 된다.

