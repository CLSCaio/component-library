import { ReactNode } from 'react';
import { Tsize, TAlignOrJustify, TJustify, TXy } from '../../../types';

export interface ContainerProps extends ContainerStyles {
  children: ReactNode;
}

type borderStyle = 'solid' | 'double' | 'dashed';
type radiusStyle = {
  size: number;
  style: '%' | 'px';
};

export interface ContainerStyles {
  pad?: TXy;
  display?: 'flex' | 'none';
  gap?: [desktop: number, mobile?: number];
  direction?: 'row' | 'column';
  bgColor?: string;
  maxW?: Tsize;
  maxH?: Tsize;
  minH?: Tsize;
  w?: Tsize;
  h?: Tsize;
  border?: [
    size: number,
    color: string,
    style: borderStyle,
    radius?: radiusStyle,
  ];

  align?: TAlignOrJustify;
  justify?: TJustify;
  mobileResponsive?: 'row' | 'column';
  pos?: {
    type: 'relative' | 'absolute';
    XY?: TXy;
  };
}
