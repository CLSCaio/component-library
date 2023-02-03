import { TRoutes, THeaderProps } from 'src/@types';

interface RoutesProps extends TRoutes {
  reactComponent?: JSX.Element;
}

export interface RouterProps {
  routes: RoutesProps[];
  mobileLayout?: boolean;
  externalHeader?: JSX.Element;
  internalHeader?: THeaderProps;
}

export type { RoutesProps };
