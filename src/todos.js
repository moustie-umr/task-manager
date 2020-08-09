import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, changeTodoStatus } from './redux/actions';
import TodoListItem from './components/todoListItem'
import AddTodo from './components/addTodo'
import { TodoStateReducer } from './redux/reducers';

class Todos extends Component {
    constructor(props) {
        super(props);
    }

    onAddItem = (text) => {
        // get last id
        const [lastItem] = this.props.todos.slice(-1);
        console.log(lastItem)

        this.props.addTodo({
            id: lastItem ? lastItem.id + 1 : 1,
            text,
            completed: false,
        });
    }

    render() {
        const { todos } = this.props; // todos will automatically be here
        // console.log(todos);
        return (
            <div>
                <AddTodo onAddItem={this.onAddItem} />
                <ul>
                    {todos.map((item, index) => (
                        <TodoListItem
                            key={index}
                            todo={item}
                            onDelete={this.props.deleteTodo}
                            onStatusChange={this.props.changeTodoStatus}
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

export default connect(mapStateToProps, { addTodo, deleteTodo, changeTodoStatus })(Todos);