import makeStore from '~config/context';

import reducer from './reducer';
import initialState from './initialState';

const [AuthProvider, useAuth, useAuthDispatch] = makeStore(reducer, initialState);

export { AuthProvider, useAuth, useAuthDispatch };
