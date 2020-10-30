import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export default function Description({ title, text }) {
  return (
    <div className="m-bottom-5">
      <p className={styles.title}>{title}:</p>
      <p className={`m-left-2 ${styles.text}`}>{text}</p>
    </div>
  );
}

Description.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};
