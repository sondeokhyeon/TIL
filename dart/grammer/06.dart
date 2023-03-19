// String sayHello({String name = '', int age = 99}) {
//     return "hello $name + $age";
// }

String sayHello({
    required String name , 
    required int age }) {
    return "hello $name + $age";
}

/* 
dart는 함수 사용시 key, value식으로도 할수 있는데 
null이 들어오는 상황을 방지하기 위해 dart컴파일러가 오류를 띄우는데 
이때 default 값을 지정하거나 required 를 지정하는것으로 해결이 가능하다
*/ 
void main() {
    print(sayHello(name: 'world', age : 3));
}
