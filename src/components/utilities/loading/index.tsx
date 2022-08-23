import React, { useMemo } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import useBreakpoint from 'use-breakpoint';

import { medias } from '../../../global';

import { Base } from '../base';

import * as I from './interface';

export const Loading = ({
  isLoading,
  withoutBase,
  size = 200,
  color,
}: I.LoadingProps) => {
  const defaultBreakpoints = useMemo(
    () => ({
      mobile: 0,
      desktop:
        Number(
          medias.xXsmall.replace('@media (min-width:', '').replace('px)', ''),
        ) + 1,
    }),
    [],
  );

  const { breakpoint } = useBreakpoint(defaultBreakpoints, 'mobile');
  const isMobile = breakpoint === 'mobile';

  return isLoading ? (
    <Base withoutBase={withoutBase}>
      <ClipLoader size={isMobile ? 200 : size} color={color} />
    </Base>
  ) : null;
};
