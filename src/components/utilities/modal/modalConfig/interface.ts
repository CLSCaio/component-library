import { colors } from '../../../../global';

export type sizes = 'small' | 'medium' | 'large';
export type variants = 'transparent' | 'dark' | 'light';

export interface ModalConfigProps extends ModalConfigStyles {
  title: string;
  onClose: () => void;
  description?: string;
  closeButton?: string;
  tooltip?: string;
  onSubmit?: {
    isLoading?: boolean;
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };
}

export interface ModalConfigStyles {
  size?: sizes;
  variant?: variants;
}

export const sizes = {
  small: '200px',
  medium: '300px',
  large: '400px',
};

export const variants = {
  transparent: colors.third,
  dark: colors.black,
  light: colors.white,
};