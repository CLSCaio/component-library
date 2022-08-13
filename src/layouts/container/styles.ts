import styled from 'styled-components';
import { medias } from '../..';

import * as I from './interface';

export const Container = styled.div<I.ContainerStyleProps>`
  display: flex;

  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ direction, align }) =>
    !align ? (direction === 'column' ? 'center' : 'flex-start') : align};
  justify-content: ${({ direction, justify }) =>
    !justify ? (direction === 'column' ? 'flex-start' : 'center') : justify};

  gap: ${({ gap }) => (gap ? `${gap.mobile}px` || `${gap.desktop}px` : 0)};
  padding: ${({ pad }) => pad || '10px'};

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
    align-items: ${({ direction, align }) =>
      !align
        ? direction === 'row'
          ? 'flex-start'
          : 'center'
        : align === 'flex-start'
        ? 'center'
        : 'flex-start'};
    justify-content: ${({ direction, justify }) =>
      !justify
        ? direction === 'row'
          ? 'center'
          : justify === 'flex-start'
          ? 'center'
          : 'flex-start'
        : justify};
    gap: ${({ gap }) => gap && `${gap.desktop}px`};
  }
`;
