import { ColorsProps } from './interface';

export let colors: ColorsProps = {
  primary: '#000000',
  secundary: '#B0C4DE',
  transparent: 'rgba(0, 0, 0, 0.6)',
  disabled: `#708090`,

  black: '#000000',
  white: '#ffffff',

  text: {
    1: '#708090',
    2: '#B0C4DE',
    3: '#363636',
    4: '#4F4F4F',
    5: '#696969',
    6: '#808080',
    7: '#A9A9A9',
    8: '#C0C0C0',
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
    primary: '#708090',
    separator: '#B0C4DE',
    border: `#C0C0C0`,
  },

  forms: {
    primary: '#000000',
    border: '#000000',
    focus: '#00ffcb',
    hover: '#B0C4DE',
  },

  support: {
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

export const config_colors = (state?: ColorsProps) => {
  colors = {
    primary: state?.primary || colors.primary,
    secundary: state?.secundary || colors.secundary,
    disabled: state?.disabled || colors.disabled,
    transparent: state?.transparent || colors.transparent,
    black: state?.black || colors.black,
    white: state?.white || colors.white,

    others: state?.others,
    text: state?.text,

    button: {
      primary: state?.button?.primary || colors.button?.primary,
      secundary: state?.button?.secundary || colors.button?.secundary,
      floating: state?.button?.floating || colors.button?.floating,
      shadow: state?.button?.shadow || colors.button?.shadow,
    },

    link: {
      primary: state?.link?.primary || colors.link?.primary,
      hover: state?.link?.hover || colors.link?.hover,
    },

    table: {
      primary: state?.table?.primary || colors.table?.primary,
      border: state?.table?.border || colors.table?.border,
      separator: state?.table?.separator || colors.table?.separator,
    },

    forms: {
      primary: state?.forms?.primary || colors.forms?.primary,
      border: state?.forms?.border || colors.forms?.border,
      focus: state?.forms?.focus || colors.forms?.focus,
      hover: state?.forms?.hover || colors.forms?.hover,
    },

    support: {
      error: state?.support?.error || colors.support?.error,
      warning: state?.support?.warning || colors.support?.warning,
      sucess: state?.support?.sucess || colors.support?.sucess,
    },
  };

  return colors;
};
