import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // key pode ser qualquer nome desde que string
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err?.inner?.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
