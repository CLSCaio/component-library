import * as yup from 'yup';

import { functions } from '../../../../functions';

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
    .transform(functions.parseDateString)
    .min(
      functions.returnMinDate(maxAge),
      `A data não poder ser menor que  ${functions.returnMinDate()}`,
    )
    .max(functions.returnMaxDate(minAge), message2)
    .typeError(message)
    .test('date', message, value => {
      if (value) return value.toString().trim().length >= 10;
      return false;
    });

  return validate;
};
