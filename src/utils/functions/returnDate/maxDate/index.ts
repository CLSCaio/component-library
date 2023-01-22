import { padTo2Digits, formatDate } from '../formatDate';

export const returnMaxDate = (minAge = 18) => {
  const date = new Date();
  const year = date.getFullYear();
  const maxYear = year - minAge;

  [
    padTo2Digits(date.setDate(1)),
    padTo2Digits(date.setMonth(0)),
    date.setFullYear(maxYear),
  ].join('/');

  const newDate = formatDate(date);
  return newDate;
};
