import { colors } from '../../../../index';

const text = 'Usada para textos';
const others = 'Cor adicional para usar avontade';

export const colorsMap = [
  // text colors
  {
    name: 'Primary',
    description:
      'Cor bastante usada no website, geralmente para texto, inputs, select, bordas, etc...',
    color: colors.primary,
  },
  {
    name: 'Secundary',
    description:
      'Cor bastante usada no website, geralmente para o mesmo proposito da primary, porem em contraste',
    color: colors.secundary,
  },
  {
    name: 'Third',
    description:
      'Cor para usar como backgrounds, ou textos com menor importacia no website',
    color: colors.third,
  },

  // text colors
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
    color: colors.others[1],
  },
  {
    name: 'Indigo',
    description: others,
    color: colors.others[2],
  },
  {
    name: 'Lavender',
    description: others,
    color: colors.others[3],
  },
  {
    name: 'MidnightBlue',
    description: others,
    color: colors.others[4],
  },
  {
    name: 'LightGreen',
    description: others,
    color: colors.others[5],
  },
];
