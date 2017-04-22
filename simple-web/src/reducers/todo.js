import {
  TODO_CREATE,
  TODO_CHANGE_COMPLETE,
  TODO_FETCH_ALL,
} from '../actions/todo';


const INITIAL_STATE = [

];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_FETCH_ALL:
      return action.payload.data
    case TODO_CREATE:
      return [...state, action.payload.data]
    case TODO_CHANGE_COMPLETE:
      return state.map(todo => {
        if(action.payload.data.id === todo.id) {
          return {...todo, complete: action.payload.data.complete}
        }
        return todo
      })
    default:
      return state
  }
}
