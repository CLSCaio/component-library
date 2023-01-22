import { TlinkTypes, TlinkVariants } from 'src/types';

import { Routes } from '../../../../../router/interface';

export interface OpcProps {
  openMenu: React.Dispatch<React.SetStateAction<boolean>>;
  link?: {
    type?: TlinkTypes;
    colors?: [text: string, hover?: string];
    variant?: TlinkVariants;
  };
  routes: Routes[];
}
