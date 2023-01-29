import * as yup from 'yup';
import { regex_strongPassword, regex_weakPassword } from 'src/utils';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_normalPassword = ({
  invalid = M.yup_menssages.password.invalid,
  weak = M.yup_menssages.password.weak,
}) => {
  const validate = yup
    .string()
    .min(8, weak)
    .test('password', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    });

  return validate;
};

export const yup_weakPassword = ({
  invalid = M.yup_menssages.password.invalid,
  weak = M.yup_menssages.password.weak,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('password', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('password', weak, value => {
      if (value) return value.length >= 1 && regex_weakPassword.test(value);
      return false;
    });

  return validate;
};

export const yup_strongPassword = ({
  invalid = M.yup_menssages.password.invalid,
  weak = M.yup_menssages.password.weak,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('password', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('password', weak, value => {
      if (value) return value.length >= 1 && regex_strongPassword.test(value);
      return false;
    });

  return validate;
};

export const yup_passwordConfirm = ({
  invalid = M.yup_menssages.password.invalid,
  equals = M.yup_menssages.password.equals,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('passwordConfirm', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .oneOf([yup.ref('password')], equals);

  return validate;
};
