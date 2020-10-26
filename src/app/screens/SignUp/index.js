import React from 'react';
import i18next from 'i18next';
import clsx from 'clsx';

import wolox from '../../assets/logos/wolox.png';

import Form from './components/Form';
import styles from './styles.module.scss';

export default function SignUp() {
  return (
    <div className={styles.container}>
      <img src={wolox} alt="wolox" className={clsx('row', styles.image)} />
      <Form />
      <button type="button" className={clsx('m-bottom-3 button-secondary', styles.line)}>
        {i18next.t('Common:buttonLogin')}
      </button>
    </div>
  );
}
