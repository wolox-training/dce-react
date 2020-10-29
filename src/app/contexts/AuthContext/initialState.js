import { loadStorage } from '~utils/storage';

const initialState = {
  auth: {
    accessToken: loadStorage(),
    client: loadStorage('client'),
    uid: loadStorage('uid')
  }
};

export default initialState;
