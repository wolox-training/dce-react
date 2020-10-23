import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const SignUp = lazy(() => import('~screens/SignUp'));
const Login = lazy(() => import('~screens/Login'));

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/sign-up" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
