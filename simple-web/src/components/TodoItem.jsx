import React from 'react';
import { connect } from 'react-redux';

import { changeComplete, deleteTodo } from '../actions/todo';

const TodoItem = ({todo, changeComplete, deleteTodo}) => {
  return (
    <li className="collection-item">
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        checked={todo.complete}
        onChange={() => changeComplete({todoId: todo.id, complete: !todo.complete})} />

      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
      
       <i className="material-icons right-align" onClick={() => deleteTodo({ todoId: todo.id })}>delete</i>
    </li>
  )
}

export default connect(null, { changeComplete, deleteTodo })(TodoItem);
