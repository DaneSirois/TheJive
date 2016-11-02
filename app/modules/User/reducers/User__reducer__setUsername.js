import {SET_USERNAME} from '../User__types.js';

const User__reducer__setUsername = (state = "Anonymous", action) => {
  switch(action.type) {
    case SET_USERNAME:
      return action.payload;
    default:
      return state;
  };
};

export default User__reducer__setUsername;
