import {UPDATE_USERNAME} from '../User__types.js';

const User__action__updateUsername = (username) => ({
  type: `server/${UPDATE_USERNAME}`,
  payload: username
});

export default User__action__updateUsername;