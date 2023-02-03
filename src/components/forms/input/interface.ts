import {
  TBordersType,
  TInputTypes,
  Tsize,
  TTransformType,
  TInputSelectDefault,
} from '../../../types';

export interface InputProps extends TInputSelectDefault {
  autoComplete?: 'off' | 'on';
  type?: TInputTypes;
}

export interface InputStyle {
  type?: TInputTypes;
  maxW?: Tsize;
  transform?: TTransformType;
  disabled?: boolean;
  readOnly?: boolean;
  error?: 'error';
  labelposition?: 'top' | 'left';
  border?: TBordersType;
  boldLabel?: boolean;
}

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};
