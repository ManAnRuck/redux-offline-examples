export const TODO_CREATE = "TODO_CREATE";
export const TODO_TOGGLE_COMPLETE = "TODO_TOGGLE_COMPLETE";

export const createTodo = ({text}) => {
  return {
    type: TODO_CREATE,
    payload: { text }
  }
}

export const toggleStatus = ({todoId}) => {
  return {
    type: TODO_TOGGLE_COMPLETE,
    payload: { todoId }
  }
}
