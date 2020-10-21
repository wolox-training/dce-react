import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import i18next from 'i18next';

import TextField from '~components/TextField';
import Loader from '~components/Loader';
import useAPI from '~hooks/useAPI';
import { signUpSchema } from '~utils/yupvalidators';

export default function Form() {
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
        title={i18next.t('Common:inputName')}
        error={errors.firstName}
      />
      <TextField
        type="text"
        name="lastName"
        ref={register}
        title={i18next.t('Common:inputLastName')}
        error={errors.lastName}
      />
      <TextField
        type="text"
        name="email"
        ref={register}
        title={i18next.t('Common:inputEmail')}
        error={errors.email}
      />
      <TextField
        type="password"
        name="password"
        ref={register}
        title={i18next.t('Common:inputPassword')}
        error={errors.password}
      />
      <TextField
        type="password"
        name="confirmPassword"
        ref={register}
        title={i18next.t('Common:inputConfirmPassword')}
        error={errors.confirmPassword}
      />
      <button type="submit" className="button-primary m-top-1">
        {i18next.t('Common:buttonSignUp')}
      </button>
      {isLoading && <Loader />}
    </form>
  );
}
