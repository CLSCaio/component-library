import styled, { css } from 'styled-components';
import { medias } from '../..';

import * as I from './interface';

export const Container = styled.div<I.ContainerStyles>`
  display: flex;

  flex-direction: ${({ direction }) => direction || 'row'};
  ${({ align, mobileResponsive }) =>
    mobileResponsive
      ? css`
          align-items: center;
        `
      : css`
          align-items: ${align || 'center'};
        `};
  ${({ justify, mobileResponsive }) =>
    mobileResponsive
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: ${justify || 'center'};
        `};

  gap: ${({ gap }) =>
    gap ? (gap.mobile ? `${gap.mobile}px` : `${gap.desktop}px`) : 0};
  padding: ${({ pad }) =>
    pad ? `${pad.top}px ${pad.right}px ${pad.bottom}px ${pad.left}px` : 0};

  background-color: ${({ bgColor }) => bgColor || 'transparent'};

  max-width: ${({ maxW }) =>
    maxW ? (typeof maxW === 'number' ? `${maxW}px` : I.sizes[maxW]) : '1280px'};
  max-height: ${({ maxH }) =>
    maxH ? (typeof maxH === 'number' ? `${maxH}px` : I.sizes[maxH]) : ''};

  min-height: ${({ minH }) =>
    minH ? (typeof minH === 'number' ? `${minH}px` : I.sizes[minH]) : ''};

  height: ${({ h }) =>
    h ? (typeof h === 'number' ? `${h}px` : I.sizes[h]) : ''};
  width: ${({ w }) =>
    w ? (typeof w === 'number' ? `${w}px` : I.sizes[w]) : '100%'};

  border-radius: ${({ radius }) =>
    radius === 'none'
      ? 'none'
      : radius
      ? `${radius?.size}${radius?.style}`
      : '16px'};

  border-width: ${({ border }) => (border === 'none' ? 'none' : border?.size)};
  border-color: ${({ border }) => (border === 'none' ? 'none' : border?.color)};
  border-style: ${({ border }) => (border === 'none' ? 'none' : border?.style)};

  position: ${({ pos }) => pos};

  ${medias.medium} {
    flex-direction: ${({ direction, mobileResponsive }) =>
      mobileResponsive && direction === 'column' ? 'row' : 'column'};
    ${({ align }) =>
      align
        ? css`
            align-items: ${align};
          `
        : css`
            align-items: center;
          `};
    ${({ justify }) =>
      justify
        ? css`
            justify-content: ${justify};
          `
        : css`
            justify-content: center;
          `};
    gap: ${({ gap }) => gap && `${gap.desktop}px`};
  }
`;
