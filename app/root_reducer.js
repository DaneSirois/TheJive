import { combineReducers } from 'redux';

// Guide__module:
import Chatroom__reducer from './modules/Chatroom/reducers/index.js';

const root_reducer = combineReducers({
  // Chatroom: Chatroom__reducer,
});

export default root_reducer;