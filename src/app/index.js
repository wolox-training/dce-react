import React, { Suspense } from 'react';
import { ToastProvider } from 'react-toast-notifications';

import Routes from './components/Routes';

export default function App() {
  return (
    <ToastProvider>
      <Suspense fallback={<div> Loading </div>}>
        <Routes />
      </Suspense>
    </ToastProvider>
  );
}
