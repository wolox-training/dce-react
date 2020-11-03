import { loadStorage } from '~utils/storage';

const initialState = {
  auth: {
    accessToken: loadStorage()
  }
};

export default initialState;
