import { regex_fullName } from '@utils';

export const validName = (name: string) => {
  const test = name.match(regex_fullName);
  const firstName = test?.[1];
  const secondName = test?.[2];

  const isValid =
    firstName && secondName
      ? firstName.length >= 3 && secondName.length >= 3
      : false;

  return isValid;
};
