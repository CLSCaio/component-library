type width = 'default' | 'block';
type types = 'fixed' | 'static';

export type Routes = {
  href: `/${string}` | '/' | `#${string}` | `https://${string}`;
  label: string;
  reactComponent?: JSX.Element;
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
    link?: {
      color?: [text: string, hover?: string];
      variant?: 'default' | 'doubleLine' | 'underline';
    };
  };
}
