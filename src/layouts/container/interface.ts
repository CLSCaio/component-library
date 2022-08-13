export const sizes = {
  maxContent: 'max-content',
  block: '100%',
  default: '1266px',
};

type Sizes = 'maxContent' | 'block' | 'default';
type Align = 'center' | 'flex-end' | 'flex-start';

export interface ContainerProps extends ContainerStyleProps {
  children: JSX.Element;
}

export interface ContainerStyleProps {
  gap?: { desktop: number; mobile?: number };
  direction?: 'row' | 'column';
  bgColor?: string;
  maxW?: number | Sizes;
  maxH?: number | Sizes;
  minH?: number | Sizes;
  w?: number | Sizes;
  h?: number | Sizes;
  pad?: { top: number; right: number; bottom: number; left: number };
  border?:
    | 'none'
    | {
        size: number;
        color: string;
        style: 'solid' | 'double' | 'dashed';
      };
  radius?:
    | 'none'
    | {
        size: number;
        style: '%' | 'px';
      };
  align?: Align;
  justify?: Align | 'space-between' | 'space-around' | 'space-evenly';
  mobileResponsive?: boolean;
  pos?: 'relative' | 'absolute';
}
