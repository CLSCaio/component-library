import { ColorsProps } from '@global';
import {
  OptionsSelectProps,
  SelectProps,
  InputSelectDefaultExtends,
  InputSelectDefaultStylesExtends,
} from '@types';

type SelectStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export interface SelectStyle extends SelectStyleExtends {
  store?: ColorsProps | null;
}

export type { OptionsSelectProps, SelectProps };
