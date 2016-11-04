import {GET_USER} from '../User__types.js';

const User__reducer__getUser = (state = {}, action) => {
  switch(action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  };
};

export default User__reducer__getUser;