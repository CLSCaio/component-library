import { TRoutes, DefaultTypes, THeaderProps } from 'src/types';

export interface HeaderProps extends THeaderProps {
  routes: TRoutes[];
}

export interface HeaderStyles extends DefaultTypes {
  menu?: boolean;
  routes?: TRoutes[];
}
