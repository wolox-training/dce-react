import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import { removeStorage } from '~utils/storage';

import wolox from '../../assets/logos/wolox.png';

import styles from './styles.module.scss';

export default function Navbar() {
  const history = useHistory();

  const handleSignOut = () => {
    console.log('cerro session');
    removeStorage('accessToken');
    history.push('/login');
  };

  return (
    <div className={styles.navbar}>
      <div className={clsx('row space-between middle', styles.content)}>
        <img src={wolox} alt="wolox" className="" />
        <button className={styles.logoutButton} type="button" onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </div>
  );
}
