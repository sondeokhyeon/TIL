import React from 'react'
import TodoStore from './TodoStore'
import List from "./List.jsx"
import Header from "./header.jsx"
import Form from "./form.jsx"

export default () => {
    return (
        <TodoStore>
            <h1>Todo App</h1>
            <Header/>
            <Form />
            <List />
        </TodoStore>
    )
}