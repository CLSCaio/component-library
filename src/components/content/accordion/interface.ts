import { ReactNode } from 'react';

type variants = 'default' | 'inline' | 'onlyBg';

type Icons = 'default' | 'arrow' | 'none';

export interface AccordionProps extends AccordionStyles {
  list: AccordionList[];
  icon?: Icons;
}

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
  bgColor?: `#${string}`;
  hoverColor?: `#${string}`;
}

export interface ChangeIconProps {
  title: string;
  icon: Icons;
}
