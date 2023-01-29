import { TLink, TRoutes } from 'src/types';

export interface OpcProps {
  openMenu: React.Dispatch<React.SetStateAction<boolean>>;
  link?: TLink;
  routes: TRoutes[];
}
