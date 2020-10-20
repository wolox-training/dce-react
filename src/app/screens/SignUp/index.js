import React from 'react';

import wolox from '../../assets/logos/wolox.png';

import Form from './components/Form';
import styles from './styles.module.scss';

export default function SignUp() {
  return (
    <div className={styles.container}>
      <img src={wolox} alt="wolox" className={styles.image} />
      <Form />
      <hr className={`m-top-3 m-bottom-3 ${styles.line}`} />
      <button type="button" className="button-secondary">
        Login
      </button>
    </div>
  );
}
