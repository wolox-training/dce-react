import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import { clearStorage } from '~utils/storage';
import ROUTES from '~constants/routes';
import wolox from '~assets/logos/wolox.png';

import styles from './styles.module.scss';

export default function Navbar() {
  const history = useHistory();

  const handleSignOut = () => {
    clearStorage();
    history.push(ROUTES.base);
    history.go();
  };

  return (
    <div className={styles.container}>
      <div className={clsx('row space-between middle', styles.content)}>
        <img src={wolox} alt="wolox" className="" />
        <button className={styles.logoutButton} type="button" onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </div>
  );
}
