import React from 'react';

import TodoCreate from "./TodoCreate"
import TodoItem from "./TodoItem"

export default (props) => {
  return (
    <div>
      <h1>TodoList</h1>
      <TodoCreate />
      <ul className="collection">
        <TodoItem text="todo 1" />
      </ul>
    </div>
  )
}
