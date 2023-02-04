import styled, { css } from 'styled-components';

import { convertAlign, convertJustify, convertSize } from '@convert';
import { medias } from 'src/global';

import * as I from './interface';

export const Container = styled.div<I.ContainerStyles>`
  gap: ${({ gap }) => (!gap ? 0 : `${gap?.[1] || gap?.[0]}px`)};
  padding: ${({ pad }) =>
    pad ? `${pad[0]}px ${pad[1]}px ${pad[2]}px ${pad[3]}px` : 0};

  background-color: ${({ bgColor }) => bgColor || 'transparent'};

  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
  max-height: ${({ maxH }) => convertSize(undefined, maxH)};

  min-height: ${({ minH }) => convertSize(undefined, minH)};

  height: ${({ h }) => convertSize(undefined, h)};
  width: ${({ w }) => convertSize('100%', w)};

  border-radius: ${({ border }) =>
    !border
      ? '0'
      : css`
          ${border[3]?.size}${border[3]?.style}
        `};

  border: ${({ border }) =>
    !border
      ? 'none'
      : css`
          ${border[0]}px ${border[2]} ${border[1]}
        `};

  position: ${({ pos }) => pos?.type};
  ${({ pos }) =>
    pos &&
    css`
      top: ${pos.XY?.[0] || 0}%;
      right: ${pos.XY?.[1] || 0}%;
      bottom: ${pos.XY?.[2] || 0}%;
      left: ${pos.XY?.[3] || 0}%;
    `};

  ${({ mobileResponsive }) =>
    !mobileResponsive
      ? css<I.ContainerStyles>`
          display: ${({ display }) => display || 'flex'};
          flex-direction: ${({ direction }) => direction || 'row'};
          align-items: ${({ align }) => convertAlign(align)};
          justify-content: ${({ justify }) => convertJustify(justify)};
        `
      : css<I.ContainerStyles>`
          display: flex;
          flex-direction: ${mobileResponsive};
          align-items: ${({ align }) =>
            !align
              ? mobileResponsive === 'row'
                ? 'flex-start'
                : 'center'
              : convertAlign(align)};
          justify-content: ${({ justify }) =>
            !justify
              ? mobileResponsive === 'row'
                ? 'center'
                : 'flex-start'
              : convertJustify(justify)};

          ${medias.small} {
            flex-direction: ${mobileResponsive === 'row' ? 'column' : 'row'};
            align-items: ${({ align }) =>
              !align
                ? mobileResponsive === 'column'
                  ? 'flex-start'
                  : 'center'
                : convertAlign(align)};
            justify-content: ${({ justify }) =>
              !justify
                ? mobileResponsive === 'column'
                  ? 'center'
                  : 'flex-start'
                : convertJustify(justify)};
          }
        `}

  ${medias.small} {
    gap: ${({ gap }) => (!gap ? 0 : `${gap[0]}px`)};
  }
`;
