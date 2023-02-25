import React from 'react';

import { Horizontal } from './horizontal';
import { Vertical } from './vertical';

import * as I from './interface';

export const SliderRange = ({
  position = 'horizontal',
  ...rest
}: I.SliderRangeProps) =>
  position === 'horizontal' || position === 'horizontal-reverse' ? (
    <Horizontal {...rest} position={position} />
  ) : (
    <Vertical {...rest} position={position} />
  );
