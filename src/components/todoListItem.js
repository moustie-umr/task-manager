import React from 'react';

const TodoListItem = ({ todo }) => {

    const { id, text, completed } = todo;

    return (
        <li >
            <input type="checkbox" checked={completed} onChange={() => {}}/>

            <input type="text" placeholder='task' value={text} onChange={() => {}}/>

            <button>Delete</button>
        </li>
    )
}

export default TodoListItem;