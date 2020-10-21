import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const TextField = forwardRef(({ title, inputVariant, error, ...rest }, ref) => (
  <div className={styles['textfield-container']}>
    <label className={styles.title}> {title} </label>
    <input
      ref={ref}
      className={`full-width ${!!error && 'input-error'} ${styles['text-field']} ${inputVariant}`}
      {...rest}
    />
    <label className={`text-error ${styles.error} ${!error && 'hidden'}`}>{error?.message}</label>
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
