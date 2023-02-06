import { ColorsProps } from '@global';
import { TbuttonVariants, Tsize, TbuttonTypes } from '@types';

export interface ButtonProps extends ButtonDefaultStyle {
  isLoading?: boolean;
  label: string;
  className?: string;
  id?: string;
  type?: TbuttonTypes;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ButtonStyle extends ButtonDefaultStyle {
  user_colors?: ColorsProps | null;
}

export interface ButtonDefaultStyle {
  variant?: TbuttonVariants;
  maxW?: Tsize;
  disabled?: boolean;
  withShadow?: boolean;
}
