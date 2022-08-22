export interface LinkProps extends LinkStyles {
  href: `/${string}` | '/' | `#${string}` | `https://${string}`;
  label: string;
  type?: 'default' | 'next' | 'react';
  onClick?: () => void;
}
export interface LinkStyles {
  colors?: [text: string, hover?: string];
}
