import { TInputTypes, TBordersType, Tsize, TTransformType } from './index';

export type TMasks =
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

export interface TInputSelectDefault {
  id?: string;
  mask?: TMasks;
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

export type TOptionsSelectProps = {
  label: string;
  value: string | number;
};

export interface TFormComponentsProps extends TInputSelectDefault {
  options?: TOptionsSelectProps[];
}
