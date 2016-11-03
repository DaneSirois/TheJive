import {GET_USERID} from '../User__types.js';

const User__reducer__getUserId = (state = "", action) => {
  switch(action.type) {
    case GET_USERID:
      return action.payload;
    default:
      return state;
  };
};

export default User__reducer__getUserId;