import { v4 as generateUid } from 'uuid';

import { allTodoesQuery } from "../apollo/queries";

export const TODO_CREATE = "TODO_CREATE";
export const TODO_CREATE_COMMIT = "TODO_CREATE_COMMIT";

export const TODO_CHANGE_COMPLETE = "TODO_CHANGE_COMPLETE";
export const TODO_CHANGE_COMPLETE_COMMIT = "TODO_CHANGE_COMPLETE_COMMIT";

export const TODO_FETCH_ALL = "TODO_FETCH_ALL";
export const TODO_FETCH_ALL_COMMIT = "TODO_FETCH_ALL_COMMIT";

export const TODO_DELETE = "TODO_DELETE";
export const TODO_DELETE_COMMIT = "TODO_DELETE_COMMIT";

export const fetchTodos = ({query, fetchPolicy}) => {
  return {
    type: TODO_FETCH_ALL,
    payload: [],
    meta: {
      offline: {
        // the network action to execute:
        effect: { type: "query", query, fetchPolicy },
        // action to dispatch when effect succeeds:
        commit: { type: TODO_FETCH_ALL_COMMIT },
      }
    }
  }
}

export const createTodo = ({text, complete, mutation}) => {
  const uid = generateUid();
  return {
    type: TODO_CREATE,
    payload: { id: uid, text, complete: false, localId: uid },
    meta: {
      offline: {
        // the network action to execute:
        effect: {type: "mutation", mutation, variables: {text, complete}, refetchQueries: [{query: allTodoesQuery}]},
        // action to dispatch when effect succeeds:
        commit: { type: TODO_CREATE_COMMIT, meta: { localId: uid } },
      }
    }
  }
}

export const changeComplete = ({mutation, variables}) => {
  return {
    type: TODO_CHANGE_COMPLETE,
    payload: { ...variables },
    meta: {
      offline: {
        effect: { type: "mutation", mutation, variables, refetchQueries: [{query: allTodoesQuery}]},
        commit: { type: TODO_CHANGE_COMPLETE_COMMIT },
      }
    }
  }
}

export const deleteTodo = ({mutation, variables}) => {
  return {
    type: TODO_DELETE,
    payload: { ...variables },
    meta: {
      offline: {
        effect: { type: "mutation", mutation, variables, refetchQueries: [{query: allTodoesQuery}]},
        commit: { type: TODO_DELETE_COMMIT },
      }
    }
  }
}
