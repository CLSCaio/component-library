import * as yup from 'yup';

import * as C from './content';
import * as I from './interface';

export const cep = ({ message = C.message }: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(9, message)
    .test('cep', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    });

  return validate;
};
