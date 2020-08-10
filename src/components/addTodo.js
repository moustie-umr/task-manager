import React, { useState } from 'react';


function AddTodo({ onAddItem }) {
    const [value, setValue] = useState('');
    // Add new todos form
    return (
        <div>
            <input type="text" onChange={(e) => setValue(e.target.value)} value={value} placeholder="Enter todo here" />
            <button onClick={() => {
                onAddItem(value);
                setValue('')
            }} type="button"> Add Item</button>
        </div>
    )
}


export default AddTodo;