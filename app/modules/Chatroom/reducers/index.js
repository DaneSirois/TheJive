// Dependencies:
import {combineReducers} from 'redux';

// Imports:
import Chatroom__reducer__buildMessage from './Chatroom__reducer__buildMessage.js';
import Chatroom__reducer__submitMessage from './Chatroom__reducer__submitMessage.js';

const Chatroom__reducers = combineReducers({
  builtMessage: Chatroom__reducer__buildMessage,
  messages: Chatroom__reducer__submitMessage
});

export default Chatroom__reducers;