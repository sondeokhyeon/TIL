import React, {useState, useEffect} from 'react';
import "./App.css"
import List from "./List.jsx"
import useFetch from "./useFetch";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  
  const loading = useFetch(setTodos, 'http://localhost:1337/tests');

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {id:newTodo.length, name:newTodo}])
  }

  useEffect( ()=> {
    console.log('뉴 랜더', todos)
  }, [todos] )

  return (
    <>
    <h1>Todo app</h1>
    <form action="">
      <input type="text" name="" onChange={changeInputData} />
      <button onClick={addTodo}>할일추가</button>
    </form>
    <List todos={todos} loading={loading}/>
    </>
  );
}

export default App;
