import { ReactNode } from 'react';
import { Tsize, TAlignOrJustify, TJustify, TXy } from '../../../@types';

export interface GroupProps extends GroupStyles {
  children: ReactNode;
}

export interface GroupStyles {
  pad?: TXy;
  display?: 'flex' | 'none';
  gap?: [desktop: number, mobile?: number];
  direction?: 'row' | 'column';
  maxW?: Tsize;
  w?: Tsize;
  align?: TAlignOrJustify;
  justify?: TJustify;
  pos?: {
    type: 'relative' | 'absolute';
    XY?: TXy;
  };
}
