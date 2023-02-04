import * as yup from 'yup';

import { returnMinDate, returnMaxDate, parseDateString } from '@utils';

import * as M from './yup_messages';
import * as I from './interface';

export const yup_dateWithRestrictionOfAge = ({
  invalid = M.yup_menssages.date.invalid,
  over18Years = M.yup_menssages.date.over18Years,
}: I.MessagesYupError) => {
  const validate = yup
    .date()
    .transform(parseDateString)
    .min(returnMinDate(), `A data não poder ser menor que  ${returnMinDate()}`)
    .max(returnMaxDate(), over18Years)
    .typeError(invalid)
    .test('date', invalid, value => {
      if (value) return value.toString().trim().length >= 10;
      return false;
    });

  return validate;
};
