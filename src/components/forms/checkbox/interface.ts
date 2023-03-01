import {
  CheckboxAndSwitchDefaultProps,
  CheckboxandSwitchExtendsProps,
} from '@types';

export interface CheckboxProps extends CheckboxAndSwitchDefaultProps {
  name: string;
}

export interface CheckboxStyles extends CheckboxandSwitchExtendsProps {
  active?: boolean;
  error?: string;
}
