import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>TODO</h1>
      {error && <div>{error}</div>}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
