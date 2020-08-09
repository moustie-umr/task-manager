import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, deleteTodo, updateTodo } from './redux/actions'
import TodoListItem from './components/todoListItem'
import AddTodo from './components/addTodo'
import { TodoStateReducer } from './redux/reducers'


class Todos extends Component {

    
    onAddItem = (text) => {
        // Get last id
        const [lastItem] = this.props.todos.slice(-1);
 

        this.props.addTodo({
            id: lastItem ? lastItem.id + 1 : 1,
            text,
            completed: false,
        });
    }

    render() {
        const { todos } = this.props; 
        // Todo form and list will automatically be here
        return (
            <div>
                <AddTodo onAddItem={this.onAddItem} />
                <ul>
                    {todos.map((item, index) => (
                        <TodoListItem
                            key={index}
                            todo={item}
                            onDelete={this.props.deleteTodo}
                            onStatusChange={this.props.updateTodo}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ TodoStateReducer }) => {
    return {
        todos: TodoStateReducer.data,
    };
};

export default connect(mapStateToProps, { addTodo, deleteTodo, updateTodo })(Todos);