String capitalizeName1(String? name) {
    if(name != null) {
        return name.toUpperCase();
    }
    return "world hello";
} 

String capitalizeName2(String? name) => name != null ? name.toUpperCase() : 'world hello'; 

String capitalizeName3(String? name) => name?.toUpperCase() ?? "world hello"; 

// dart는 JS에서 제공해주는 함수와 비슷하게 지원해주는데 
// null 관련된 연산자도 제공해준다

void main() {
    print(capitalizeName1('hello world'));
    print(capitalizeName1(null));

    print(capitalizeName2('hello world'));
    print(capitalizeName2(null));

    print(capitalizeName3('hello world'));
    print(capitalizeName3(null));
}
