import styled, { css } from 'styled-components';

import { convertAlign, convertJustify, convertSize } from 'src/typesConvert';
import { medias } from 'src/global';

import * as I from './interface';

export const Container = styled.div<I.GroupStyles>`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};

  align-items: ${({ align }) => convertAlign(align)};
  justify-content: ${({ justify }) => convertJustify(justify)};

  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
  width: ${({ w }) => convertSize('100%', w)};

  gap: ${({ gap }) => (!gap ? 0 : `${gap[0]}px`)};
  padding: ${({ pad }) =>
    pad ? `${pad[0]}px ${pad[1]}px ${pad[2]}px ${pad[3]}px` : 0};

  position: ${({ pos }) => pos?.type};
  ${({ pos }) =>
    pos &&
    css`
      top: ${pos.XY?.[0] || 0}%;
      right: ${pos.XY?.[1] || 0}%;
      bottom: ${pos.XY?.[2] || 0}%;
      left: ${pos.XY?.[3] || 0}%;
    `};

  ${medias.small} {
    gap: ${({ gap }) => (!gap ? 0 : `${gap?.[1] || gap?.[0]}px`)};
  }
`;
