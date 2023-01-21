import { ReactNode } from 'react';

type align = 'left' | 'center' | 'right';

export interface TableProps {
  list: TableList;
  // variant?: 'default' | '';
  textAlign?: align;
  colorDivider?: boolean;
  size?: number;
}

type onClick = (e?: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;

export interface TableList {
  titles: string[];
  columns: rows[];
  onClick?: onClick;
}

export interface TableStyles {
  color?: string;
  click?: onClick;
  textAlign?: align;
  colorDivider?: boolean;
  size?: number;
}

type rows = string[] | ReactNode[];
