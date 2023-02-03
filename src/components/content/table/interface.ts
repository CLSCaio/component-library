import { TTextAlign, Tsize, TTransformType } from '../../../@types';

type TTitles = {
  name: string;
  width?: number;
  textAlign?: TTextAlign;
  textTransform?: TTransformType;
};

export interface TableProps {
  titles: TTitles[];
  list: any[];
  withDivider?: boolean;
  size?: Tsize;
  globalTextAlign?: TTextAlign;
  withHover?: boolean;
}

export interface TableStyles {
  color?: string;
  textAlign?: TTextAlign;
  withDivider?: boolean;
  size?: Tsize;
  width?: number;
  transform?: TTransformType;
  withHover?: boolean;
}
