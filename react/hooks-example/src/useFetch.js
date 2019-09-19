import {useState, useEffect} from 'react';

export default (fn, url) => {
    const [loading, setLoading] = useState(false);
  
    const initTodos = () => {
      setTimeout( async () => {
        const response = await fetch(url)
        const todos = await response.json()
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