import { ColorsProps } from './interface';

export const colors: ColorsProps = {
  primary: '#000000',
  secundary: '#B0C4DE',
  transparent: 'rgba(0, 0, 0, 0.6)',
  disabled: `#708090`,

  black: '#000000',
  white: '#ffffff',

  grey: {
    '800': '#708090',
    '700': '#B0C4DE',
    '600': '#363636',
    '500': '#4F4F4F',
    '400': '#696969',
    '300': '#808080',
    '200': '#A9A9A9',
    '100': '#C0C0C0',
  },

  button: {
    primary: '#000000',
    secundary: `#ffffff`,
    floating: `#00ffcb`,
    shadow: '#000000',
  },

  link: {
    primary: '#000000',
    hover: '#00ffcb',
  },

  table: {
    title: '#708090',
    separator: '#B0C4DE',
  },

  forms: {
    primary: '#000000',
    border: '#000000',
    focus: '#00ffcb',
    hover: '#B0C4DE',
  },

  suport: {
    error: '#DC143C',
    warning: '#FFD700',
    sucess: '#00FF00',
  },

  others: {
    1: '#940008',
    2: '#00ffcb',
    3: '#4B0082',
    4: '#e6e6fa',
    5: '#191970',
    6: '#0000FF',
    7: '#00BFFF',
    8: '#4682B4',
  },
};

export const config_colors = (state: ColorsProps) => {
  // colors = state;
  // return colors;
};
