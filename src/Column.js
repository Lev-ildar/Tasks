import React from 'react'
import TodoItem from "./TodoItem";

export default function Column({id, title, todos}) {
    return (
        <div className="col-sm">
            <h2>{title}</h2>
            <div className="input-field">
                <input type="text"/>
                <label>Todo</label>
            </div>
            <ul>
                { todos.map(todo => {
                    return <TodoItem key={todo.id} {...todo}/>
                })}
            </ul>
        </div>
    )
}