export interface DescriptionProps extends DescriptionStyles {
  text: string;
}

export interface DescriptionStyles {
  align?: 'center' | 'start' | 'end';
  width?: number;
}
