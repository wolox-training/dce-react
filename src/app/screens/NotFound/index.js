import React from 'react';
import i18next from 'i18next';

import BackButton from '~components/BackButton';

import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <div className={`row middle center ${styles.container}`}>
      <BackButton />
      <p className={styles.text}>{i18next.t('NotFound:message')}</p>
    </div>
  );
}
