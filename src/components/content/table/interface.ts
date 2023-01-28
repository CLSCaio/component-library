import { ReactNode } from 'react';
import { TTextAlign, Tsize } from 'src/types';

export interface TableProps {
  list: TableList;
  // variant?: 'default' | '';
  textAlign?: TTextAlign;
  colorDivider?: boolean;
  size?: Tsize;
}

type onClick = (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;

export interface TableList {
  titles: string[];
  columns: rows[];
  onClick?: onClick;
}

export interface TableStyles {
  color?: string;
  click?: onClick;
  textAlign?: TTextAlign;
  colorDivider?: boolean;
  size?: Tsize;
}

type rows = string[] | ReactNode[];
