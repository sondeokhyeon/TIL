

void main(List<String> args) {
  // 타입추론 덕분에 배열도 간단하게 작성이 가능하다 
  var list1 = [1,2,3,4]; // 타입을 확인해보면 List<Int>이다
  print(list1);
  // 원한다면 제너릭을 통해서 타입 지정도 가능하다 
  List<int> list2 = [1,2,3,4];
  print(list2);

  // Map 역시 아래와 같이 작성하면 추론을 해준다. 
  var map = {
   "name" : 'name',
   "age" : 30,
   "number" : 123,
   "isWork" : true
  }; // Map<String,Object> 
  print(map);

  var listMap = [
    {"name": "name1", "number": 1},
    {"name": "name2", "number": 2},
    {"name": "name3", "number": 3},
  ]; // List<Map<String,Object>>
  print(listMap); 

}
