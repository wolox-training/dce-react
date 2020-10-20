import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export default function Form() {
  const { t } = useTranslation('common');
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`column m-bottom-6 ${styles.form}`}>
      <label className={styles.label}> {t('common:inputs.name')}</label>
      <input type="text" name="firstName" ref={register} className="text-field" />
      <label className={styles.label}> {t('common:inputs.lastName')}</label>
      <input type="text" name="lastName" ref={register} className="text-field" />
      <label className={styles.label}>{t('common:inputs.email')}</label>
      <input type="text" name="email" ref={register} className="text-field" />
      <label className={styles.label}>{t('common:inputs.password')}</label>
      <input type="password" name="password" ref={register} className="text-field" />
      <label className={styles.label}>{t('common:inputs.confirmPassword')}</label>
      <input type="password" name="passwordConfirmation" ref={register} className="text-field" />
      <button type="submit" className="button-primary m-top-1">
        Sign Up
      </button>
    </form>
  );
}
