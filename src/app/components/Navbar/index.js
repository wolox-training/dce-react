import React from 'react';

import wolox from '~assets/logos/wolox.png';
import { useAuthDispatch } from '~contexts/AuthContext';
import { AUTH_ACTIONS } from '~constants/actions';

import styles from './styles.module.scss';

export default function Navbar() {
  const dispatch = useAuthDispatch();

  const handleSignOut = () => {
    dispatch({ type: AUTH_ACTIONS.logOut });
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
