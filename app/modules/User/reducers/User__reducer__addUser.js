import {ADD_USER} from '../User__types.js';

const User__reducer__addUser = (state = [], action) => {
  switch(action.type) {
    case ADD_USER:
      return state.concat([action.payload]);
    default:
      return state;
  };
};

export default User__reducer__addUser;