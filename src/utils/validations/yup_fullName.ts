import * as yup from 'yup';

import { validName } from '@utils';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_fullName = ({
  invalid = M.yup_menssages.fullName,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('name', invalid, value => (value ? validName(value) : true));

  return validate;
};
