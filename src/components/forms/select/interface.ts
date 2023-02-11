import { ColorsProps } from '@global';
import {
  OptionsSelectAndSelectSearchProps,
  SelectProps,
  InputSelectDefaultExtends,
  InputSelectDefaultStylesExtends,
} from '@types';

type SelectStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export interface SelectStyle extends SelectStyleExtends {
  store?: ColorsProps | null;
  datalistView?: 'block' | 'none';
}

export type { OptionsSelectAndSelectSearchProps, SelectProps };
