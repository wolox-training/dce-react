import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { loadStorage } from '~utils/storage';
import ROUTES from '~constants/routes';

export default function CustomRoute({ component: Component, path, privateRoute = false, exact }) {
  const token = loadStorage('accessToken');
  const conditional = privateRoute === !!token;

  return (
    <Route
      exact={exact}
      render={props => (conditional ? <Component {...props} /> : <Redirect to={ROUTES.base} />)}
      path={path}
    />
  );
}

CustomRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  privateRoute: PropTypes.bool
};
