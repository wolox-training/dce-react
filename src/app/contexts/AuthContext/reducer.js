import { saveStorage, removeStorage } from '~utils/storage';
import { AUTH_ACTIONS } from '~constants/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.activate:
      saveStorage(action.payload.accessToken);
      return {
        ...state,
        auth: action.payload
      };
    case AUTH_ACTIONS.remove:
      removeStorage();
      return {
        ...state,
        auth: { accessToken: '' }
      };
    default:
      return state;
  }
};

export default reducer;