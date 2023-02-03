import { ReactNode } from 'react';
import { colors } from 'src/global';

export type sizes = 'xXsmall' | 'small' | 'medium' | 'large' | 'xXlarge';
export type variants = 'transparent' | 'dark' | 'light';

export interface ModalProps extends ModalStyles {
  isVisible?: boolean;
  withoutBase?: boolean;
  title: string;
  onClose: () => void;
  description?: string;
  tooltip?: string;
  isLoading?: boolean;
  children?: ReactNode;
  onSubmit?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    isLoading?: boolean;
  };
}

export interface ModalStyles {
  size?: sizes;
  variant?: variants;
  isLoading?: boolean;
}

export const sizes = {
  xXsmall: '200px',
  small: '250px',
  medium: '300px',
  large: '350px',
  xXlarge: '400px',
};

export const variants = {
  transparent: colors.transparent,
  dark: colors.black,
  light: colors.white,
};
