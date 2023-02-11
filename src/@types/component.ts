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
  handleClean?: boolean;
  isLoading?: boolean;
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

export type OptionsSelectAndSelectSearchProps = {
  value: string;
};

export interface SelectProps extends InputSelectDefault {
  options: OptionsSelectAndSelectSearchProps[];
  errorMessage?: string;
}

export interface SelectSearchProps extends SelectProps {
  forcedOption?: boolean;
  errorMessages?: [invalidOpção?: string, selectOption?: string];
}

export interface FormComponentsProps extends InputProps {
  options?: OptionsSelectAndSelectSearchProps[];
  as: 'input' | 'select' | 'selectSearch';
}
