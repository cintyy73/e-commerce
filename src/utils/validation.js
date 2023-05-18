export const validateSurname = {
  required: 'this is required',
  minLength: {
    value: 3,
    message: '3 characters',
  },
}
export const validateName = {
  required: 'this is required',
  minLength: {
    value: 4,
    message: '4 characters',
  },
}
export const validatePassword = {
  required: 'this is required',
  minLength: {
    value: 8,
    message: '8 characters',
  },
}
export const validateEmail = {
  required: 'Este campo es requerido',
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: 'Email invalido',
  },
}
