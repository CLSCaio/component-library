import { ReactNode } from 'react';

type align = 'left' | 'center' | 'right';

export interface TableProps {
  list: TableList;
  // variant?: 'default' | '';
  textAlign?: align;
  colorDivider?: boolean;
  size?: number;
}

export interface TableList {
  titles: string[];
  columns: rows[];
  onClick?: () => void;
}

export interface TableStyles {
  color?: string;
  click?: () => void;
  textAlign?: align;
  colorDivider?: boolean;
  size?: number;
}

type rows = string[] | ReactNode[];
