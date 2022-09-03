type link = `/${string}` | '/' | `https://${string}`;

export interface LinkProps extends LinkStyles {
  href: {
    defautlLink: link | `#${string}`;
    customLink?: {
      // apenas pro next.js
      pathname: link;
      rest?: object;
    };
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
