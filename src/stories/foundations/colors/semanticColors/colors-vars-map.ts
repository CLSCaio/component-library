import { colors } from '../../../../index';

const text = 'Usada para textos';
const others = 'Cor adicional para usar avontade';

export const colorsMap = [
  // text colors
  {
    name: 'Black',
    description: text,
    color: colors.text.black,
  },
  {
    name: 'White',
    description: text,
    color: colors.text.white,
  },
  {
    name: 'Grey100',
    description: text,
    color: colors.text.grey['100'],
  },
  {
    name: 'Grey200',
    description: text,
    color: colors.text.grey['200'],
  },
  {
    name: 'Grey300',
    description: text,
    color: colors.text.grey['300'],
  },
  {
    name: 'Grey400',
    description: text,
    color: colors.text.grey['400'],
  },
  {
    name: 'Grey500',
    description: text,
    color: colors.text.grey['500'],
  },
  {
    name: 'Grey600',
    description: text,
    color: colors.text.grey['600'],
  },
  {
    name: 'SkyGrey',
    description: text,
    color: colors.text.grey.sky,
  },

  // elements colors
  {
    name: 'StellGrey',
    description: 'Usada para disabled, readOnly, loading',
    color: colors.elements.disabled,
  },
  {
    name: 'SkyBlue',
    description: 'Usada para focus, active',
    color: colors.elements.focus,
  },
  {
    name: 'StellBlue',
    description: 'Usada para hover',
    color: colors.elements.hover,
  },
  {
    name: 'Blue',
    description: 'Usada para link',
    color: colors.elements.link,
  },

  // suport colors
  {
    name: 'Support Success',
    description: 'Use como indicação de sucesso',
    color: colors.support.sucess,
  },
  {
    name: 'Support Warning',
    description: 'Use como indicação de alertas',
    color: colors.support.warning,
  },
  {
    name: 'Support Error',
    description: 'Use como indicação de error',
    color: colors.support.error,
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
    name: 'PhosphorescentGreen',
    description: others,
    color: colors.others.phosphorescentGreen,
  },
  {
    name: 'PhosphorescentPurple',
    description: others,
    color: colors.others.phosphorescentPurple,
  },
];
