export interface LinkProps {
  href: `/${string}` | '/' | `#${string}` | `https://${string}`;
  label: string;
  type?: 'default' | 'next' | 'react';
  onClick?: () => void;
}
