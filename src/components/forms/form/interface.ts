import { FormikContextType } from 'formik';

import { TbuttonTypes, TbuttonVariants, Tsize } from 'src/types';

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

type colors = {
  primary?: string;
  secundary?: string;
  third?: string;
};

type Button = {
  variant?: TbuttonVariants;
  colors?: colors;
  maxW?: Tsize;
  isLoading?: boolean;
  label: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  type?: TbuttonTypes;
};

export interface FormProps {
  inputs?: Inputs[];
  selects?: Selects[];
  design?: Design;
  button: Button;
  form: FormikContextType<any>;
}
