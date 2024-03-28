const fn = require("./fn");

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("adds 1 + 2 to equal 3", () => {
  expect(fn.add(1, 2)).toBe(3);
});

test("adds 2 + 2 to not 5", () => {
  expect(fn.add(2, 2)).not.toBe(5);
});
