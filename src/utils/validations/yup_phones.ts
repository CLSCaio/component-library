import * as yup from 'yup';

import { regex_phone, regex_cellphone, regex_phone_cellphone } from '@utils';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_phone = ({
  invalid = M.yup_menssages.phones.phone,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('phone', invalid, value =>
      value ? value.length >= 1 && regex_phone.test(value) : true,
    );

  return validate;
};

export const yup_cellphone = ({
  invalid = M.yup_menssages.phones.cellphone,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('cellphone', invalid, value =>
      value ? value.length >= 1 && regex_cellphone.test(value) : true,
    );

  return validate;
};

export const yup_phone_cellphone = ({
  invalid = M.yup_menssages.phones.cellphone,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('phone-cellphone', invalid, value =>
      value ? value.length >= 1 && regex_phone_cellphone.test(value) : true,
    );

  return validate;
};
