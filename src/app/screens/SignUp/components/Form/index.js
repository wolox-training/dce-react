import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import PropTypes from 'prop-types';

import TextField from '~components/TextField';
import { AUTH_FIELDS } from '~constants/fields';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  confirmPasswordValidator
} from '~utils/inputValidators';

export default function Form({ onSubmit }) {
  const { register, handleSubmit, getValues, errors } = useForm();
  const { password } = getValues();

  return (
    <form name="signup" onSubmit={handleSubmit(onSubmit)} className="m-bottom-6">
      <TextField
        type="text"
        name={AUTH_FIELDS.firstName}
        customRef={register(nameValidator)}
        title={i18next.t('Common:inputName')}
        error={errors[AUTH_FIELDS.firstName]}
        data-testid="firstName"
      />
      <TextField
        type="text"
        name={AUTH_FIELDS.lastName}
        customRef={register(nameValidator)}
        title={i18next.t('Common:inputLastName')}
        error={errors[AUTH_FIELDS.lastName]}
        data-testid="lastName"
      />
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
      <TextField
        type="password"
        name={AUTH_FIELDS.confirmPassword}
        customRef={register(confirmPasswordValidator(password))}
        title={i18next.t('Common:inputConfirmPassword')}
        error={errors[AUTH_FIELDS.confirmPassword]}
        data-testid="confirmPassword"
      />
      <button type="submit" className="button-primary m-top-1">
        {i18next.t('Common:buttonSignUp')}
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func
};
