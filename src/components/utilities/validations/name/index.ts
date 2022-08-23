import * as yup from 'yup';

import * as C from './content';
import * as I from './interface';

export const name = ({
  message = C.message,
  min = C.min,
}: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(min, message)
    .test('name', message, value => {
      if (value) return value.trim().split(' ').length >= 2;
      return false;
    });

  return validate;
};
