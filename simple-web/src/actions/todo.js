import axios from 'axios';

export const TODO_CREATE = "TODO_CREATE";
export const TODO_CHANGE_COMPLETE = "TODO_CHANGE_COMPLETE";
export const TODO_FETCH_ALL = "TODO_FETCH_ALL";

const ROOT_URL = 'http://localhost:3004';

export const fetchTodos = () => {
  const request = axios.get(`${ROOT_URL}/todos`);
  return {
    type: TODO_FETCH_ALL,
    payload: request
  }
}

export const createTodo = ({text}) => {
  const request = axios.post(`${ROOT_URL}/todos`, {text, complete: false});
  return {
    type: TODO_CREATE,
    payload: request
  }
}

export const changeComplete = ({todoId, complete}) => {
  const request = axios.patch(`${ROOT_URL}/todos/${todoId}`, {complete});
  return {
    type: TODO_CHANGE_COMPLETE,
    payload: request
  }
}
