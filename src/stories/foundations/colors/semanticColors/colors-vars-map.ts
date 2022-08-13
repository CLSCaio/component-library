import { colors } from '../../../../index';

const text = 'Usada para textos';
const others = 'Cor adicional para usar avontade';

export const colorsMap = [
  // text colors
  {
    name: 'Black',
    description: text,
    color: colors.black,
  },
  {
    name: 'White',
    description: text,
    color: colors.white,
  },
  {
    name: 'Grey100',
    description: text,
    color: colors.grey['100'],
  },
  {
    name: 'Grey200',
    description: text,
    color: colors.grey['200'],
  },
  {
    name: 'Grey300',
    description: text,
    color: colors.grey['300'],
  },
  {
    name: 'Grey400',
    description: text,
    color: colors.grey['400'],
  },
  {
    name: 'Grey500',
    description: text,
    color: colors.grey['500'],
  },
  {
    name: 'Grey600',
    description: text,
    color: colors.grey['600'],
  },
  {
    name: 'SkyGrey',
    description: text,
    color: colors.grey.sky,
  },

  // elements colors
  {
    name: 'StellGrey',
    description: 'Usada para disabled, readOnly, loading',
    color: colors.disabled,
  },
  {
    name: 'SkyBlue',
    description: 'Usada para focus, active',
    color: colors.focus,
  },
  {
    name: 'StellBlue',
    description: 'Usada para hover',
    color: colors.hover,
  },
  {
    name: 'Blue',
    description: 'Usada para link',
    color: colors.link,
  },

  // suport colors
  {
    name: 'Success',
    description: 'Use como indicação de sucesso',
    color: colors.sucess,
  },
  {
    name: 'Warning',
    description: 'Use como indicação de alertas',
    color: colors.warning,
  },
  {
    name: 'Error',
    description: 'Use como indicação de error',
    color: colors.error,
  },

  // other colors
  {
    name: 'DarkRed',
    description: others,
    color: colors.others.darkRed,
  },
  {
    name: 'Indigo',
    description: others,
    color: colors.others.indigo,
  },
  {
    name: 'Lavender',
    description: others,
    color: colors.others.lavender,
  },
  {
    name: 'MidnightBlue',
    description: others,
    color: colors.others.midnightBlue,
  },
  {
    name: 'LightGreen',
    description: others,
    color: colors.others.lightGreen,
  },
];
