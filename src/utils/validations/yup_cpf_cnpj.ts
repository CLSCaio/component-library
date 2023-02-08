import * as yup from 'yup';

import { regex_cpf, regex_cnpj, regex_cpf_cnpj } from '@utils';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_cpf = ({
  invalid = M.yup_menssages.cpf_cnpj.cpf,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('cpf', invalid, value =>
      value ? value.length >= 1 && regex_cpf.test(value) : true,
    );

  return validate;
};

export const yup_cnpj = ({
  invalid = M.yup_menssages.cpf_cnpj.cnpj,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('cnpj', invalid, value =>
      value ? value.length >= 1 && regex_cnpj.test(value) : true,
    );

  return validate;
};

export const yup_cpf_cnpj = ({
  invalid = M.yup_menssages.cpf_cnpj.cpf_cnpj,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('cpf-cnpj', invalid, value =>
      value ? value.length >= 1 && regex_cpf_cnpj.test(value) : true,
    );

  return validate;
};
