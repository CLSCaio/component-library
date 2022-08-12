import React from 'react';
import { MediasDescription } from '../mediasDescription';

import { mediasMap } from './medias-vars-map';

export const SemanticMedias = () => (
  <MediasDescription mediasNames={mediasMap} />
);
