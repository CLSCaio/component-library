import { TbuttonVariants, Tsize, TbuttonTypes } from '@types';
import { IconType } from 'react-icons';

export interface ButtonProps extends ButtonDefaultStyle {
  isLoading?: boolean;
  label: string;
  className?: string;
  id?: string;
  icon?: IconType;
  type?: TbuttonTypes;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type ButtonStyle = ButtonDefaultStyle;

export interface ButtonDefaultStyle {
  variant?: TbuttonVariants;
  maxW?: Tsize;
  disabled?: boolean;
  withShadow?: boolean;
}
