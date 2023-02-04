export interface ColorsProps {
  primary: `#${string}`;
  secundary: `#${string}`;
  disabled: `#${string}`;
  transparent: `rgba(${string})`;

  black: '#000000';
  white: '#ffffff';

  grey: {
    '800': '#708090';
    '700': '#B0C4DE';
    '600': '#363636';
    '500': '#4F4F4F';
    '400': '#696969';
    '300': '#808080';
    '200': '#A9A9A9';
    '100': '#C0C0C0';
  };

  button: {
    primary: `#${string}`;
    secundary: `#${string}`;
    floating: `#${string}`;
    shadow: `#${string}`;
  };

  link: {
    primary: `#${string}`;
    hover: `#${string}`;
  };

  table: {
    title: `#${string}`;
    separator: `#${string}`;
  };

  forms: {
    primary: `#${string}`;
    border: `#${string}`;
    focus: `#${string}`;
    hover: `#${string}`;
  };

  suport: {
    error: `#${string}`;
    warning: `#${string}`;
    sucess: `#${string}`;
  };

  others: {
    1: `#${string}`;
    2: `#${string}`;
    3: `#${string}`;
    4: `#${string}`;
    5: `#${string}`;
    6: `#${string}`;
    7: `#${string}`;
    8: `#${string}`;
  };
}
