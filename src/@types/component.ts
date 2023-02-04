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

interface InputSelectDefault {
  id?: string;
  label?: {
    name: string;
    position?: 'top' | 'left';
    bold?: boolean;
    tooltip?: string;
    required?: boolean;
  };
  name: string;
  placeholder?: string;
  maxW?: Tsize;
  transform?: TTransformType;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  border?: TBordersType;
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
