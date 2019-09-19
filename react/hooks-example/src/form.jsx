import React, {useContext} from 'react'
import { TodoContext } from './App';

export default () => {
    const { changeInputData, addTodo } = useContext(TodoContext);
    return (
        <form action="">
            <input type="text" name="" onChange={changeInputData} />
            <button onClick={addTodo}>할일추가</button>
        </form>
    )
}

