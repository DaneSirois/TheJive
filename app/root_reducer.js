import {combineReducers} from 'redux';

// Chatroom__module:
import User__reducers from './modules/User/reducers/index.js';
import Chatroom__reducers from './modules/Chatroom/reducers/index.js';

const root_reducer = combineReducers({
  User: User__reducers,
  Chatroom: Chatroom__reducers
});

export default root_reducer;