import { THeaderTypes, Tsize, TLink, THeaderBarDefaultProps } from 'src/@types';

export interface DefaultTypes {
  bgColor?: string;
  type?: THeaderTypes;
  maxW?: Tsize;
}

type HeaderExtendsProps = DefaultTypes & THeaderBarDefaultProps;

export interface THeaderProps extends HeaderExtendsProps {
  link?: TLink;
  withoutBorder?: boolean;
}
