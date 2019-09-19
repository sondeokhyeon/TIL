import React, {useState, useEffect} from 'react';
import "./App.css"
import List from "./List.jsx"
import Header from "./header.jsx"
import Form from "./form.jsx"
import useFetch from "./useFetch";

export const TodoContext = React.createContext();

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  
  const loading = useFetch(setTodos, 'http://localhost:1337/tests');

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {id:newTodo.length, name:newTodo, status:'on'}])
  }

  const changeTodoStatus = (id) => {
    const date = todos.map(todo => {
      if(todo.id === parseInt(id)) {
        todo.status = todo.status === 'on' ? 'off' : 'on'
      }
      return todo;
    })
    setTodos(date)
  }
    
  useEffect(()=> {
    console.log('뉴 랜더', todos)
  }, [todos] )

  return (
    <TodoContext.Provider value={{todos, changeInputData, addTodo, loading, changeTodoStatus}}>
      <h1>Todo app</h1>
      <Header/>
      <Form />
      <List />
    </TodoContext.Provider>
  );
}

export default App;
