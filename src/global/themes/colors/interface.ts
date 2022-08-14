export interface ColorsProps {
  primary: string;
  secundary: string;
  third?: string;

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

  error: string;
  warning: string;
  sucess: string;

  disabled: string;
  hover: string; // steelBlue,
  link: string;
  focus: string; // ciano,

  others: {
    1: string; // darkRed
    2: string; // lightGreen
    3: string; // indigo
    4: string; // lavender
    5: string; // midnightBlue
  };
}
