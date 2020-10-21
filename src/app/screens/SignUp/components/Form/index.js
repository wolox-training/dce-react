import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import styles from './styles.module.scss';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`column m-bottom-6 ${styles.form}`}>
      <label className={styles.label}> {i18next.t('Common:inputName')}</label>
      <input type="text" name="firstName" ref={register} className="text-field" />
      <label className={styles.label}> {i18next.t('Common:inputLastName')}</label>
      <input type="text" name="lastName" ref={register} className="text-field" />
      <label className={styles.label}>{i18next.t('Common:inputEmail')}</label>
      <input type="text" name="email" ref={register} className="text-field" />
      <label className={styles.label}>{i18next.t('Common:inputPassword')}</label>
      <input type="password" name="password" ref={register} className="text-field" />
      <label className={styles.label}>{i18next.t('Common:inputConfirmPassword')}</label>
      <input type="password" name="passwordConfirmation" ref={register} className="text-field" />
      <button type="submit" className="button-primary m-top-1">
        {i18next.t('Common:buttonSignUp')}
      </button>
    </form>
  );
}
