import React, {useContext} from "react";
import {TodoContext} from './TodoStore'
import Item  from './Item'

const List = () => {

    const {todos, loading} = useContext(TodoContext);

    let todoList = <div>loading....</div>    
    if(loading) todoList = todos.map((todo) => <Item key={todo.id} todo={todo}/>)
    return (
        <ul>
            {todoList }
        </ul>
    )
}
export default List