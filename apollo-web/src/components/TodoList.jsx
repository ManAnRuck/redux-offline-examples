import React, { Component } from 'react';
import { connect } from "react-redux";

import TodoCreate from "./TodoCreate"
import TodoItem from "./TodoItem"

import { fetchTodos } from '../actions/todo';

class TodoList extends Component {

  componentWillMount() {
    this.props.fetchTodos();
  }

  render () {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoCreate />
        <ul className="collection">
          {this.props.todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            )
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, { fetchTodos })(TodoList);
