import React from 'react';
import i18next from 'i18next';

import useAPI from '~hooks/useAPI';
import Loader from '~components/Loader';
import PublicLayout from '~components/PublicLayout';
import wolox from '~assets/logos/wolox.png';

import Form from './components/Form';
import styles from './styles.module.scss';

export default function SignUp() {
  const [{ isLoading, isError, response }, doFetch] = useAPI({
    url: '/users',
    method: 'POST'
  });

  console.log(isLoading, isError, response);

  const onSubmit = data => {
    doFetch({
      data: {
        user: {
          ...data,
          locale: 'en'
        }
      }
    });
  };

  return (
    <PublicLayout>
      {isLoading && <Loader />}
      <img src={wolox} alt="wolox" className={styles.image} />
      <Form onSubmit={onSubmit} />
      <button type="button" className={`m-bottom-3 button-secondary ${styles.line}`}>
        {i18next.t('Common:buttonLogin')}
      </button>
    </PublicLayout>
  );
}
