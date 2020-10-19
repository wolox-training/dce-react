import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`column ${styles.form}`}>
      <label className={styles.label}> Nombre </label>
      <input type="text" name="first_name" ref={register} className="text-field" />
      <label className={styles.label}> Apellido </label>
      <input type="text" name="last_name" ref={register} className="text-field" />
      <label className={styles.label}>Email</label>
      <input type="text" name="email" ref={register} className="text-field" />
      <label className={styles.label}>Password</label>
      <input type="password" name="password" ref={register} className="text-field" />
      <label className={styles.label}>Confirmacion de Password</label>
      <input type="password" name="password_confirmation" ref={register} className="text-field" />
      <button type="submit" className="button-primary m-top-1">
        Sign Up
      </button>
    </form>
  );
}
