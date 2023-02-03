import { TRoutes, TDefaultTypes, THeaderProps } from '../../../types';

export interface HeaderProps extends THeaderProps {
  routes: TRoutes[];
}

export interface HeaderStyles extends TDefaultTypes {
  menu?: boolean;
  withoutBorder?: boolean;
  routes?: TRoutes[];
}
