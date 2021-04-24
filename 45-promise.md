# 프로미스 객체는 어떻게 만들까?


```jsx
const makePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.random();
            if (random < 0.5){
                reject('실패했음');
            } else if (random > 0.5){
                resolve('성공했음');
            }
        },1000);
    });
}
makePromise()
    .then((result)=> alert(result) , (error) => alert(error));
```

![image](https://user-images.githubusercontent.com/75282888/115944188-3ba8f680-a4ef-11eb-8501-20bfee0ea5d8.png)

![image](https://user-images.githubusercontent.com/75282888/115944466-e1a93080-a4f0-11eb-98e5-a32ac51fd4aa.png)

1. new Promise에 전달되는 함수를 executor(실행자, 실행함수)라고 부른다.
2. executor는 new Promise가 만들어질 때 자동으로 그리고 즉각적으로 호출된다. 
3. executor의 인수 resolve와 reject는 자바스크립트가 자체적으로 제공하는 콜백이다.
4. resolve(value) : 일이 성공적으로 끝난 경우, 그 결과를 나타내는 value와 함께 호출된다.
5. reject(error) : 에러 발생 시 에러 객체를 나타내는 error와 함께 호출
6. new Promise 생성자가 반환하는 promise 객체는 다음과 같은 내부 프로퍼티를 갖는다.
7. state : 처음에는 'pending' 이었다 resolve가 호출되면 'fulfilled', reject가 호출되면 'rejected'로 변한다.
8. result : 처음에는 undefined였다 resolve(value)가 호출되면 value로, reject(error)가 호출되면 error로 변한다.



# 관련 메서드 이해하기

.then ((result) => { }, (error) => { })

![image](https://user-images.githubusercontent.com/75282888/115943478-26ca6400-a4eb-11eb-86aa-00474bcf481d.png)

resolve에 인자로 전달된 값은 

**.then((result) => {})** 의 result가 된다.

reject에 인자로 전달된 값은

**.then(null, (error) => {})** // (  혹은 .catch((error) => {})  )의 error가 된다.





# 콜백헬이 왜 발생하지?

 비동기적인 로직이 담긴 함수의 파라미터는 **비동기함수(로직(콜백), 로직의 실행조건)**으로 구성된다.

간단한 비동기적인 로직이라면 상관 없지만 복잡한 비동기적인 로직이 담기면 필연적으로 수많은 nesting이 발생한다.

예를 들어볼까?

```jsx

비동기함수1(() => {
    로직 1;
	비동기함수2(() => {
        로직2;
        비동기함수3(() => {
            로직 3;
        }, 조건3)
    }, 조건2)
}, 조건1)


 
```



```javascript
setTimeout(() => {
	console.log('로직1');
	setTimeout(() => {
		console.log('로직2');
		setTimeout(() => {
			console.log('로직3');
		}, 1000)
	},1000)
},1000)


```





# 프로미스를 쓴다면 어떻게 될까?

```javascript
const newTimeout = (arg, sec) => {
    let promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(arg);
        }, sec);
    })
    return promise;
}

newTimeout('로직1', 1000)
	.then((result) => {
    	console.log(result)
    	return newTimeout('로직2', 1000);
	})
	.then((result) => {
    	console.log(result);
    	return newTimeout('로직3', 1000)
	})
	.then((result) => {
    	console.log(result);
	})
	
```





# Async를 쓴다면 어떻게 될까?

```javascript
const newTimeout = (arg, sec) => {
    let promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(arg);
        }, sec);
    })
    return promise;
}

const asyncTimeout = async () => {
    let a = await newTimeout('로직1', 1000);
    console.log(a);
    a = await newTimeout('로직2', 1000);
    console.log(a);
    a = await newTimeout('로직3', 1000);
    console.log(a);
    
}
asyncTimeout();

```













