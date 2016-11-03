// Dependencies:
import {combineReducers} from 'redux';

// Imports:
import User__reducer__addUser from './User__reducer__addUser';
import User__reducer__getUserId from './User__reducer__getUserId';
import User__reducer__setUsername from './User__reducer__setUsername.js';

const User__reducers = combineReducers({
  connectedUsers: User__reducer__addUser,
  userId: User__reducer__getUserId,
  username: User__reducer__setUsername
});

export default User__reducers;