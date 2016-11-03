import {ADD_USERNAME} from '../User__types.js';

const User__action__addUser = (userObj) => ({
  type: ADD_USERNAME,
  payload: userObj
});

export default User__action__addUser;