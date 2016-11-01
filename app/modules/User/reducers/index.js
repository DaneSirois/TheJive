// Dependencies:
import {combineReducers} from 'redux';

// Imports:
import User__reducer__username from './User__reducer__username.js';

const User__reducers = combineReducers({
  username: User__reducer__username
});

export default User__reducers;