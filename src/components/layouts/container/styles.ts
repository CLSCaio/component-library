import styled, { css } from 'styled-components';
import { medias } from '../../../global';

import * as I from './interface';

export const Container = styled.div<I.ContainerStyles>`
  display: flex;

  flex-direction: ${({ direction, mobileResponsive }) =>
    mobileResponsive ? 'column' : direction || 'row'};
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

  gap: ${({ gap }) => (gap?.[1] ? `${gap[1]}px` : 0)};
  padding: ${({ pad }) =>
    pad ? `${pad[0]}px ${pad[1]}px ${pad[2]}px ${pad[3]}px` : 0};

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

  border-radius: ${({ border }) =>
    border && border !== 'none'
      ? `${border?.radius?.size}${border?.radius?.style}`
      : 'none'};

  border-width: ${({ border }) =>
    border && border !== 'none' ? `${border.size}px` : 'none'};
  border-color: ${({ border }) =>
    border && border !== 'none' ? border.color : 'none'};
  border-style: ${({ border }) =>
    border && border !== 'none' ? border.style : 'none'};

  position: ${({ pos }) => pos};

  ${medias.medium} {
    flex-direction: ${({ direction, mobileResponsive }) =>
      mobileResponsive ? 'row' : direction || 'column'};
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
    gap: ${({ gap }) => (gap?.[0] ? `${gap[0]}px` : 0)};
  }
`;
