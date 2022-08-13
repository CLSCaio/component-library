type types = 'text' | 'number' | 'password';
type maxW = 'block' | number | 'max-content';
type transform = 'capitalize' | 'lowercase' | 'uppercase';
type masks =
  | 'user'
  | 'billingZipCode'
  | 'text'
  | 'cellphone'
  | 'document'
  | 'date'
  | 'shortDate'
  | 'creditCard'
  | 'placa'
  | 'cvv3'
  | 'cvv4'
  | 'height'
  | 'name';

export interface InputProps {
  tooltip?: string;
  label?: string;
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
}

export interface InputStyleProps {
  type?: types;
  maxW?: maxW;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
}

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};
