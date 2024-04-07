const fn = require("./fn");

test("add", () => {
  expect(fn.add(1, 2)).toBe(3);
});

// 콜백 함수를 사용하는 경우, done을 사용하여 테스트가 끝났음을 알려줘야 한다.
test("3초 후에 Mike를 리턴한다", (done) => {
  fn.getName((name) => {
    expect(name).toBe("Mike");
    done();
  });
});

// Promise를 반환하는 함수의 경우, return을 사용하면 테스트가 끝날 때까지 기다려준다.
test("3초 후에 30을 리턴한다", () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

// Promise를 반환하는 함수의 경우, .resolves를 사용하여 테스트할 수도 있다.
test("Promise Resolve", () => {
  return expect(fn.getAge()).resolves.toBe(30);
});

// Promise를 반환하는 함수의 경우, .rejects를 사용하여 테스트할 수도 있다.
test("Promise Reject", () => {
  return expect(fn.getAge(true)).rejects.toBe("Error");
});

// async/await를 사용하여 테스트할 수도 있다.
test("async/await", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
