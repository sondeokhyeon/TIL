const fn = {
  add: (num1, num2) => num1 + num2,
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge: (isError = false) => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isError) {
          reject("Error");
        }
        resolve(age);
      }, 3000);
    });
  },
};

module.exports = fn;
