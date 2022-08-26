import { ReactNode } from 'react';

export interface TableProps {
  list: TableList;
  variant?: 'default' | '';
}

export interface TableList {
  titles: string[];
  columns: rows[];
  onClick?: () => void;
}

export interface TableStyles {
  color?: string;
  click?: () => void;
}

type rows = string[] | ReactNode[];
