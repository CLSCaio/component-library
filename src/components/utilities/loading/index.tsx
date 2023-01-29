import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { medias, IsMobile, convertMedia, Base } from 'src';

import * as I from './interface';

export const Loading = ({
  isLoading,
  withoutBase,
  size = 200,
  color,
}: I.LoadingProps) =>
  isLoading ? (
    <Base withoutBase={withoutBase}>
      <ClipLoader
        size={IsMobile(convertMedia(medias.xXsmall)) ? 200 : size}
        color={color}
      />
    </Base>
  ) : null;
