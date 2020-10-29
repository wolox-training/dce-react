import React from 'react';
import { useHistory } from 'react-router-dom';

import ROUTES from '~constants/routes';
import wolox from '~assets/logos/wolox.png';
import { useAuthDispatch } from '~contexts/AuthContext';
import { AUTH_ACTIONS } from '~constants/actions';

import styles from './styles.module.scss';

export default function Navbar() {
  const history = useHistory();
  const dispatch = useAuthDispatch();

  const handleSignOut = () => {
    history.push(ROUTES.base);
    dispatch({ type: AUTH_ACTIONS.remove });
  };

  return (
    <div className={styles.container}>
      <div className={`row space-between middle ${styles.content}`}>
        <img src={wolox} alt="wolox" className="" />
        <button className={styles.logoutButton} type="button" onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </div>
  );
}
