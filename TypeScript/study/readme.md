# 타입스크립트   

타입스크립트는 NPM으로 설치 후 사용 가능하다 

### 명령어   
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
