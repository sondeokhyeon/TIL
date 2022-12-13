
void main(List<String> args) {
    // 다트에서는 동적으로 타입을 추론하므로 var 키워드를 통해서 선언할 수 있다. 
    // var를 통해서 선언된 변수의 경우 추론이지 다이나믹 타입이 아니므로 같은 타입만 지정이 가능    
    var name = 'name1';
    var age = 20;

    // name = 40; 이러면 에러다

    print(name);
    print(age);

    // var 키워드 뿐만이 아니라 직접적으로 타입을 지정하여 할당도 가능하다 
    String name2 = 'name2';
    int age2 = 20;

    print(name2);
    print(age2);
    
}
