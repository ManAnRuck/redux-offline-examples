import React, { Component } from 'react';
import { connect } from "react-redux";

import TodoCreate from "./TodoCreate"
import TodoItem from "./TodoItem"

import { fetchTodos } from '../actions/todo';

import { allTodoesQuery } from '../apollo/queries';

class TodoList extends Component {

  componentWillMount() {
    this.props.fetchTodos({query: allTodoesQuery, fetchPolicy: 'network-only'});
  }

  render () {
    const todos = this.props.todos;
    return (
      <div>
        <h1>TodoList</h1>
        <TodoCreate />
        <ul className="collection">
          {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            )
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log("state", state)
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, { fetchTodos })(TodoList);
