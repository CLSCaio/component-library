export type types = 'text' | 'number' | 'password';
export type maxW = 'block' | number | 'max-content';
export type transform = 'capitalize' | 'lowercase' | 'uppercase';
export type borders = 'outline' | 'inline';

export type masks =
  | 'cep'
  | 'cellphone'
  | 'phone'
  | 'plate'
  | 'cpf'
  | 'cnpj'
  | 'cpf_cnpj'
  | 'date'
  | 'shortDate'
  | 'creditCard'
  | 'cvv'
  | 'height';

export interface InputProps {
  label?: {
    name: string;
    position?: 'top' | 'left';
    bold?: boolean;
    tooltip?: string;
  };
  required?: boolean;
  name: string;
  placeholder?: string;
  type?: types;
  maxW?: maxW;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  mask?: masks;
  autoComplete?: 'off' | 'on';
  onBlur?: () => void;
  border?: borders;
}

export interface InputStyle {
  type?: types;
  maxW?: maxW;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  error?: 'error';
  labelposition?: 'top' | 'left';
  border?: borders;
  boldLabel?: boolean;
}

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};
