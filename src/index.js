import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { AuthProvider } from './app/contexts/AuthContext';
import App from './app';
import './i18n';
import './scss/application.scss';
import { register } from './serviceWorker';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render once
render();

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render();
  });
}
