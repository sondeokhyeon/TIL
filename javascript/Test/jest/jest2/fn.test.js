const fn = require("./fn");

test("name and age are set correctly", () => {
  // 객체나 배열을 비교할 때는 toEqual을 사용한다.
  expect(fn.makeUser("Mike", 30)).toEqual({ name: "Mike", age: 30 });
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
});

test("tobeUndefined", () => {
  const n = undefined;
  expect(n).toBeUndefined();
});

test("tobeDefined", () => {
  const n = 1;
  expect(n).toBeDefined();
});

test("tobeTruthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

//tobeFalsy 0, undefined, null, false, NaN
test("tobeFalsy", () => {
  const n = 0;
  expect(n).toBeFalsy();
});

test("toBeGreaterThan 크다", () => {
  const n = "THE_BLACK";
  expect(n.length).toBeGreaterThan(3);
});

test("toBeGreaterThanOrEqual 크거나 같다", () => {
  const n = "THE_BLACK";
  expect(n.length).toBeGreaterThan(6);
});

test("toBeLessThan 작다", () => {
  const n = "THE_BLACK";
  expect(n.length).toBeGreaterThan(1);
});

test("toBeLessThanOrEqual 작거나 같다", () => {
  const n = "THE_BLACK";
  expect(n.length).toBeGreaterThan(6);
});

test("toBeCloseTo 근사값에 가까운지 확인", () => {
  const n = 0.1 + 0.2;
  expect(n).toBeCloseTo(0.3);
});

test("toMatch 문자열이 포함되어 있는지 확인", () => {
  const n = "Hello World";
  expect(n).toMatch(/Hello/);
});

test("toContain 배열에 요소가 포함되어 있는지 확인", () => {
  const user = "Mike";
  const users = ["Mike", "Tom", "Jane"];
  expect(users).toContain(user);
});

test("toThrow 에러가 발생하는지 확인", () => {
  expect(() => fn.throwErr()).toThrow("err");
});
