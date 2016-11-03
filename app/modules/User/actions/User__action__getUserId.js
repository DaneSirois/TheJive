import {GET_USERID} from '../User__types.js';

const User__action__getUserId = () => ({
  type: `server/${GET_USERID}`
});

export default User__action__getUserId;