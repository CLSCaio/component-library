type link = `/${string}` | '/' | `https://${string}`;

export interface HrefProps {
  defautlLink: link | `#${string}`;

  // apenas pro next.js
  customLink?: {
    pathname: link;
    rest?: object;
  };
  as?: string;
}

export interface LinkProps extends LinkStyles {
  href: HrefProps;
  label: string;
  type?: 'default' | 'next' | 'react';
  onClick?: () => void;
}
export interface LinkStyles {
  colors?: [text: string, hover?: string];
  variant?: 'default' | 'doubleLine' | 'underline';
}
