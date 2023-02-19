import {
  InputProps,
  InputSelectDefaultExtends,
  InputSelectDefaultStylesExtends,
} from '@types';

type InputStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export type InputStyle = InputStyleExtends;

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};

export type { InputProps };
