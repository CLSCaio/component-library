import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Base } from '@components';
import { medias } from '@global';
import { IsMobile } from '@hooks';

import * as I from './interface';

export const Loading = ({
  isLoading,
  withoutBase,
  size = 200,
  color = 'black',
}: I.LoadingProps) =>
  isLoading ? (
    <Base withoutBase={withoutBase}>
      <ClipLoader size={IsMobile(medias.xSmall) ? 200 : size} color={color} />
    </Base>
  ) : null;
