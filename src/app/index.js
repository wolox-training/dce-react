import React, { Suspense } from 'react';

import Routes from './components/Routes';

export default function App() {
  return (
    <Suspense fallback={<div> Loading </div>}>
      <Routes />
    </Suspense>
  );
}
