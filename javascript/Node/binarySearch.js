function binarySearch() {
  const data = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  const flag = 30;
  let start = 0;
  let end = data.length - 1;
  let result = 0;
  let index = 0;

  while (start <= end) {
    index += 1;
    let mid = Math.floor((start + end) / 2);
    if (flag === data[mid]) {
      result = data[mid];
      break;
    } else if (flag < data[mid]) {
      end = data.indexOf(data[mid - 1]);
    } else if (flag > data[mid]) {
      start = data.indexOf(data[mid + 1]);
    }
  }
  console.log("찾은 값 ", result);
  console.log("실행 횟수 ", index);
}

binarySearch();
