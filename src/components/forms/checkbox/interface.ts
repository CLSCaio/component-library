import { CheckboxDefaultProps, CheckBoxExtendsProps } from '@types';

export interface CheckboxProps extends CheckboxDefaultProps {
  name: string;
}

export interface CheckboxStyles extends CheckBoxExtendsProps {
  active?: boolean;
  error?: string;
}
