import React, { Suspense } from 'react';
import { ToastProvider } from 'react-toast-notifications';

import Loader from '~components/Loader';

import Routes from './components/Routes';

export default function App() {
  return (
    <ToastProvider>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </ToastProvider>
  );
}
