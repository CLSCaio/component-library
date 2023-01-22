import { TbuttonVariants, Tsize, TbuttonTypes } from 'src/types';

type colors = {
  primary?: string;
  secundary?: string;
  third?: string;
};

export interface ButtonProps extends ButtonStyle {
  isLoading?: boolean;
  label: string;
  className?: string;
  id?: string;
  type?: TbuttonTypes;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ButtonStyle {
  variant?: TbuttonVariants;
  colors?: colors;
  maxW?: Tsize;
  disabled?: boolean;
}
