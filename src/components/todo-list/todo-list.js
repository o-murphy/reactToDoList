import React from "react";
import TodoListItem from "../todo-list-item";


const TodoList = () => {

    const items = ['1111', '2222']

    return (
        <ul>
            <li><TodoListItem label="Drink Coffee" /></li>
            <li><TodoListItem label="bla bla bla" important /></li>
        </ul>
    )
}

export default TodoList