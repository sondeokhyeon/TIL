import React, {useState, useEffect} from 'react';
import "./App.css"
import List from "./List.jsx"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo])
  }
  useEffect( ()=> {
    console.log('뉴 랜더')
  }, [todos] )
  return (
    <>
    <h1>Todo app</h1>
    <form action="">
      <input type="text" name="" onChange={changeInputData} />
      <button onClick={addTodo}>할일추가</button>
    </form>
    <List todos={todos}/>
    </>
  );
}

export default App;
