type width = 'default' | 'block';
type types = 'fixed' | 'default';

export type Routes = {
  path: string;
  name: string;
  component: JSX.Element;
  public?: boolean;
  exact?: boolean;
};

export interface RouterProps {
  routes: Routes[];
  externalHeader?: JSX.Element;
  internalHeader?: {
    maxW?: width;
    type?: types;
    bgColor?: string;
  };
}
