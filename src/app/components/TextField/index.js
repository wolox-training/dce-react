import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './styles.module.scss';

function TextField({ title, inputVariant, error, customRef, ...rest }) {
  return (
    <div className={styles.container}>
      <label className={`row ${styles.title}`}> {title} </label>
      <input
        ref={customRef}
        className={clsx('full-width', styles.textField, inputVariant, { 'input-error': !!error })}
        {...rest}
      />
      <label role="alert" className={clsx('text-error row', styles.error, { hidden: !error })}>
        {error?.message}
      </label>
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

export default memo(
  TextField,
  (prevProps, props) =>
    prevProps.title === props.title && prevProps.error === props.error && prevProps.name === props.name
);
