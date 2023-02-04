import { TTextAlign } from '@types';

export interface DescriptionProps extends DescriptionStyles {
  text: string;
}

export interface DescriptionStyles {
  align?: TTextAlign;
  width?: number;
}
