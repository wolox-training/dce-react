import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from '~contexts/AuthContext';
import ROUTES from '~constants/routes';

import CustomRoute from './components/CustomRoute';

const SignUp = lazy(() => import('~screens/SignUp'));
const Login = lazy(() => import('~screens/Login'));
const Home = lazy(() => import('~screens/Home'));
const BookDetails = lazy(() => import('~screens/BookDetails'));

function Routes() {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={ROUTES.base}
          render={props => (auth.accessToken ? <Home {...props} /> : <Login {...props} />)}
        />
        <CustomRoute exact path={ROUTES.signUp} component={SignUp} />
        <CustomRoute exact privateRoute path={ROUTES.bookDetails} component={BookDetails} />
        <Redirect to={ROUTES.base} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
