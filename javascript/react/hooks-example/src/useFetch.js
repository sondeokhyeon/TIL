import { useEffect, useState } from "react";

export default (fn, url) => {
  const [loading, setLoading] = useState(false);

  const initTodos = () => {
    setTimeout(async () => {
      // const response = await fetch(test);
      // const todos = await response.json();
      test.forEach(todo => {
        todo.status = "on";
      });
      setLoading(true);
      fn(test);
    }, 1000);
  };
  //
  useEffect(() => {
    initTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading;
};

let test = [
  {
    id: 0,
    name: "슈바"
  },
  {
    id: 1,
    name: "test2"
  }
];
