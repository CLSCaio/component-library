export interface LinkProps extends LinkStyles {
  href: {
    pathname: `/${string}` | '/' | `#${string}` | `https://${string}`;
    rest?: object; // apenas pro next.js
    as?: string; // apenas pro next.js
  };
  label: string;
  type?: 'default' | 'next' | 'react';
  onClick?: () => void;
}
export interface LinkStyles {
  colors?: [text: string, hover?: string];
  variant?: 'default' | 'doubleLine' | 'underline';
}
