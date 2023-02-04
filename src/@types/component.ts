import { TInputTypes, TBordersType, Tsize, TTransformType } from '.';

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

type TLabel = 'top' | 'left';
export interface InputSelectDefaultStylesExtends {
  error?: 'error';
  positionLabel?: TLabel;
  boldLabel?: boolean;
}

export interface InputSelectDefaultExtends {
  maxW?: Tsize;
  transform?: TTransformType;
  disabled?: boolean;
  readOnly?: boolean;
  border?: TBordersType;
}

interface InputSelectDefault extends InputSelectDefaultExtends {
  id?: string;
  label?: {
    name: string;
    position?: TLabel;
    bold?: boolean;
    tooltip?: string;
    required?: boolean;
  };
  name: string;
  placeholder?: string;
  className?: string;
}

export interface InputProps extends InputSelectDefault {
  mask?: masks;
  autoComplete?: 'off' | 'on';
  type?: TInputTypes;
}

export interface SelectProps extends InputSelectDefault {
  options: OptionsSelectProps[];
}

export type OptionsSelectProps = {
  label: string;
  value: string | number;
};

export interface FormComponentsProps extends InputProps {
  options?: OptionsSelectProps[];
}
