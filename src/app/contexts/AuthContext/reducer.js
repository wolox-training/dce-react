import { saveStorage, clearStorage } from '~utils/storage';
import { AUTH_ACTIONS } from '~constants/actions';
import { STORAGE_KEYS } from '~constants/storage';

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.activate:
      saveStorage(action.payload.accessToken);
      saveStorage(action.payload.client, STORAGE_KEYS.client);
      saveStorage(action.payload.uid, STORAGE_KEYS.uid);
      return {
        ...state,
        auth: action.payload
      };
    case AUTH_ACTIONS.remove:
      clearStorage();
      return {
        ...state,
        auth: { accessToken: '' }
      };
    default:
      return state;
  }
};

export default reducer;
