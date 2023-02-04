import {
  InputProps,
  InputSelectDefaultExtends,
  InputSelectDefaultStylesExtends,
} from '@types';

export type InputStyle = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};

export type { InputProps };
