import * as yup from 'yup';

import { returnMinDate, returnMaxDate, parseDateString } from 'src/utils';

import * as C from './content';
import * as I from './interface';

export const dateWithRestrictionOfAge = ({
  message = C.message,
  message2 = C.message2,
  minAge,
  maxAge,
}: I.ValidationsProps) => {
  const validate = yup
    .date()
    .transform(parseDateString)
    .min(
      returnMinDate(maxAge),
      `A data não poder ser menor que  ${returnMinDate()}`,
    )
    .max(returnMaxDate(minAge), message2)
    .typeError(message)
    .test('date', message, value => {
      if (value) return value.toString().trim().length >= 10;
      return false;
    });

  return validate;
};
