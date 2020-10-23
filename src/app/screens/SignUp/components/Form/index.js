import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import TextField from '~components/TextField';
import Loader from '~components/Loader';
import useAPI from '~hooks/useAPI';
import { AUTH_FIELDS } from '~constants/index';
import { emailValidator, nameValidator, passwordValidator } from '~utils/inputValidators';

export default function Form() {
  const { register, handleSubmit, getValues, errors } = useForm();
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
        name={AUTH_FIELDS.firstName}
        ref={register(nameValidator)}
        title={i18next.t('Common:inputName')}
        error={errors[AUTH_FIELDS.firstName]}
      />
      <TextField
        type="text"
        name={AUTH_FIELDS.lastName}
        ref={register(nameValidator)}
        title={i18next.t('Common:inputLastName')}
        error={errors[AUTH_FIELDS.lastName]}
      />
      <TextField
        type="text"
        name={AUTH_FIELDS.email}
        ref={register(emailValidator)}
        title={i18next.t('Common:inputEmail')}
        error={errors[AUTH_FIELDS.email]}
      />
      <TextField
        type="password"
        name={AUTH_FIELDS.password}
        ref={register(passwordValidator)}
        title={i18next.t('Common:inputPassword')}
        error={errors[AUTH_FIELDS.password]}
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
      />
      <button type="submit" className="button-primary m-top-1">
        {i18next.t('Common:buttonSignUp')}
      </button>
      {isLoading && <Loader />}
    </form>
  );
}
