import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ROUTES from '~constants/routes';

const SignUp = lazy(() => import('~screens/SignUp'));
const Login = lazy(() => import('~screens/Login'));

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.signUp} component={SignUp} />
        <Route exact path={ROUTES.login} component={Login} />
        <Redirect to={ROUTES.signUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
