// Dependencies:
import {combineReducers} from 'redux';

// Imports:
import Chatroom__reducer__username from './Chatroom__reducer__username.js';
import Chatroom__reducer__messages from './Chatroom__reducer__messages.js';

const Chatroom__reducers = combineReducers({
  username: Chatroom__reducer__username,
  messages: Chatroom__reducer__messages
});

export default Chatroom__reducers;