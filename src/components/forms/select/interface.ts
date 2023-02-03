import {
  InputSelectDefault,
  OptionsSelectProps,
  TBordersType,
  Tsize,
  TTransformType,
} from 'src/@types';

export interface SelectProps extends InputSelectDefault {
  options: OptionsSelectProps[];
}

export interface SelectStyle {
  maxW?: Tsize;
  transform?: TTransformType;
  disabled?: boolean;
  readOnly?: boolean;
  error?: 'error';
  positionLabel?: 'top' | 'left';
  border?: TBordersType;
  boldLabel?: boolean;
}

export type { OptionsSelectProps };
