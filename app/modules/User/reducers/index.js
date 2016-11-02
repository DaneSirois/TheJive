// Dependencies:
import {combineReducers} from 'redux';

// Imports:
import User__reducer__setUsername from './User__reducer__setUsername.js';

const User__reducers = combineReducers({
  username: User__reducer__setUsername
});




export default User__reducers;