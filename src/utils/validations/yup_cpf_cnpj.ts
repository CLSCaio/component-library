import * as yup from 'yup';

import { regex_cpf, regex_cnpj, regex_cpf_cnpj } from 'src/utils';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_cpf = ({
  invalid = M.yup_menssages.cpf_cnpj.cpf,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .min(11, invalid)
    .test('cpf', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('cpf', invalid, value => {
      if (value) return value.length >= 1 && regex_cpf.test(value);
      return false;
    });

  return validate;
};

export const yup_cnpj = ({
  invalid = M.yup_menssages.cpf_cnpj.cnpj,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .min(17, invalid)
    .test('cnpj', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('cnpj', invalid, value => {
      if (value) return value.length >= 1 && regex_cnpj.test(value);
      return false;
    });

  return validate;
};

export const yup_cpf_cnpj = ({
  invalid = M.yup_menssages.cpf_cnpj.cpf_cnpj,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .min(11, invalid)
    .test('cpf_cnpj', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('cpf_cnpj', invalid, value => {
      if (value) return value.length >= 1 && regex_cpf_cnpj.test(value);
      return false;
    });

  return validate;
};
