export const TODO_CREATE = "TODO_CREATE";

export const createTodo = ({text}) => {
  return {
    type: TODO_CREATE,
    payload: { text }
  }
}
