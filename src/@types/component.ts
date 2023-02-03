import { TInputTypes, TBordersType, Tsize, TTransformType } from 'src/@types';

export interface InputSelectDefault {
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

export type OptionsSelectProps = {
  label: string;
  value: string | number;
};

export interface FormComponentsProps extends InputSelectDefault {
  options?: OptionsSelectProps[];
  type?: TInputTypes;
}
