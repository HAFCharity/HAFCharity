import {ADD_TODO, GET_TODOS} from '../actions/constants';

const todoReducer = (state = [], {type, payload}) => {
    switch (type) {
      case ADD_TODO:
        return [...state, payload];
      case GET_TODOS: 
        return [...payload];
      default:
        return state
    }
}

export default todoReducer;
