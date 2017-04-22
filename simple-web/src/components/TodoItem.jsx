import React from 'react';

export default ({todo}) => {
  return (
    <li className="collection-item">
      <input type="checkbox" id={`todo-${todo.id}`} /> <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
    </li>
  )
}
