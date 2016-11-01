import {SET_USERNAME} from '../Chatroom__types.js';

const Chatroom__action__setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username
  };
}

export default Chatroom__action__setUsername;