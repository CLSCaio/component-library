import { Router } from '../../router/interface';

export const sizes = {
  block: '100%',
  default: '1280px',
};

type width = 'default' | 'block';
type types = 'fixed' | 'default';

export interface HeaderProps {
  routes: Router[];
  maxW?: width;
  type?: types;
  bgColor?: string;
}

export interface HeaderStyleProps {
  menu?: boolean;
  maxW?: width;
  type?: types;
  bgColor?: string;
}
