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

export interface LabelProps {
  name: string;
  position?: TLabel;
  bold?: boolean;
  tooltip?: string;
  required?: boolean;
}

export interface DefaultStylesProps {
  maxW?: Tsize;
  disabled?: boolean;
  readOnly?: boolean;
  border?: TBordersType;
  isLoading?: boolean;
}

export interface InputSelectDefaultExtends extends DefaultStylesProps {
  handleClean?: boolean;
  transform?: TTransformType;
}

interface InputSelectDefault extends InputSelectDefaultExtends {
  id?: string;
  label?: LabelProps;
  placeholder?: string;
}

export interface InputDefaultProps extends InputSelectDefault {
  mask?: masks;
  autoComplete?: 'off' | 'on';
  type?: TInputTypes;
}

export type OptionsSelectAndSelectSearchProps = {
  value: string;
};

export interface SelectDefaultProps extends InputSelectDefault {
  options?: OptionsSelectAndSelectSearchProps[];
  errorMessage?: string;
}

export interface SelectSearchDefaultProps extends SelectDefaultProps {
  forcedOption?: boolean;
  errorMessages?: [invalidOpção?: string, selectOption?: string];
}

export interface SliderRangeStylesExtends {
  variant?: 'singleThumb' | 'doubleThumb';
  position?:
    | 'horizontal'
    | 'horizontal-reverse'
    | 'vertical'
    | 'vertical-reverse';
}

type SliderRangePropsExtends = SliderRangeStylesExtends & DefaultStylesProps;

export type SliderRangeStylesExtendsProps = InputSelectDefaultStylesExtends &
  SliderRangePropsExtends;

export interface SliderRangeDefaultProps extends SliderRangePropsExtends {
  min?: number;
  max?: number;
  textMin?: string;
  textMax?: string;
  step?: 'default' | 'little' | 'very';
  label?: LabelProps;
  type?: 'number' | 'hour' | 'km' | 'money';
}

export interface FormComponentsProps {
  as: 'input' | 'select' | 'selectSearch' | 'sliderRange';
  name: [principal: string, secundary?: string];
  inputProps?: InputDefaultProps;
  sliderRangeProps?: SliderRangeDefaultProps;
  selectProps?: SelectDefaultProps;
  selectSearchProps?: SelectSearchDefaultProps;
}
