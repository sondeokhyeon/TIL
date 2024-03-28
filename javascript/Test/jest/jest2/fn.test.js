const fn = require("./fn");

test("name and age are set correctly", () => {
  // 객체나 배열을 비교할 때는 toEqual을 사용한다.
  expect(fn.makeUser("Mike", 30)).toEqual({ name: "Mike", age: 30 });
});

//tobeNull
test("null", () => {
  const n = null;
  expect(n).toBeNull();
});

//tobeUndefined
test("undefined", () => {
  const n = undefined;
  expect(n).toBeUndefined();
});
//tobeDefined
test("defined", () => {
  const n = 1;
  expect(n).toBeDefined();
});

//tobeTruthy
test("not zero", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

//tobeFalsy 0, undefined, null, false, NaN
test("0", () => {
  const n = 0;
  expect(n).toBeFalsy();
});
