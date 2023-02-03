import { THeaderBarDefaultProps } from 'src/@types';

export interface BarProps extends THeaderBarDefaultProps {
  menu: boolean;
  openMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
