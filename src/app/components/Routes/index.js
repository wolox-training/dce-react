import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ROUTES from '~constants/routes';
import { loadStorage } from '~utils/storage';

import CustomRoute from './components/CustomRoute';

const SignUp = lazy(() => import('~screens/SignUp'));
const Login = lazy(() => import('~screens/Login'));
const Home = lazy(() => import('~screens/Home'));

function Routes() {
  const token = loadStorage('accessToken');

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={ROUTES.base}
          render={props => (token ? <Home {...props} /> : <Login {...props} />)}
        />
        <CustomRoute exact path={ROUTES.signUp} component={SignUp} />
        <Redirect to={ROUTES.base} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
