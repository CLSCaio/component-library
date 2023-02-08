import { parse, isDate } from 'date-fns';

export const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const formatDate = (date: Date) =>
  [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');

export const parseDateString = (value: string) => {
  const parsedDate = isDate(value)
    ? value
    : parse(value, 'dd/MM/yyyy', new Date());

  return parsedDate;
};

export const convertShorDate = (value: string) => {
  const validDate = value.length === 10 ? value : `01/${value}`;

  const date = new Date(Date.parse(`${validDate}`));
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return `${month} ${year}`;
};
