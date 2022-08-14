export interface ButtonProps extends ButtonStyleProps {
  isLoading?: boolean;
  label: string;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
}

type maxW = 'block' | number | 'max-content';

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};

export interface ButtonStyleProps {
  variant?: 'outline' | 'outline-reverse' | 'pulse' | 'floating' | 'default';

  maxW?: maxW;
  disabled?: boolean;
}
