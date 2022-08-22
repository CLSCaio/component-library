export interface LinkProps {
  link: string;
  label: string;
  type?: 'default' | 'next' | 'react';
  onClick?: () => void;
}
