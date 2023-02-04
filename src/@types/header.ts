import { THeaderTypes, Tsize, TLink, THeaderBarDefaultProps } from './index';

export interface TDefaultTypes {
  bgColor?: string;
  type?: THeaderTypes;
  maxW?: Tsize;
}

type HeaderExtendsProps = TDefaultTypes & THeaderBarDefaultProps;

export interface THeaderProps extends HeaderExtendsProps {
  link?: TLink;
  withoutBorder?: boolean;
}
