import {
  CheckboxAndSwitchDefaultProps,
  CheckboxandSwitchExtendsProps,
} from '@types';

export interface SwitchProps extends CheckboxAndSwitchDefaultProps {
  name: string;
}

export interface SwitchStyles extends CheckboxandSwitchExtendsProps {
  active?: boolean;
  error?: string;
  checked?: boolean;
}
