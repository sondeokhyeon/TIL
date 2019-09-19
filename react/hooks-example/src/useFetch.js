import { useEffect, useState } from 'react';

export default (fn, url) => {
    const [loading, setLoading] = useState(false);
  
    const initTodos = () => {
      setTimeout( async () => {
        const response = await fetch(url)
        const todos = await response.json()
         todos.forEach(todo => {
             todo.status = 'on'
         });
        setLoading(true)
        fn(todos)
      }, 1000)
    }
    //
    useEffect( () => {
      initTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    return loading;
  }