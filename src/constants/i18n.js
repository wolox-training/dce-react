import i18next from 'i18next';

i18next.addResources('es', 'Common', {
  inputName: 'Nombre',
  inputLastName: 'Apellido',
  inputEmail: 'Correo',
  inputPassword: 'Contraseña',
  inputPasswordConfirmation: 'Confirmar Contraseña',
  buttonSignUp: 'Sign Up',
  buttonLogin: 'Login',
  buttonBack: 'Atrás'
});

i18next.addResources('es', 'Validators', {
  required: 'Este campo es requerido',
  email: 'Correo electronico invalido',
  minLength: 'Debe tener minimo {{number}} caracteres',
  maxLength: 'Deber tener {{number}} o menos caracteres',
  password: 'La contraseña debe contener minimo una letra miniscula, una letra mayuscula y un numero',
  passwordConfirmation: 'Las contraseñas no coinciden'
});
