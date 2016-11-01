// Dependencies:
import {combineReducers} from 'redux';

// Imports:
import Chatroom__reducer__username from './Chatroom__reducer__username.js';

const Chatroom__reducers = combineReducers({
  username: Chatroom__reducer__username,
});

export default Chatroom__reducers;