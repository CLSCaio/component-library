import * as yup from 'yup';

import { regex_email } from '@utils';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_email = ({
  invalid = M.yup_menssages.email,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('email', invalid, value =>
      value ? value.length >= 1 && regex_email.test(value) : true,
    );

  return validate;
};
