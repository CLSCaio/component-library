import { IconType } from 'react-icons';
import { THeaderTypes, Tsize, TLink } from './index';

export type THeaderBarDefaultProps = {
  closeIcon?: IconType;
  openIcon?: IconType;
  titleIcon?: IconType;
  title?: string;
  img?: {
    url: string;
    alt?: string;
  };
};

export interface TDefaultTypes {
  bgColor?: string;
  type?: THeaderTypes;
  maxW?: Tsize;
}

type THeaderExtendsProps = TDefaultTypes & THeaderBarDefaultProps;

export interface THeaderProps extends THeaderExtendsProps {
  link?: TLink;
  withoutBorder?: boolean;
}
