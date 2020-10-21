import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import TextField from '~components/TextField';
import useAPI from '~hooks/useAPI';
import { signUpSchema } from '~utils/yupvalidators';

export default function Form() {
  const { t } = useTranslation('common');
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(signUpSchema) });
  const [{ isLoading, isError, response }, doFetch] = useAPI({
    url: '/users',
    method: 'POST'
  });

  console.log(isLoading, isError, response);

  const onSubmit = data => {
    doFetch({
      data: {
        user: {
          ...data,
          locale: 'en'
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="column m-bottom-6">
      <TextField
        type="text"
        name="firstName"
        ref={register}
        title={t('common:inputs.name')}
        error={errors.firstName}
      />
      <TextField
        type="text"
        name="lastName"
        ref={register}
        title={t('common:inputs.lastName')}
        error={errors.lastName}
      />
      <TextField
        type="text"
        name="email"
        ref={register}
        title={t('common:inputs.email')}
        error={errors.email}
      />
      <TextField
        type="password"
        name="password"
        ref={register}
        title={t('common:inputs.password')}
        error={errors.password}
      />
      <TextField
        type="password"
        name="confirmPassword"
        ref={register}
        title={t('common:inputs.confirmPassword')}
        error={errors.confirmPassword}
      />
      <button type="submit" className="button-primary m-top-1">
        Sign Up
      </button>
    </form>
  );
}
