
// 리턴이 없을때는 void로 작성해야 한다 
void printGreeting(String name) {
    print("hello $name");
}
// 리턴이 있고 축약형 
String printGreeting2(String name ) => "hello $name";
// named parameter default 값이다
String printGreeting3([String name = 'world']) {
    return "hello $name";
} 
int calcPlus(int ag1, int ag2) => ag1 + ag2;

void main(List<String> args) {
    printGreeting('world');
    print(printGreeting2("world"));
    print(printGreeting3("world"));
    print(printGreeting3("world3"));
    print(calcPlus(1,1));
}
