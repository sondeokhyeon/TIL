import React from "react";

const List = ({todos, loading}) => {
    if(!loading) {
        return (
            <div>loading....</div>
        )
    } else {
        const todoList = todos.map( (todo) => <li key={todo.id}>{todo.name}</li> )
        return (
            <ul>
                {todoList}
            </ul>
        )
    }


}
export default List