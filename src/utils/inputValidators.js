import '../i18n';
import i18next from 'i18next';

//  helpers
const required = () => ({ value: true, message: i18next.t('Validators:required') });
const minLength = number => ({ value: number, message: i18next.t('Validators:minLength', { number }) });
const maxLength = number => ({ value: number, message: i18next.t('Validators:maxLength', { number }) });

const min = 8;
const max = 25;

export const emailValidator = {
  required: required(),
  pattern: {
    //  eslint-disable-next-line
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: i18next.t('Validators:email')
  }
};

export const nameValidator = {
  required: required()
};

export const passwordValidator = {
  required: required(),
  minLength: minLength(min),
  maxLength: maxLength(max),
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message: i18next.t('Validators:password')
  }
};
