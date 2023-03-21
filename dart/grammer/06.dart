String sayHello1({String name = '', int age = 99}) {
    return "hello $name + $age";
}

String sayHello2({
    required String name , 
    required int age }) {
    return "hello $name + $age";
}

String sayHello3(
    String name , 
    int age,
    [int? number = 0]) {
    return "hello $name + $age + $number";
}

/* 
dart는 함수 사용시 key, value식으로도 지정할 수 있다.(named parameter 라고 한다)
하지만 dart는 null이 들어오는 상황을 방지하기 위해 dart컴파일러가 오류를 띄우는데 
이때 default 값을 지정하거나 required 를 지정하는것으로 해결이 가능하다
또한 옵셔널 값으로도 줄수 있다.
*/ 
void main() {
    print(sayHello1(name : 'world', age:3));
    print(sayHello2(name : 'world', age:3));
    print(sayHello3('world', 3, 9));
}
