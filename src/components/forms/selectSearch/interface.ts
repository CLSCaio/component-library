import {
  OptionsProps,
  InputSelectDefaultExtends,
  SelectSearchDefaultProps,
  InputSelectDefaultStylesExtends,
} from '@types';

type SelectStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export interface SelectSearchProps extends SelectSearchDefaultProps {
  name: string;
}

export interface SelectSearchStyle extends SelectStyleExtends {
  datalistView?: 'block' | 'none';
  filteredOptions?: number;
}

export type { OptionsProps };
