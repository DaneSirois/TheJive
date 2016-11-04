import {RESET_MESSAGE_STATE} from '../Chatroom__types.js';

const Chatroom__action__resetMessageState = (str) => {
  return {
    type: RESET_MESSAGE_STATE,
    payload: str
  };
}

export default Chatroom__action__resetMessageState;