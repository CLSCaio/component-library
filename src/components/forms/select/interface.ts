import {
  OptionsSelectAndSelectSearchProps,
  SelectDefaultProps,
  InputSelectDefaultExtends,
  InputSelectDefaultStylesExtends,
} from '@types';

type SelectStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export interface SelectProps extends SelectDefaultProps {
  name: string;
}

export interface SelectStyle extends SelectStyleExtends {
  datalistView?: 'block' | 'none';
}

export type { OptionsSelectAndSelectSearchProps };
