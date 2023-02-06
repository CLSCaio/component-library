import { TlinkTypes, TlinkVariants, THref } from '@types';

import { ColorsProps } from '@global';

export interface LinkProps {
  href: THref;
  target?: '_target' | '_self' | '_top' | '_parent';
  label: string;
  type?: TlinkTypes | 'default';
  variant?: TlinkVariants;
  onClick?: () => void;
  nextConfig?: {
    replace?: boolean;
    as?: string;
    passHref?: boolean;
    shallow?: boolean;
  };
}
export interface LinkStyles {
  variant?: TlinkVariants;
  store?: ColorsProps | null;
}
