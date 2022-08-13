type types = 'text' | 'number' | 'password';
type maxW = 'block' | number | 'max-content';
type transform = 'capitalize' | 'lowercase' | 'uppercase';
type borders = 'outline' | 'inline';

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
  label?: {
    name: string;
    position?: 'top' | 'left';
  };
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

export interface InputStyleProps {
  type?: types;
  maxW?: maxW;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  positionLabel?: 'top' | 'left';
  border?: borders;
}

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};
