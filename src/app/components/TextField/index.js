import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './styles.module.scss';

function TextField({ title, inputVariant, error, customRef, ...rest }) {
  return (
    <div className={styles.textfieldContainer}>
      <label className={clsx('row', styles.title)}> {title} </label>
      <input
        ref={customRef}
        className={clsx('full-width', styles.textField, inputVariant, { 'input-error': !!error })}
        {...rest}
      />
      <label className={clsx('text-error row', styles.error, { hidden: !error })}>{error?.message}</label>
    </div>
  );
}

TextField.propTypes = {
  customRef: PropTypes.func,
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  inputVariant: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};

export default TextField;
