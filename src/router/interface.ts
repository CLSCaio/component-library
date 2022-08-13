type width = 'default' | 'block';
type types = 'fixed' | 'default';

export type Router = {
  path: string;
  name: string;
  component: JSX.Element;
  public?: boolean;
  exact?: boolean;
};

export interface RouterProps {
  routes: Router[];
  externalHeader?: JSX.Element;
  internalHeader?: {
    maxW?: width;
    type?: types;
    bgColor?: string;
  };
}
