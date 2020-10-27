import React, { useEffect } from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import clsx from 'clsx';

import useAPI from '~hooks/useAPI';
import Loader from '~components/Loader';
import PublicLayout from '~components/PublicLayout';
import { ENDPOINTS } from '~constants/api';
import { saveStorage } from '~utils/storage';

import wolox from '../../assets/logos/wolox.png';

import Form from './components/Form';
import styles from './styles.module.scss';

export default function Login({ history }) {
  const { addToast } = useToasts();
  const [{ isLoading, isError, response }, doFetch] = useAPI({
    url: ENDPOINTS.login,
    method: 'POST'
  });

  useEffect(() => {
    if (Object.keys(response).length > 0) {
      if (isError) {
        addToast(response, { appearance: 'error' });
      } else {
        saveStorage(response.accessToken, 'accessToken');
        history.push('/home');
      }
    }
  }, [addToast, history, isError, response]);

  const onSubmit = data => {
    doFetch({
      data: {
        session: {
          ...data
        }
      }
    });
  };

  return (
    <PublicLayout>
      {isLoading && <Loader />}
      <img src={wolox} alt="wolox" className={clsx('row', styles.image)} />
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
