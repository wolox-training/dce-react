import React from 'react';
import Spinner from 'react-spinkit';

import styles from './styles.module.scss';

export default function Loader() {
  return (
    <div className={styles.container}>
      <Spinner name="ball-scale-multiple" color="green" fadeIn="none" className={styles.loader} />
    </div>
  );
}
