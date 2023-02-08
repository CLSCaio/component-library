import * as yup from 'yup';

import {
  returnMinDate,
  returnMaxDate,
  regex_date_shortDate,
  convertShorDate,
} from '@utils';

import * as M from './yup_messages';
import * as I from './interface';

const minDate = `A data não pode ser menor que ${returnMinDate()}`;

export const yup_dateWithRestrictionOfAge = ({
  invalid = M.yup_menssages.date.invalid,
  over18Years = M.yup_menssages.date.over18Years,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('date', invalid, value =>
      value ? value.length >= 1 && regex_date_shortDate.test(value) : true,
    )
    .test('minDate', minDate, value =>
      value
        ? value.length >= 1 &&
          convertShorDate(value) >= convertShorDate(returnMinDate())
        : true,
    )
    .test('maxDate', over18Years, value =>
      value
        ? value.length >= 1 &&
          convertShorDate(value) <= convertShorDate(returnMaxDate())
        : true,
    );

  return validate;
};

export const yup_date = ({
  invalid = M.yup_menssages.date.invalid,
}: I.MessagesYupError) => {
  const validate = yup
    .string()
    .test('date', invalid, value =>
      value ? value.length >= 1 && regex_date_shortDate.test(value) : true,
    )
    .test('minDate', minDate, value =>
      value
        ? value.length >= 1 &&
          convertShorDate(value) >= convertShorDate(returnMinDate())
        : true,
    );

  return validate;
};
