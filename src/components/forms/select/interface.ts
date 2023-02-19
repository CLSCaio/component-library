import {
  OptionsSelectAndSelectSearchProps,
  SelectProps,
  InputSelectDefaultExtends,
  InputSelectDefaultStylesExtends,
} from '@types';

type SelectStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export interface SelectStyle extends SelectStyleExtends {
  datalistView?: 'block' | 'none';
}

export type { OptionsSelectAndSelectSearchProps, SelectProps };
