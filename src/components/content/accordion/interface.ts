import { ReactNode } from 'react';

type variants = 'default' | 'inline' | 'onlyBg';

export interface AccordionProps {
  list: AccordionList[];
  icon?: 'default' | 'arrow' | 'none';
  variant?: variants;
}

export interface AccordionList {
  title: string;
  description: string;
  isInnerHtml?: boolean;
  children?: ReactNode;
}

export interface AccordionStyles {
  variant?: variants;
}
