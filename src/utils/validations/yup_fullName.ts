import * as yup from 'yup';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_fullName = ({
  invalid = M.yup_menssages.fullName,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .min(3, invalid)
    .test('name', invalid, value => {
      if (value) return value.trim().split(' ').length >= 2;
      return false;
    });

  return validate;
};
