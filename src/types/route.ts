import { TlinkTypes } from './type';
import { TlinkVariants } from './variants';

export type THref = `/${string}` | '/' | `#${string}` | `https://${string}`;

export type TRoutes = {
  href: THref;
  label: string;
  public?: boolean;
  exact?: boolean;
  onClick?: () => void;
};

export type TLink = {
  type?: TlinkTypes;
  colors?: [text: string, hover?: string];
  variant?: TlinkVariants;
};
