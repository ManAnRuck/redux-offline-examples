import {
  TODO_CREATE
} from '../actions/todo';
import {v4 as uuid} from 'uuid';


const INITIAL_STATE = [

];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_CREATE:
      return [...state, {id: uuid(), text: action.payload.text}]
    default:
      return state
  }
}
