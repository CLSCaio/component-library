import {
  TInputSelectDefault,
  TOptionsSelectProps,
  TBordersType,
  Tsize,
  TTransformType,
} from '../../../types';

export interface SelectProps extends TInputSelectDefault {
  options: TOptionsSelectProps[];
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

export type { TOptionsSelectProps };
