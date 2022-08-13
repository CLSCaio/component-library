import styled from 'styled-components';
import { medias } from '../..';

import * as I from './interface';

export const Container = styled.span<I.GroupStylesProps>`
  display: flex;
  width: 100%;

  align-items: ${({ align }) => align};

  max-width: ${({ maxW }) =>
    maxW
      ? typeof maxW !== 'number'
        ? I.sizes[maxW]
        : `${maxW}px`
      : I.sizes.block};

  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap }) =>
    gap ? (gap.mobile ? `${gap.mobile}px` : `${gap.desktop}px`) : 0};
  padding: ${({ pad }) =>
    pad ? `${pad.top}px ${pad.right}px ${pad.bottom}px ${pad.left}px` : 0};
  background-color: ${({ bgColor }) => bgColor};

  ${medias.medium} {
    gap: ${({ gap }) => (gap ? `${gap.desktop}px` : 0)};
  }
`;
