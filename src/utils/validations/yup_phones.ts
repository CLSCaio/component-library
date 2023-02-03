import * as yup from 'yup';

import { regex_phone, regex_cellphone } from '../regex';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_phone = ({
  invalid = M.yup_menssages.phones.phone,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .min(14, invalid)
    .test('phone', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('phone', invalid, value => {
      if (value) return value.length >= 1 && regex_phone.test(value);
      return false;
    });

  return validate;
};

export const yup_cellphone = ({
  invalid = M.yup_menssages.phones.cellphone,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .min(16, invalid)
    .test('cellphone', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('cellphone', invalid, value => {
      if (value) return value.length >= 1 && regex_cellphone.test(value);
      return false;
    });

  return validate;
};
