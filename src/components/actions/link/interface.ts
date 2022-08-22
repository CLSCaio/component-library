import { ReactNode } from 'react';

export interface LinkProps {
  link: `/${string}` | '/';
  type?: 'default' | 'next' | 'react';
  onClick?: () => void;
  children: ReactNode;
}
