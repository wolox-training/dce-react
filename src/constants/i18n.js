import i18next from 'i18next';

i18next.addResources('es', 'Common', {
  inputName: 'Nombre',
  inputLastName: 'Apellido',
  inputEmail: 'Correo',
  inputPassword: 'Contrasena',
  inputPasswordConfirmation: 'Confirmar Contrasena',
  buttonSignUp: 'Sign Up',
  buttonLogin: 'Login'
});

i18next.addResources('es', 'Validators', {
  required: 'Este campo es requerido',
  email: 'Correo electronico invalido',
  minLength: 'Debe tener minimo {{number}} caracteres',
  maxLength: 'Deber tener {{number}} o menos caracteres',
  password: 'La contrasena debe contener minimo una letra miniscula, una letra mayuscula y un numero',
  passwordConfirmation: 'Las contrasenas no coinciden'
});
