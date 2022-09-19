import { FormikContextType } from 'formik';
import { OptionsProps } from '../select/interface';

import { masks, transform, types, maxW, borders } from '../input/interface';

export type Inputs = {
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
    tooltip?: string;
    bold?: boolean;
    required?: boolean;
  };
  autoComplete?: 'off' | 'on';
};

export interface Selects extends Inputs {
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
  disabled?: boolean;
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
