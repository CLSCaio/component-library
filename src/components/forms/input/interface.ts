import {
  TBordersType,
  TInputTypes,
  Tsize,
  TTransformType,
  InputSelectDefault,
} from 'src/@types';

export type masks =
  | 'cep'
  | 'cellphone'
  | 'phone'
  | 'phone_cellphone'
  | 'plate'
  | 'cpf'
  | 'cnpj'
  | 'cpf_cnpj'
  | 'date'
  | 'shortDate'
  | 'creditCard'
  | 'cvv'
  | 'height';

export interface InputProps extends InputSelectDefault {
  mask?: masks;
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
