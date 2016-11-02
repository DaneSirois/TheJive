import {BUILD_MESSAGE} from '../Chatroom__types.js';

const Chatroom__action__buildMessage = (text) => ({
  type: BUILD_MESSAGE,
  payload: text
});

export default Chatroom__action__buildMessage;