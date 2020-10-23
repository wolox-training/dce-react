import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const TextField = forwardRef(({ title, inputVariant, error, ...rest }, ref) => (
  <div className={styles.textfieldContainer}>
    <label className={styles.title}> {title} </label>
    <input
      ref={ref}
      className={classNames('full-width', styles.textField, inputVariant, { 'input-error': !!error })}
      {...rest}
    />
    <label className={classNames('text-error', styles.error, { hidden: !error })}>{error?.message}</label>
  </div>
));

TextField.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  inputVariant: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};

export default TextField;
