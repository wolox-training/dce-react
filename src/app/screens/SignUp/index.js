import React, { useEffect, useCallback } from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import clsx from 'clsx';

import wolox from '~assets/logos/wolox.png';
import useAPI from '~hooks/useAPI';
import Loader from '~components/Loader';
import PublicLayoutWrapper from '~components/PublicLayoutWrapper';
import { ENDPOINTS } from '~constants/api';
import ROUTES from '~constants/routes';

import Form from './components/Form';
import styles from './styles.module.scss';

export default function SignUp({ history }) {
  const { addToast } = useToasts();
  const [{ isLoading, isError, response }, doFetch] = useAPI(
    {
      url: ENDPOINTS.signUp,
      method: 'POST'
    },
    null
  );

  const handleLogin = useCallback(() => {
    history.push(ROUTES.base);
  }, [history]);

  useEffect(() => {
    if (response) {
      if (isError) {
        addToast(response, { appearance: 'error' });
      } else {
        handleLogin();
      }
    }
  }, [addToast, isError, response, history, handleLogin]);

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
    <PublicLayoutWrapper>
      {isLoading && <Loader />}
      <img src={wolox} alt="wolox" className={clsx('row', styles.image)} />
      <Form onSubmit={onSubmit} />
      <button type="button" className="m-bottom-3 button-secondary line" onClick={handleLogin}>
        {i18next.t('Common:buttonLogin')}
      </button>
    </PublicLayoutWrapper>
  );
}

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
