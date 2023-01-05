
void main(List<String> args) {
    // 파이널 키워드를 통해 변수를 선언할 경우 한번만 선언할 수 있다.
    final name = 'name';
    print(name);
    // name = 'rename';  이러면 에러다

    // late 키워드를 통해 final을 선언한 경우 한번만 선언할 수 있지만 
    // 나중에 할당이 가능하다
    late final name2;
    name2 = 'name2';
    print(name2);
    // name2 = 'rename2'; 이것 역시 에러다 

    const name3 = 'name3';
    // const는 final과 비슷하나 컴파일시 체크하는 변수이다. 
    // 즉 API 통신과 같이 나중에 할당이 된다면 에러가 난다 
    print(name3);
    
}
