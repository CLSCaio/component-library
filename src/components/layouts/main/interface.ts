import { ReactNode } from 'react';

export interface MainProps extends MainStyles {
  children: ReactNode;
}

export interface MainStyles {
  maxW?: 'default' | '1280px';
  mobileLayout?: boolean;
  calcMinHeight?: number;
}
