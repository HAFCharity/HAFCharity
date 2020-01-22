import {combineReducers} from 'redux';
import userReducer from './user';
import todoReducer from './todo';

export default combineReducers({
  user: userReducer,
  todos: todoReducer
})
