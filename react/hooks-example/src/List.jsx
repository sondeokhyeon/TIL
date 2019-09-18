import React from "react";

const List = ({todos}) => {
    const todoList = todos.map( (todo, i) => <li key={i}>{todo}</li> )
    return (
        <ul>
            {todoList}
        </ul>
    )
}
export default List