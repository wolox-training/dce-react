import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export default function PublicLayout({ children }) {
  return <div className={styles.publicLayout}>{children}</div>;
}

PublicLayout.propTypes = {
  children: PropTypes.node
};
