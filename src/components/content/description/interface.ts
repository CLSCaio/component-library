import { TTextAlign } from 'src/@types';

export interface DescriptionProps extends DescriptionStyles {
  text: string;
}

export interface DescriptionStyles {
  align?: TTextAlign;
  width?: number;
}
