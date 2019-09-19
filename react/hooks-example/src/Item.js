import React from 'react';
import './item.css'

export default ({todo, changeTodoStatus}) => {
    const toggleItme = (e) => {
        changeTodoStatus(e.target.dataset.id)
    }
    return (
        <li data-id={todo.id} className={todo.status === 'on' ? 'on' : 'off'} onClick={toggleItme}>{todo.name}</li> 
    )
}