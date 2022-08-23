import { colors } from '../../../../global';

export type sizes = 'xXsmall' | 'small' | 'medium' | 'large' | 'xXlarge';
export type variants = 'transparent' | 'dark' | 'light';

export interface ModalConfigProps extends ModalConfigStyles {
  title: string;
  onClose: () => void;
  description?: string;
  closeButton?: string;
  tooltip?: string;
  isLoading?: boolean;
  onSubmit?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };
}

export interface ModalConfigStyles {
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
  transparent: colors.third,
  dark: colors.black,
  light: colors.white,
};
