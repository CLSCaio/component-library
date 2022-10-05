import { ReactNode } from 'react';

type variants = 'default' | 'inline' | 'onlyBg';

export interface AccordionProps extends AccordionStyles {
  list: AccordionList[];
  icon?: 'default' | 'arrow' | 'none';
}

export interface AccordionList {
  title: string;
  id?: string;
  description?: string;
  isInnerHtml?: boolean;
  children?: ReactNode;
}

export interface AccordionStyles {
  variant?: variants;
  maxW?: number;
}
