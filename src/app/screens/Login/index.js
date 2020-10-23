import React from 'react';

import wolox from '~assets/logos/wolox.png';
import PublicLayout from '~components/PublicLayout';

import styles from './styles.module.scss';

export default function Login() {
  return (
    <PublicLayout>
      <img src={wolox} alt="wolox" className={styles.image} />
      <div>Hola Login</div>
    </PublicLayout>
  );
}
