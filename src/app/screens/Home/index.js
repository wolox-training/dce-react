import clsx from 'clsx';
import React from 'react';

import Navbar from '~components/Navbar';

import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={clsx('column', styles.container)}>
      <Navbar />
    </div>
  );
}
