import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Base } from '@components';
import { medias } from '@global';
import { IsMobile, convertMedia } from '@utils';

import * as I from './interface';

export const Loading = ({
  isLoading,
  withoutBase,
  size = 200,
  color = 'black',
}: I.LoadingProps) =>
  isLoading ? (
    <Base withoutBase={withoutBase}>
      <ClipLoader
        size={IsMobile(convertMedia(medias.xXsmall)) ? 200 : size}
        color={color}
      />
    </Base>
  ) : null;
