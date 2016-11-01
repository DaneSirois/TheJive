import {SEND_MESSAGE} from '../Chatroom__types.js';

const initialState = [
  {
    username: "Bob",
    content: "Has anyone seen my marbles?",
  },
  {
    username: "Anonymous",
    content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
  }
];

const Chatroom__reducer__messages = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      return state.concat([action.payload]);
    default:
      return state;
  };
};

export default Chatroom__reducer__messages;
