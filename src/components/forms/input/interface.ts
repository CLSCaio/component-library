import { ColorsProps } from '@global';
import {
  InputProps,
  InputSelectDefaultExtends,
  InputSelectDefaultStylesExtends,
} from '@types';

type InputStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export interface InputStyle extends InputStyleExtends {
  store?: ColorsProps | null;
}

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};

export type { InputProps };
