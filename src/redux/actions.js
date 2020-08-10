import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';

export const addTodo = (todo) => (
    {
        type: ADD_TODO,
        payload: todo
    }
)

export const updateTodo = (id, data) => (
    {
        type: UPDATE_TODO,
        payload: {
            id,
            data
        }
    }
)

export const deleteTodo = (id) => (
    {
        type: DELETE_TODO,
        payload: id
    }
)
