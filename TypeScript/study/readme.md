# 타입스크립트   

타입스크립트는 NPM으로 설치 후 사용 가능하다 

## 컴파일
---
###  명령어   
설치   
npm install typescript -g (글로벌설치)   
실행방법    
쉘에서 tsc라고 치면 명령어가 보임   
컴파일방법   
tsc (test).ts 하면 ts파일이 js파일로 컴파일이된다. 

#### 컴파일옵션
--target   
ECMAscript 버전을 선택하여 컴파일도 가능   

--lib (es5, es2015.promise,es2015.iterable,dom)  
가이드를 제공하기 때문에 필요에따라 옵션을 추가 
(공백 사용불가)  

--module  
모듈로더를 지정  
Node JS은 commonjs 

--showconfig  
TS옵션을 json형식으로 출력 

#### 컴파일러 설정파일

타입스크립트 설정파일은 json형식으로 되어있다.

#### 옵션
include  
패턴이 맞는 대상들이 컴파일이 된다.
exclude  
컴파일시 대상들은 제외한다 
compilerOptions  
컴파일옵션들을 지정한다 
여기안에는 많은 옵션들이 있다.... 
lib
target 
outDir 
rootDir
sourceMap : 소스맵 생성 여부
removeComments : 주석 제거 여부
noImplicitAny : Any 허용 여부   
... 등등

---

## 기본사용법

### 타입
TS는 어노테이션을 통해서 타입을 지정할 수 있다.

number  : 숫자형 타입
string  : 문자형 타입
boolean : true,false 만
undefined : undefined
null    : null
object  : 원시타입 제외한 객체들 타입 
symbol  : symbol함수 타입 
any : 만능타입(기본 JS변수)

배열에도 지정할 수 있다.
기본 예시 
let arr: string[]; <== 이러면 문자열만 할당가능하다
인라인 타입 
let arr2: {name:string, socore:number};

튜플
let tuple: [number, string];
타입을 고정시킨 배열이다
