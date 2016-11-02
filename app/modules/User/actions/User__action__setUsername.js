import {SET_USERNAME} from '../User__types.js';

const User__action__setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username
});

export default User__action__setUsername;