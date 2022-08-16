import React, { ReactNode } from 'react';

export const sizes = {
  maxContent: 'max-content',
  block: '100%',
  default: '1266px',
};

type Sizes = 'maxContent' | 'block' | 'default';

export interface MainProps extends MainStyles {
  children: ReactNode;
}

export interface MainStyles {
  maxW?: Sizes;
  withPad?: boolean;
}
