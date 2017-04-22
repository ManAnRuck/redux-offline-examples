import React from 'react';
import { connect } from 'react-redux';

import { toggleStatus } from '../actions/todo';

const TodoItem = ({todo, toggleStatus}) => {
  return (
    <li className="collection-item">
      <input type="checkbox" id={`todo-${todo.id}`} checked={todo.complete} onChange={() => toggleStatus({todoId: todo.id})} /> <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
    </li>
  )
}

export default connect(null, { toggleStatus })(TodoItem);
