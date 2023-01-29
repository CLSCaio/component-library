import * as yup from 'yup';

import { regex_cpf, regex_cnpj, regex_cpf_cnpj } from 'src/utils';

import * as C from './content';
import * as I from './interface';

export const cpf = ({ message = C.message1 }: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(11, message)
    .test('cpf', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('cpf', message, value => {
      if (value) return value.length >= 1 && regex_cpf.test(value);
      return false;
    });

  return validate;
};

export const cnpj = ({ message = C.message2 }: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(17, message)
    .test('cnpj', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('cnpj', message, value => {
      if (value) return value.length >= 1 && regex_cnpj.test(value);
      return false;
    });

  return validate;
};

export const cpf_cnpj = ({ message = C.message3 }: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(11, message)
    .test('cpf_cnpj', message, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('cpf_cnpj', message, value => {
      if (value) return value.length >= 1 && regex_cpf_cnpj.test(value);
      return false;
    });

  return validate;
};
