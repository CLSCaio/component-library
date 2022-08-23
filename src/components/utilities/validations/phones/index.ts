import * as yup from 'yup';

import * as C from './content';
import * as I from './interface';

export const phone = ({ message = C.message1 }: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(14, message)
    .test('phone', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    });

  return validate;
};

export const cellphone = ({ message = C.message2 }: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(16, message)
    .test('cellphone', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    });

  return validate;
};
