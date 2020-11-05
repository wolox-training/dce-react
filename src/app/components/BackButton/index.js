import React from 'react';
import i18next from 'i18next';
import { useHistory } from 'react-router-dom';

import backArrow from '~assets/images/back-arrow.png';

import styles from './styles.module.scss';

export default function BackButton() {
  const history = useHistory();

  return (
    <div className={`row middle ${styles.goBack}`} onClick={() => history.goBack()}>
      <img src={backArrow} alt="back-arrow" className="m-right-2" />
      <p className={styles.goBackText}>{i18next.t('Common:buttonBack')}</p>
    </div>
  );
}
