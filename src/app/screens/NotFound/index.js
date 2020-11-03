import React from 'react';

import BackButton from '~components/BackButton';

import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <div className={`row middle center ${styles.container}`}>
      <BackButton />
      <p className={styles.text}>Not Found</p>
    </div>
  );
}
