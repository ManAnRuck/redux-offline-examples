import React from 'react';
import { connect } from "react-redux";

import TodoCreate from "./TodoCreate"
import TodoItem from "./TodoItem"

const TodoList = (props) => {
  return (
    <div>
      <h1>TodoList</h1>
      <TodoCreate />
      <ul className="collection">
        {props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          )
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(TodoList);
