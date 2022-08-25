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
  isActive?: boolean;
}

export interface AccordionStyles {
  variant?: variants;
}
