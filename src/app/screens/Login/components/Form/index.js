import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import PropTypes from 'prop-types';

import TextField from '~components/TextField';
import { AUTH_FIELDS } from '~constants/fields';
import { emailValidator, passwordValidator } from '~utils/inputValidators';

export default function Form({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form name="login" onSubmit={handleSubmit(onSubmit)} className="m-bottom-6">
      <TextField
        type="text"
        name={AUTH_FIELDS.email}
        customRef={register(emailValidator)}
        title={i18next.t('Common:inputEmail')}
        error={errors[AUTH_FIELDS.email]}
        data-testid="email"
      />
      <TextField
        type="password"
        name={AUTH_FIELDS.password}
        customRef={register(passwordValidator)}
        title={i18next.t('Common:inputPassword')}
        error={errors[AUTH_FIELDS.password]}
        data-testid="password"
      />
      <button type="submit" className="button-primary m-top-1">
        {i18next.t('Common:buttonLogin')}
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func
};
