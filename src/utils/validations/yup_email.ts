import * as yup from 'yup';

import { regex_email } from 'src/utils';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_email = ({
  invalid = M.yup_menssages.email,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .min(5, invalid)
    .test('e-mail', invalid, value => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test('e-mail', invalid, value => {
      if (value) return value.length >= 1 && regex_email.test(value);
      return false;
    });

  return validate;
};
