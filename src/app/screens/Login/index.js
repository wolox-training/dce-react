import React, { useEffect, useCallback } from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';

import useAPI from '~hooks/useAPI';
import Loader from '~components/Loader';
import PublicLayoutWrapper from '~components/PublicLayoutWrapper';
import { ENDPOINTS } from '~constants/api';
import ROUTES from '~constants/routes';
import { TOAST_TYPES } from '~constants/notifications';
import { AUTH_ACTIONS } from '~constants/actions';
import wolox from '~assets/logos/wolox.png';
import { useAuthDispatch } from '~contexts/AuthContext';

import Form from './components/Form';
import styles from './styles.module.scss';

export default function Login({ history }) {
  const { addToast } = useToasts();
  const [{ isLoading, isError, response }, doFetch] = useAPI({
    url: ENDPOINTS.login,
    method: 'POST'
  });
  const dispatch = useAuthDispatch();

  const handleSignUp = useCallback(() => {
    history.push(ROUTES.signUp);
  }, [history]);

  useEffect(() => {
    if (response) {
      if (isError) {
        addToast(response.error, { appearance: TOAST_TYPES.error });
      } else {
        dispatch({ type: AUTH_ACTIONS.activate, payload: { accessToken: response.accessToken } });
      }
    }
  }, [addToast, dispatch, isError, response]);

  const onSubmit = data => {
    doFetch({
      data: {
        session: data
      }
    });
  };

  return (
    <PublicLayoutWrapper>
      {isLoading && <Loader />}
      <img src={wolox} alt="wolox" className={`row ${styles.image}`} />
      <Form onSubmit={onSubmit} />
      <button type="button" className="m-bottom-3 button-secondary line" onClick={handleSignUp}>
        {i18next.t('Common:buttonSignUp')}
      </button>
    </PublicLayoutWrapper>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
