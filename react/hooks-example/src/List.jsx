import React, {useContext} from "react";
import {TodoContext} from './App'
import Item  from './Item'

const List = () => {

    const {todos, loading, changeTodoStatus} = useContext(TodoContext);

    let todoList = <div>loading....</div>    
    if(loading) todoList = todos.map((todo) => <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus}/>)
    return (
        <ul>
            {todoList }
        </ul>
    )
}
export default List