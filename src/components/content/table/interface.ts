import { ColorsProps } from '@global';
import { TTextAlign, Tsize, TTransformType } from '@types';

type TTitles = {
  name: string;
  width?: number;
  textAlign?: TTextAlign;
  textTransform?: TTransformType;
};

type Divider = 'pair' | 'unpaired';

export interface TableProps extends TableDefaultStyles {
  titles: TTitles[];
  list: any[];
  withDivider?: Divider;
  size?: Tsize;
  globalTextAlign?: TTextAlign;
  withHover?: boolean;
}

export interface TableStyles extends TableDefaultStyles {
  color?: string;
  textAlign?: TTextAlign;
  width?: number;
  transform?: TTransformType;
  store?: ColorsProps | null;
}

export interface TableDefaultStyles {
  withHover?: boolean;
  size?: Tsize;
  withDivider?: Divider;
}
