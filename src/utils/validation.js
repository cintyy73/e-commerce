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
    value: 6,
    message: '**Password must be more than 4 characters',
  },
  maxLength: {
    value: 8,
    message: '**Password cannot exceed more than 8 characters',
  },
}

export const validatePasswordRegister = {
  required: '**Password is required',
  minLength: {
    value: 6,
    message: '**Password must be more than 4 characters',
  },
  maxLength: {
    value: 8,
    message: '**Password cannot exceed more than 18 characters',
  },
}

export const validateTable = {
  required: 'this is required',
  min: {
    value: 1,
    message: '1-25',
  },
  max: {
    value: 25,
    message: ' 1 - 25',
  },
}
export const validateEmail = {
  required: 'Este campo es requerido',
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: 'Email invalido',
  },
}
