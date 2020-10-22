import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import i18next from 'i18next';
import PropTypes from 'prop-types';

import TextField from '~components/TextField';
import { signUpSchema } from '~utils/yupvalidators';

export default function Form({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(signUpSchema) });

  return (
    <form name="signup" onSubmit={handleSubmit(onSubmit)} className="column m-bottom-6">
      <TextField
        type="text"
        name="firstName"
        ref={register}
        title={i18next.t('Common:inputName')}
        error={errors.firstName}
        data-testid="firstName"
      />
      <TextField
        type="text"
        name="lastName"
        ref={register}
        title={i18next.t('Common:inputLastName')}
        error={errors.lastName}
        data-testid="lastName"
      />
      <TextField
        type="text"
        name="email"
        ref={register}
        title={i18next.t('Common:inputEmail')}
        error={errors.email}
        data-testid="email"
      />
      <TextField
        type="password"
        name="password"
        ref={register}
        title={i18next.t('Common:inputPassword')}
        error={errors.password}
        data-testid="password"
      />
      <TextField
        type="password"
        name="confirmPassword"
        ref={register}
        title={i18next.t('Common:inputConfirmPassword')}
        error={errors.confirmPassword}
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
