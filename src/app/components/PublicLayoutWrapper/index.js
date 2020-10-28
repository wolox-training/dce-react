import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export default function PublicLayoutWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}

PublicLayoutWrapper.propTypes = {
  children: PropTypes.node
};
