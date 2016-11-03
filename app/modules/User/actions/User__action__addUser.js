import {ADD_USER} from '../User__types.js';

const User__action__addUser = (username) => ({
  type: `server/${ADD_USER}`,
  payload: { username }
});

export default User__action__addUser;