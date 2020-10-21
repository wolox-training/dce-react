import * as yup from 'yup';

const min = 8;
const max = 25;

export const signUpSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .required('this field is required')
    .min(min, 'It must have 8 characters or more')
    .max(max, 'It must have 25 characters or less')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must have contain at least one mayus letter and a number'
    )
    .when('password', (password, schema) => {
      schema.test('confirm', 'Password should match!', value => value === password);
    }),
  email: yup
    .string()
    .email('email not valid')
    .required('this field is required'),
  firstName: yup.string().required('this field is required'),
  lastName: yup.string().required('this field is required'),
  password: yup
    .string()
    .required('this field is required')
    .min(min, 'It must have 8 characters or more')
    .max(max, 'It must have 25 characters or less')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must have contain at least one mayus letter and a number'
    )
});
