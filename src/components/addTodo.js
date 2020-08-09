import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from '../redux/actions'

function AddTodo({ onAddItem }) {
    const [value, setValue] = useState('');

    return (
        <div>
            <input type="text" onChange={(e) => setValue(e.target.value)} value={value} placeholder="You text here" />
            <button onClick={() => {
                onAddItem(value);
            }} type="button"> Add Item</button>
        </div>
    )
}


export default AddTodo;