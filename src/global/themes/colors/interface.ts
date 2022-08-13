export interface ColorsProps {
  primary: string;
  secundary: string;

  // Text colors
  black: '#000000';
  white: '#ffffff';
  grey: {
    steel: '#708090';
    sky: '#B0C4DE';
    '600': '#363636';
    '500': '#4F4F4F';
    '400': '#696969';
    '300': '#808080';
    '200': '#A9A9A9';
    '100': '#C0C0C0';
  };

  // Support colors
  error: string;
  warning: string;
  sucess: string;

  // Element colors
  disabled: string;
  hover: string;
  link: string;
  focus: string;

  // Other colors
  others: {
    darkRed: '#940008';
    lightGreen: '#41f0a8';
    indigo: '#4B0082';
    lavender: '#e6e6fa';
    midnightBlue: '#191970';
  };
}
