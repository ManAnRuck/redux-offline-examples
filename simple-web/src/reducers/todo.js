import {
  TODO_CREATE,
  TODO_CREATE_COMMIT,
  TODO_CHANGE_COMPLETE,
  TODO_CHANGE_COMPLETE_COMMIT,
  TODO_FETCH_ALL,
  TODO_FETCH_ALL_COMMIT,
} from '../actions/todo';


const INITIAL_STATE = [

];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_FETCH_ALL:
      return action.payload
    case TODO_FETCH_ALL_COMMIT:
      return action.payload

    case TODO_CREATE:
      return [...state, action.payload]
    case TODO_CREATE_COMMIT:
      return state.map(todo => {
        if(action.meta.localId === todo.id) {
          return {...action.payload}
        }
        return todo
      })

    case TODO_CHANGE_COMPLETE:
      return state.map(todo => {
        if(action.payload.id === todo.id) {
          return {...todo, complete: action.payload.complete}
        }
        return todo
      })
    case TODO_CHANGE_COMPLETE_COMMIT:
      return [...state];

    default:
      return state
  }
}
