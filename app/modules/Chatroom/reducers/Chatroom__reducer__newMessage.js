import {NEW_MESSAGE} from '../Chatroom__types.js';

const initialState = [
  {
    username: "Bob",
    message: "Has anyone seen my marbles?",
  },
  {
    username: "Anonymous",
    message: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
  }
];

const Chatroom__reducer__newMessage = (state = initialState, action) => {
  switch(action.type) {
    case NEW_MESSAGE:
      return state.concat([action.payload]);
    default:
      return state;
  };
};

export default Chatroom__reducer__newMessage;