import * as yup from 'yup';

import { regex } from '../../regex';

import * as C from './content';
import * as I from './interface';

export const email = ({
  message = C.message,
  min = C.min,
}: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(min, message)
    .test('e-mail', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('e-mail', message, value => {
      if (value) return value.length >= 1 && regex.email.test(value);
      return false;
    });

  return validate;
};
