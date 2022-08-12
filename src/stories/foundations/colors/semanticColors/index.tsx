import React from 'react';
import { ColorsDescription } from '../colorsDescription';

import { colorsMap } from './colors-vars-map';

export const SemanticColors = () => (
  <ColorsDescription colorNames={colorsMap} />
);
