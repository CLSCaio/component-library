import { name } from './name';
import { cep } from './cep';
import { email } from './email';
import { dateWithRestrictionOfAge } from './dates';

import { cpf, cnpj, cpf_cnpj } from './cpf_cnpj';
import {
  normalPassword,
  strongPassword,
  weakPassword,
  passwordConfirm,
} from './passwords';
import { cellphone, phone } from './phones';

export const validations = {
  name,
  cep,
  email,
  dateWithRestrictionOfAge,
  cpf,
  cnpj,
  cpf_cnpj,
  cellphone,
  phone,
  normalPassword,
  strongPassword,
  weakPassword,
  passwordConfirm,
};
