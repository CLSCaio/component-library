import { FormikContextType } from 'formik';
import { ButtonProps } from 'src/components/actions';
import { OptionsProps } from '../select/interface';

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

type Inputs = {
  tooltip?: string;
  name: string;
  placeholder?: string;
  type?: types;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  mask?: masks;
  label?: {
    name: string;
    position?: 'top' | 'left';
  };
  autoComplete?: 'off' | 'on';
};

interface Selects extends Inputs {
  options: OptionsProps[];
}

type Design = {
  border?: borders;
  maxW?: maxW;
};

export type maxWs = 'block' | number | 'max-content';
export type variants =
  | 'outline'
  | 'outline-reverse'
  | 'pulse'
  | 'floating'
  | 'default';

type colors = {
  primary?: string;
  secundary?: string;
  third?: string;
};

type Button = {
  variant?: variants;
  colors?: colors;
  maxW?: maxWs;
  isLoading?: boolean;
  label: string;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
};

export interface FormProps {
  inputs?: Inputs[];
  selects?: Selects[];
  design?: Design;
  button: Button;
  form: FormikContextType<any>;
}
