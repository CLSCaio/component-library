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
  withHeader?: {
    header?: boolean;
    maxW?: width;
    type?: types;
    bgColor?: string;
  };
}
