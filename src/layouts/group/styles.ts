import styled, { css } from 'styled-components';
import { medias } from '../..';

import * as I from './interface';

export const Container = styled.div<I.GroupStyles>`
  display: flex;
  width: 100%;

  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  max-width: ${({ maxW }) =>
    maxW
      ? typeof maxW !== 'number'
        ? I.sizes[maxW]
        : `${maxW}px`
      : I.sizes.block};

  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap }) => (gap?.[1] ? `${gap[1]}px` : 0)};
  padding: ${({ pad }) =>
    pad ? `${pad[0]}px ${pad[1]}px ${pad[2]}px ${pad[3]}px` : 0};
  background-color: ${({ bgColor }) => bgColor};

  ${({ pos }) =>
    pos &&
    css`
      position: ${pos.style};
    `};

  ${({ pos }) =>
    pos?.top && pos.type
      ? css`
          top: ${pos.top}${pos.type};
        `
      : pos?.top &&
        css`
          top: ${pos.top}px;
        `};

  ${({ pos }) =>
    pos?.left && pos.type
      ? css`
          left: ${pos.left}${pos.type};
        `
      : pos?.left &&
        css`
          left: ${pos.left}px;
        `};

  ${({ pos }) =>
    pos?.bottom && pos.type
      ? css`
          bottom: ${pos.bottom}${pos.type};
        `
      : pos?.bottom &&
        css`
          bottom: ${pos.bottom}px;
        `};

  ${({ pos }) =>
    pos?.right && pos.type
      ? css`
          right: ${pos.right}${pos.type};
        `
      : pos?.right &&
        css`
          right: ${pos.right}px;
        `};

  ${medias.medium} {
    gap: ${({ gap }) => (gap?.[0] ? `${gap[0]}px` : 0)};
  }
`;
