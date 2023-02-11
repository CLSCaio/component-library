import { ColorsProps } from '@global';
import {
  OptionsSelectAndSelectSearchProps,
  InputSelectDefaultExtends,
  SelectSearchProps,
  InputSelectDefaultStylesExtends,
} from '@types';

type SelectStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export interface SelectSearchStyle extends SelectStyleExtends {
  store?: ColorsProps | null;
  datalistView?: 'block' | 'none';
  filteredOptions?: number;
}

export type { OptionsSelectAndSelectSearchProps, SelectSearchProps };
