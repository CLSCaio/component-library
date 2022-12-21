import { ReactNode } from 'react';

type variants = 'default' | 'inline' | 'onlyBg';

export interface AccordionProps extends AccordionStyles {
  list: AccordionList[];
  icon?: 'default' | 'arrow' | 'none';
}

type Digits =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f';
type Hexadecimal = `${Digits}${Digits}${Digits}`;

export interface AccordionList extends AccordionStyles {
  title: string;
  id?: string;
  description?: string;
  isInnerHtml?: boolean;
  children?: ReactNode;
}

export interface AccordionStyles {
  variant?: variants;
  maxW?: number;
  colors?: [
    bg?: `#${Hexadecimal}`,
    hover?: `#${Hexadecimal}`,
    border?: `#${Hexadecimal}`,
  ];
}
