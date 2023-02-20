import { SliderRangeStylesExtendsProps, SliderRangeDefaultProps } from '@types';

export interface SliderRangeStyles extends SliderRangeStylesExtendsProps {
  left?: number;
  right?: number;
}

export interface SliderRangeProps extends SliderRangeDefaultProps {
  name: [leftThumb: string, rightThumb: string];
}
