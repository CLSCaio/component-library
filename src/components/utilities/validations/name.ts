import * as yup from 'yup';
import * as I from './interface';

const defaultValues = {
  mensage: 'Insira seu nome completo.',
  min: 3,
};

export const name = ({
  mensage = defaultValues.mensage,
  min = defaultValues.min,
}: I.ValidationsProps) => {
  const validate = yup
    .string()
    .min(min, mensage)
    .test('name', mensage, value => {
      if (value) return value.trim().split(' ').length >= 2;
      return false;
    });

  return validate;
};
