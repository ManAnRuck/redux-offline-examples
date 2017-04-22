
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NO_ACTION':
      return action.payload
    default:
      return state
  }
}
