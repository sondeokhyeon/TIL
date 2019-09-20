import React, {useContext} from 'react';
import './item.css'
import { TodoContext } from './TodoStore';

export default ({todo}) => {

    const { dispatch } = useContext(TodoContext);

    const toggleItme = (e) => {
        dispatch({type:'CHANGE_TODO_STATUS', payload : e.target.dataset.id})
    }
    return (
        <li data-id={todo.id} className={todo.status === 'on' ? 'on' : 'off'} onClick={toggleItme}>{todo.name}</li> 
    )
}