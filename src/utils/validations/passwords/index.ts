import * as yup from 'yup';
import { regex_strongPassword, regex_weakPassword } from 'src/utils';

import * as C from './content';
import * as I from './interface';

export const normalPassword = ({
  message = C.message1,
  message2 = C.message3,
}) => {
  const validate = yup
    .string()
    .min(8, message2)
    .test('password', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    });

  return validate;
};

export const weakPassword = ({
  message = C.message1,
  message2 = C.message3,
}) => {
  const validate = yup
    .string()
    .test('password', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('password', message2, value => {
      if (value) return value.length >= 1 && regex_weakPassword.test(value);
      return false;
    });

  return validate;
};

export const strongPassword = ({
  message = C.message1,
  message2 = C.message3,
}) => {
  const validate = yup
    .string()
    .test('password', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('password', message2, value => {
      if (value) return value.length >= 1 && regex_strongPassword.test(value);
      return false;
    });

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
