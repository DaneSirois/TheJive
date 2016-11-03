import {BUILD_MESSAGE} from '../Chatroom__types.js';

const Chatroom__reducer__messages = (state = "", action) => {
  switch(action.type) {
    case BUILD_MESSAGE:
      return action.payload;
    default:
      return state;
  };
};

export default Chatroom__reducer__messages;
