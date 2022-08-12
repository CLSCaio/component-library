import { ReactNode } from 'react';

export const sizes = {
  'max-content': 'max-content',
  block: '100%',
  default: '1280px',
};

export interface GroupProps extends GroupStylesProps {
  children: ReactNode;
}

export interface GroupStylesProps {
  maxW?: 'default' | 'block' | 'max-content' | number;
  direction?: 'row' | 'column';
  pad?: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  gap?: { desktop: number; mobile: number };
  bgColor?: string;
}
