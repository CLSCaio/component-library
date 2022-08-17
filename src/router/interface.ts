type width = 'default' | 'block';
type types = 'fixed' | 'static';

export type Routes = {
  path: string;
  name: string;
  component: JSX.Element;
  public?: boolean;
  exact?: boolean;
};

export interface RouterProps {
  routes: Routes[];
  withPad?: boolean;
  externalHeader?: JSX.Element;
  internalHeader?: {
    maxW?: width;
    type?: types;
    bgColor?: string;
  };
}
