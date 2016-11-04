// Dependencies:
import {combineReducers} from 'redux';

// Imports:
import User__reducer__user from './User__reducer__user';
import User__reducer__getUser from './User__reducer__getUser';

const User__reducers = combineReducers({
  connectedUsers: User__reducer__user,
  userObj: User__reducer__getUser
});

export default User__reducers;