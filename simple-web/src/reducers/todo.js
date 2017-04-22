import {
  TODO_CREATE,
  TODO_TOGGLE_COMPLETE
} from '../actions/todo';
import {v4 as uuid} from 'uuid';


const INITIAL_STATE = [

];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_CREATE:
      return [...state, {id: uuid(), text: action.payload.text}]
    case TODO_TOGGLE_COMPLETE:
      return state.map(todo => {
        if(action.payload.todoId === todo.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    default:
      return state
  }
}
