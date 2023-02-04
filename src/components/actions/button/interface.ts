import { TbuttonVariants, Tsize, TbuttonTypes } from '@types';

export interface ButtonProps extends ButtonStyle {
  isLoading?: boolean;
  label: string;
  className?: string;
  id?: string;
  type?: TbuttonTypes;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ButtonStyle {
  variant?: TbuttonVariants;
  maxW?: Tsize;
  disabled?: boolean;
  withShadow?: boolean;
}
