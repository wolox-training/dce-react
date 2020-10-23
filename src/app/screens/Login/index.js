import React, { useEffect } from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';

import useAPI from '~hooks/useAPI';
import Loader from '~components/Loader';
import wolox from '~assets/logos/wolox.png';
import PublicLayout from '~components/PublicLayout';

import Form from './components/Form';
import styles from './styles.module.scss';

export default function Login({ history }) {
  const { addToast } = useToasts();
  const [{ isLoading, isError, response }, doFetch] = useAPI({
    url: '/users',
    method: 'POST'
  });

  useEffect(() => {
    if (Object.keys(response).length > 0) {
      if (isError) {
        addToast(response, { appearance: 'error' });
      } else {
        console.log('se logueo con exito');
      }
    }
  }, [addToast, isError, response, history]);

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
      <button
        type="button"
        className="m-bottom-3 button-secondary line"
        onClick={() => {
          history.push('/sign-up');
        }}
      >
        {i18next.t('Common:buttonSignUp')}
      </button>
    </PublicLayout>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
