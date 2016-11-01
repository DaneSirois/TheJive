import {SEND_MESSAGE} from '../Chatroom__types.js';

const Chatroom__action__sendMessage = (messageObj) => {
  return {
    type: SEND_MESSAGE,
    payload: messageObj
  };
}

export default Chatroom__action__sendMessage;