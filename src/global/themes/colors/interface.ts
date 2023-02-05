type TOthers = {
  [key: number | string]: `#${string}`;
};

export interface ColorsProps {
  primary?: `#${string}`;
  secundary?: `#${string}`;

  disabled?: `#${string}`;

  transparent?: 'rgba(0, 0, 0, 0.6)' | 'rgba(255, 255, 255, 0.7)';
  black?: '#000000' | '#1b1e23' | '#202020';
  white?: '#ffffff' | '#F5F5F5' | '#E6E6E6';

  text?: TOthers;
  others?: TOthers;

  button?: {
    primary?: `#${string}`;
    secundary?: `#${string}`;
    floating?: `#${string}`;
    shadow?: `#${string}`;
  };

  link?: {
    primary?: `#${string}`;
    hover?: `#${string}`;
  };

  table?: {
    title?: `#${string}`;
    separator?: `#${string}`;
    border?: `#${string}`;
  };

  forms?: {
    primary?: `#${string}`;
    border?: `#${string}`;
    focus?: `#${string}`;
    hover?: `#${string}`;
  };

  support?: {
    error?: `#${string}`;
    warning?: `#${string}`;
    sucess?: `#${string}`;
  };
}
