import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';

const initialTodoState = {
    data: []
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

        case DELETE_TODO: {
            let todos = [...state.data];
            let itemIndex = todos.findIndex(todo => todo.id === action.payload);

            if (itemIndex > -1) {
                todos.splice(itemIndex, 1);
            }
            return (
                {
                    ...state,
                    data: todos
                }
            )
        }

        case UPDATE_TODO: {
            let todos = [...state.data];
            let itemIndex = todos.findIndex(todo => todo.id === action.payload.id);
            if (itemIndex > -1) {
                todos[itemIndex] = {
                    ...todos[itemIndex],
                    ...action.payload.data
                }
            }
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