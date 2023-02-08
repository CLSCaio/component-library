import { parse, isDate } from 'date-fns';

export const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const formatDate = (date: Date) =>
  [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');

export const convertDateToPtbr = (value: string) => {
  const parsedDate = isDate(value)
    ? value
    : parse(value, 'dd/MM/yyyy', new Date());

  return parsedDate;
};

export const convertShorDate = (value: string) => {
  const date =
    value.length === 7
      ? value.replace(/(\d{2})\/(\d{4})/, '$1/01/$2')
      : value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3');

  const newDate = new Date(date);

  return newDate;
};
