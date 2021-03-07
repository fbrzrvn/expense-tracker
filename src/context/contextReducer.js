//? Reducer => a function that takes in the old state, and an action => new state..
import { CREATE, DELETE } from '../constants/actionTypes';

const contextReducer = (state, action) => {
  switch(action.type) {
    case CREATE:
      return [action.payload, ...state];
    case DELETE:
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
}

export default contextReducer;
