import { THeaderTypes, TLink, TRoutes, Tsize } from 'src/types';

interface DefaultTypes {
  bgColor?: string;
  type?: THeaderTypes;
  maxW?: Tsize;
}

export interface HeaderProps extends DefaultTypes {
  link?: TLink;
  title?: string;
  routes: TRoutes[];
}

export interface HeaderStyles extends DefaultTypes {
  menu?: boolean;
  routes?: TRoutes[];
}
