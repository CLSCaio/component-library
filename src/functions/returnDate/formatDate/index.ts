import { parse, isDate } from 'date-fns';

export const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const formatDate = (date: Date) =>
  [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');

export const parseDateString = (value: string, originalValue: string) => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'dd/MM/yyyy', new Date());

  return parsedDate;
};
