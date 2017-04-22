import React from 'react';
import { connect } from 'react-redux';

import { changeComplete } from '../actions/todo';

const TodoItem = ({todo, changeComplete}) => {
  return (
    <li className="collection-item">
      <input type="checkbox" id={`todo-${todo.id}`} checked={todo.complete} onChange={() => changeComplete({todoId: todo.id, complete: !todo.complete})} /> <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
    </li>
  )
}

export default connect(null, { changeComplete })(TodoItem);
