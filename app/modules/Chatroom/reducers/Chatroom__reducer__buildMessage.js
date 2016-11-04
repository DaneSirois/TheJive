import {BUILD_MESSAGE, RESET_MESSAGE_STATE} from '../Chatroom__types.js';

const Chatroom__reducer__messages = (state = "", action) => {
  switch(action.type) {
    case BUILD_MESSAGE:
      return action.payload;
    case RESET_MESSAGE_STATE:
      return action.payload;
    default:
      return state;
  };
};

export default Chatroom__reducer__messages;
