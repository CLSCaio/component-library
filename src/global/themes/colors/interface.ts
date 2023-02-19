export interface ColorsProps {
  primary: `#${string}`;
  secundary: `#${string}`;

  transparent: 'rgba(0, 0, 0, 0.6)' | 'rgba(255, 255, 255, 0.7)';
  black: '#000000' | '#1b1e23' | '#202020';
  white: '#ffffff' | '#F5F5F5' | '#E6E6E6';

  support: {
    error: `#${string}`;
    warning: `#${string}`;
    sucess: `#${string}`;
    disabled: `#${string}`;
  };

  text: {
    1: `#${string}`;
    2: `#${string}`;
    3: `#${string}`;
    4: `#${string}`;
    5: `#${string}`;
    6: `#${string}`;
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
    9: `#${string}`;
  };
}
