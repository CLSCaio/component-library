import { useMemo } from 'react';
import useBreakpoint from 'use-breakpoint';

import { BreakpointConvertMedia } from './interface';

export const IsMobile = (size: number) => {
  const defaultBreakpoints = useMemo(
    () => ({
      mobile: 0,
      desktop: size + 1,
    }),
    [],
  );

  const { breakpoint } = useBreakpoint(defaultBreakpoints, 'mobile');
  const validMobile = breakpoint === 'mobile';

  return validMobile;
};

export const convertMedia = (media: BreakpointConvertMedia) => {
  const convertedMedia = Number(
    media.replace('@media (min-width:', '').replace('px)', ''),
  );
  return convertedMedia;
};
