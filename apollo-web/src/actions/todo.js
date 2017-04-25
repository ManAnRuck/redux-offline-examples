import { v4 as generateUid } from 'uuid';

export const TODO_CREATE = "TODO_CREATE";
export const TODO_CREATE_COMMIT = "TODO_CREATE_COMMIT";

export const TODO_CHANGE_COMPLETE = "TODO_CHANGE_COMPLETE";
export const TODO_CHANGE_COMPLETE_COMMIT = "TODO_CHANGE_COMPLETE_COMMIT";

export const TODO_FETCH_ALL = "TODO_FETCH_ALL";
export const TODO_FETCH_ALL_COMMIT = "TODO_FETCH_ALL_COMMIT";

export const TODO_DELETE = "TODO_DELETE";
export const TODO_DELETE_COMMIT = "TODO_DELETE_COMMIT";



const ROOT_URL = 'http://localhost:3004';

export const fetchTodos = () => {
  return {
    type: TODO_FETCH_ALL,
    payload: [],
    meta: {
      offline: {
        // the network action to execute:
        effect: { url: `${ROOT_URL}/todos`, method: 'GET' },
        // action to dispatch when effect succeeds:
        commit: { type: TODO_FETCH_ALL_COMMIT },
      }
    }
  }
}

export const createTodo = ({text}) => {
  const uid = generateUid();
  return {
    type: TODO_CREATE,
    payload: { id: uid, text, complete: false, localId: uid },
    meta: {
      offline: {
        // the network action to execute:
        effect: { url: `${ROOT_URL}/todos`, method: 'POST', body: JSON.stringify( {text, complete: false} ) },
        // action to dispatch when effect succeeds:
        commit: { type: TODO_CREATE_COMMIT, meta: { localId: uid } },
      }
    }
  }
}

export const changeComplete = ({todoId, complete}) => {
  return {
    type: TODO_CHANGE_COMPLETE,
    payload: { id: todoId, complete},
    meta: {
      offline: {
        effect: { url: `${ROOT_URL}/todos/${todoId}`, method: 'PATCH', body: JSON.stringify( {complete} )},
        commit: { type: TODO_CHANGE_COMPLETE_COMMIT },
      }
    }
  }
}

export const deleteTodo = ({todoId}) => {
  return {
    type: TODO_DELETE,
    payload: { id: todoId },
    meta: {
      offline: {
        effect: { url: `${ROOT_URL}/todos/${todoId}`, method: 'DELETE' },
        commit: { type: TODO_DELETE_COMMIT },
      }
    }
  }
}
