// Dependencies:
import {combineReducers} from 'redux';

// Imports:
import Chatroom__reducer__buildMessage from './Chatroom__reducer__buildMessage.js';
import Chatroom__reducer__newMessage from './Chatroom__reducer__newMessage.js';

const Chatroom__reducers = combineReducers({
  builtMessage: Chatroom__reducer__buildMessage,
  messages: Chatroom__reducer__newMessage
});

export default Chatroom__reducers;