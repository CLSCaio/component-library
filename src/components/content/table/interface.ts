import { TTextAlign, Tsize, TTransformType } from '@types';

type TTitles = {
  name: string;
  width?: number;
  textAlign?: TTextAlign;
  textTransform?: TTransformType;
};

type Divider = 'pair' | 'unpaired';

export interface TableProps {
  titles: TTitles[];
  list: any[];
  withDivider?: Divider;
  size?: Tsize;
  globalTextAlign?: TTextAlign;
  withHover?: boolean;
}

export interface TableStyles {
  color?: string;
  textAlign?: TTextAlign;
  withDivider?: Divider;
  size?: Tsize;
  width?: number;
  transform?: TTransformType;
  withHover?: boolean;
}
