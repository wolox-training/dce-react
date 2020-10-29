import React from 'react';

import Navbar from '~components/Navbar';

import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={`column ${styles.container}`}>
      <Navbar />
    </div>
  );
}
