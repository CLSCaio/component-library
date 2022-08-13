import { Router } from '../../../../../router/interface';

export interface OpcProps {
  openMenu: React.Dispatch<React.SetStateAction<boolean>>;
  routes: Router[];
}
