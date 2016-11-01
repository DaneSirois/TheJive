import {SET_USERNAME} from '../Chatroom__types.js';

const Chatroom__reducer__username = (state = "Anonymouse", action) => {
  switch(action.type) {
    case SET_USERNAME:
      return action.payload;
    default:
      return state;
  };
};

export default Chatroom__reducer__username;
