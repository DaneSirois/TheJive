import {ADD_USER, UPDATE_USERNAME} from '../User__types.js';

const User__reducer__user = (state = [], action) => {
  switch(action.type) {
    case ADD_USER:
      return state.concat([action.payload]);
    case UPDATE_USERNAME:
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return Object.assign({}, user, { username: action.payload.username });
        }
        return user;
      });
    default:
      return state;
  };
};

export default User__reducer__user;