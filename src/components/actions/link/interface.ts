import { TlinkTypes, TlinkVariants, THref } from '@types';

export interface LinkProps {
  href: THref;
  target?: '_target' | '_self' | '_top' | '_parent';
  label: string;
  type?: TlinkTypes | 'default';
  variant?: TlinkVariants;
  onClick?: () => void;
}
export interface LinkStyles {
  variant?: TlinkVariants;
}
