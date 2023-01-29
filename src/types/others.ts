import { IconType } from 'react-icons';

export type TTransformType = 'capitalize' | 'lowercase' | 'uppercase';
export type TBordersType = 'outline' | 'inline';
export type TXy = [top: number, right: number, bottom: number, left: number];
export type Tsize = 'block' | number | 'maxContent' | 'default';

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
