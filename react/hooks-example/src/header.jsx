import React, {useContext} from 'react';
import {TodoContext} from './App'

export default () => {
    const {todos} = useContext(TodoContext);
    return (
        <div>
            할일이 {todos.filter(v => v.status === 'on').length } 건 있습니다
        </div>
    )
}