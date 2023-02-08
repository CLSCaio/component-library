import * as yup from 'yup';

import { regex_cep } from '../regex';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_cep = ({
  invalid = M.yup_menssages.cep,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('cep', invalid, value =>
      value ? value.length >= 1 && regex_cep.test(value) : true,
    );

  return validate;
};
