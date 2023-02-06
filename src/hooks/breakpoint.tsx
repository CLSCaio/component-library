import { useMemo } from 'react';
import useBreakpoint from 'use-breakpoint';

import { medias } from '@global';

type MediaQuery =
  | 'xSmall'
  | 'small'
  | 'default'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'huge';

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

export const mediaQuery = (
  media: MediaQuery | number,
): `@media (min-width: ${number}px)` => {
  const validMedia: `@media (min-width: ${number}px)` =
    typeof media === 'number'
      ? `@media (min-width: ${media}px)`
      : `@media (min-width: ${medias[media]}px)`;
  return validMedia;
};
