import {GET__USERID} from '../User__types.js';

const User__reducer__getUserId = (state = "", action) => {
  switch(action.type) {
    case GET__USERID:
      return action.payload;
    default:
      return state;
  };
};

export default User__reducer__getUserId;