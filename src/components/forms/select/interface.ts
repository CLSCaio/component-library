import {
  OptionsSelectProps,
  TBordersType,
  Tsize,
  TTransformType,
  SelectProps,
} from '../../../@types';

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

export type { OptionsSelectProps, SelectProps };
