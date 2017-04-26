import React from 'react';
import { connect } from 'react-redux';
import { gql } from 'react-apollo';

const changeCompleteMutation = gql`
  mutation UpdateTodo($complete: Boolean!, $id: ID!)
  {
    updateTodo(complete: $complete, id: $id) {
      id
      text
      complete
    }
  }
`;

const deleteTodoMutation = gql`
  mutation DeleteTodo($id: ID!)
  {
    deleteTodo(id: $id) {
      id
      text
      complete
    }
  }
`;

import { changeComplete, deleteTodo } from '../actions/todo';

const TodoItem = ({todo, changeComplete, deleteTodo}) => {
  return (
    <li className="collection-item">
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        checked={todo.complete}
        onChange={() => changeComplete({mutation: changeCompleteMutation, variables: {id: todo.id, complete: !todo.complete}})} />

      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>

       <i className="material-icons right-align" onClick={() => deleteTodo({ mutation: deleteTodoMutation, variables: { id: todo.id }  })}>delete</i>
    </li>
  )
}

export default connect(null, { changeComplete, deleteTodo })(TodoItem);
