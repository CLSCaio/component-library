import {
  SliderRangeStylesExtendsProps,
  SliderRangeDefaultProps,
  InputSelectDefaultStylesExtends,
} from '@types';

type SliderPropsExtendsStyles = InputSelectDefaultStylesExtends &
  SliderRangeStylesExtendsProps;

export interface SliderRangeStyles extends SliderPropsExtendsStyles {
  left?: number;
  right?: number;
}

export interface SliderRangeProps extends SliderRangeDefaultProps {
  name: [leftThumb: string, rightThumb: string];
}
