import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import PropTypes from 'prop-types';

import { AUTH_FIELDS } from '~constants';
import { emailValidator, nameValidator, passwordValidator } from '~utils/inputValidators';
import TextField from '~components/TextField';

export default function Form({ onSubmit }) {
  const { register, handleSubmit, getValues, errors } = useForm();

  return (
    <form name="signup" onSubmit={handleSubmit(onSubmit)} className="m-bottom-6">
      <TextField
        type="text"
        name={AUTH_FIELDS.firstName}
        ref={register(nameValidator)}
        title={i18next.t('Common:inputName')}
        error={errors[AUTH_FIELDS.firstName]}
        data-testid="firstName"
      />
      <TextField
        type="text"
        name={AUTH_FIELDS.lastName}
        ref={register(nameValidator)}
        title={i18next.t('Common:inputLastName')}
        error={errors[AUTH_FIELDS.lastName]}
        data-testid="lastName"
      />
      <TextField
        type="text"
        name={AUTH_FIELDS.email}
        ref={register(emailValidator)}
        title={i18next.t('Common:inputEmail')}
        error={errors[AUTH_FIELDS.email]}
        data-testid="email"
      />
      <TextField
        type="password"
        name={AUTH_FIELDS.password}
        ref={register(passwordValidator)}
        title={i18next.t('Common:inputPassword')}
        error={errors[AUTH_FIELDS.password]}
        data-testid="password"
      />
      <TextField
        type="password"
        name={AUTH_FIELDS.confirmPassword}
        ref={register({
          required: i18next.t('Validators:required'),
          validate: {
            matchesPreviousPassword: value => {
              const { password } = getValues();
              return password === value || i18next.t('Validators:confirmPassword');
            }
          }
        })}
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
