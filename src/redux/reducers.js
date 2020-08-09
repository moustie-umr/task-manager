import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actionTypes'

const initialTodoState = {
    data: [{
        id: 1,
        text: 'text',
        completed: false
    }]
}

export const TodoStateReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            let todos = [...state.data]
            todos.push(action.payload)
            return (
                {
                    ...state,
                    data: todos
                }
            )
        }
        
        default: {
            return state
        }
    }
}
