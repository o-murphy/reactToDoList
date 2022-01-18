import React from "react";
import './todo-list-item.css'


const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <span className='todo-list-item'>
            <span
                className='todo-list-item-label'
                style={style}>
                {label}
            </span>
            <button type='button' className='btn btn-outline-success btn-sm float-end'>
                <i className="fas fa-exclamation"/>
            </button>
            <button type='button' className='btn btn-outline-danger btn-sm float-end'>
                <i className="fas fa-trash"/>
            </button>
        </span>
    )
}

export default TodoListItem