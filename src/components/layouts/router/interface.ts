import { THeaderTypes, TlinkVariants, TRoutes, Tsize } from 'src/types';

interface RoutesProps extends TRoutes {
  reactComponent?: JSX.Element;
}

export interface RouterProps {
  routes: RoutesProps[];
  mobileLayout?: boolean;
  externalHeader?: JSX.Element;
  internalHeader?: {
    maxW?: Tsize;
    type?: THeaderTypes;
    bgColor?: string;
    link?: {
      colors?: [text: string, hover?: string];
      variant?: TlinkVariants;
    };
  };
}

export type { RoutesProps };
