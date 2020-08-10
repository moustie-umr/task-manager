import React from 'react';

const TodoListItem = ({ todo, onDelete, onStatusChange }) => {

    const { id, text, completed } = todo;
    // todos item list
    return (
        <li >
            <input type="checkbox" checked={completed} onChange={() => onStatusChange(id, { completed: !completed })} />

            <input type="text" placeholder='task' value={text} onChange={(e) => onStatusChange(id, { text: e.target.value })} />

            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
}

export default TodoListItem;
