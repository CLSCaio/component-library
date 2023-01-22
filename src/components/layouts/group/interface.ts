import { ReactNode } from 'react';

export const sizes = {
  'max-content': 'max-content',
  block: '100%',
  default: '1280px',
};

type align = 'center' | 'flex-end' | 'flex-start';

export interface GroupProps extends GroupStyles {
  children: ReactNode;
}

export interface GroupStyles {
  maxW?: 'default' | 'block' | 'max-content' | number;
  direction?: 'row' | 'column';
  pad?: [top: number, right: number, bottom: number, left: number];
  gap?: [desktop?: number, mobile?: number];
  border?:
    | 'none'
    | {
        size: number;
        color: string;
        style: 'solid' | 'double' | 'dashed';
        radius?: {
          size: number;
          style: '%' | 'px';
        };
      };
  bgColor?: string;
  align?: align;
  justify?: align | 'space-around' | 'space-evenly' | 'space-between';
  pos?: {
    style: 'relative' | 'absolute' | 'fixed';
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    type?: 'px' | '%';
  };
}
