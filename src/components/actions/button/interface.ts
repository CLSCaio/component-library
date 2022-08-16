export type maxWs = 'block' | number | 'max-content';
export type variants =
  | 'outline'
  | 'outline-reverse'
  | 'pulse'
  | 'floating'
  | 'default';

type colors = {
  primary?: string;
  secundary?: string;
  third?: string;
};

export const widths = {
  block: '100%',
  maxContent: 'max-content',
};

export interface ButtonProps extends ButtonStyle {
  isLoading?: boolean;
  label: string;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

export interface ButtonStyle {
  variant?: variants;
  colors?: colors;
  maxW?: maxWs;
  disabled?: boolean;
}
