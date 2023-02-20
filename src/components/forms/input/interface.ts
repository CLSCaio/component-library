import {
  InputDefaultProps,
  InputSelectDefaultExtends,
  InputSelectDefaultStylesExtends,
} from '@types';

type InputStyleExtends = InputSelectDefaultExtends &
  InputSelectDefaultStylesExtends;

export type InputStyle = InputStyleExtends;

export interface InputProps extends InputDefaultProps {
  name: string;
}

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};
