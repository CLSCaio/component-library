import * as yup from 'yup';
import { regex } from '../../regex';

import * as C from './content';
import * as I from './interface';

export const password = ({
  message = C.message1,
  message2 = C.message3,
  passwordType = 'weak',
}: I.ValidationsProps) => {
  let validate;

  if (passwordType === 'normal') {
    validate = yup
      .string()
      .min(8, message2)
      .test('password', message, value => {
        if (value) return value.trim().length >= 1;
        return false;
      });
  }

  if (passwordType === 'weak') {
    validate = yup
      .string()
      .test('password', message, value => {
        if (value) return value.trim().length >= 1;
        return false;
      })
      .test('password', message2, value => {
        if (value) return value.length >= 1 && regex.weakPassword.test(value);
        return false;
      });
  }

  if (passwordType === 'strong') {
    validate = yup
      .string()
      .test('password', message, value => {
        if (value) return value.trim().length >= 1;
        return false;
      })
      .test('password', message2, value => {
        if (value) return value.length >= 1 && regex.strongPassword.test(value);
        return false;
      });
  }

  return validate;
};

export const passwordConfirm = ({
  message = C.message1,
  message2 = C.message2,
}: I.ValidationsProps) => {
  const validate = yup
    .string()
    .test('passwordConfirm', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .oneOf([yup.ref('password')], message2);

  return validate;
};
