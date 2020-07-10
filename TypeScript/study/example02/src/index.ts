import {add} from './add.js'
let score = 30; // any타입이다

let score2 : number; // 변수의 타입을 지정한다
score2 = 30; 
let score3 : number = 30;

console.log(score)
console.log(score2)
console.log(score3)

const score4 = 30; // const는 타입을 지정안해도 된다.

console.log('score4 : ', score4)
let test : string = 'test';
console.log(test)

let sum : number = add(1,1);
console.log(sum)

let numberValue : number;
let stringValue : string;
let booleanValue :  boolean;
let undefinedValue : undefined;
let nullValue : null;
let objectValue : object;
let symbolValue : symbol;
let anyValue : any;

// number는 숫자만 가능
numberValue = 3.3;
// string는 문자 
stringValue = "hello",
stringValue = "hello2",
stringValue = `hello 
${1 + 1}
hi`;
// bool
booleanValue = true;

// 가장 하위 타입으로서 null타입과 undefined타입이 있다.  
undefinedValue = undefined;
nullValue = null;

// anyType은 최상위 타입으로서 
// 모든 타입을 다 할당 가능하다 (let과 같다.) 
anyValue = 1;
anyValue = '3';
anyValue = null;
anyValue = {};

// Object는 Primitive Type을 제외한 자료형만 할당이 가능하다 
// strictNullChecks를 옵션을 설정하면 컴파일단계에서 undefined와 null체크하기 때문에 할당이 불가능하다 
// objectValue = undefined;
// objectValue = null;
objectValue = {}

// symbol은 심볼의 함수를 통해서만 만들 수 있다. 
// 객체의 속성으로 쓰이게 된다. 
symbolValue = Symbol();

// 배열은 대괄호를 통해서 배열임을 표시한다.
//let nameList: string[] = ["1","2","3"]
let nameList : number[];
nameList = [1,2,3]
console.log('array')
nameList.map(elem => {
    console.log(elem)
})

//인라인으로 타입도 지정이 가능하다
let user1 : {name : string, score: number};

user1 = {
    name : 'a',
    score : 10
}

console.log('inline ',user1)

// 튜플 샘플 
let tuple2 : [number, string];
tuple2 = [1, 'a'];
console.log(tuple2)