import { ReactNode } from 'react';

export interface BaseProps extends BaseStyles {
  children: ReactNode;
}

export interface BaseStyles {
  withoutBase?: boolean;
}
