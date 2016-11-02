import {SUBMIT_MESSAGE} from '../Chatroom__types.js';

const Chatroom__action__submitMessage = (username, message) => {
  return {
    type: SUBMIT_MESSAGE,
    payload: { username, message }
  };
}

export default Chatroom__action__submitMessage;