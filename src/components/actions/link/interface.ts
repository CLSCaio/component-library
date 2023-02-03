import { TlinkTypes, TlinkVariants, THref } from '../../../types';

export interface HrefProps {
  defautlLink: THref;

  // apenas pro next.js
  customLink?: {
    pathname: THref;
    rest?: object;
  };
  as?: string;
}

export interface LinkProps extends LinkStyles {
  href: HrefProps;
  label: string;
  type?: TlinkTypes | 'default';
  onClick?: () => void;
}
export interface LinkStyles {
  variant?: TlinkVariants;
}
