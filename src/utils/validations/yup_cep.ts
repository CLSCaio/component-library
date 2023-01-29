import * as yup from 'yup';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_cep = ({
  invalid = M.yup_menssages.cep,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .min(9, invalid)
    .test('cep', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    });

  return validate;
};
