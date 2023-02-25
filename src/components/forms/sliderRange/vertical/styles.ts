import styled, { css } from 'styled-components';

import ClipLoader from 'react-spinners/ClipLoader';

import { convertSize } from '@convert';
import { colors, fonts } from '@global';

import * as I from '../interface';

export const Container = styled.div<I.SliderRangeStyles>`
  display: flex;

  transform: rotate(90deg);
  align-items: center;

  position: relative;

  gap: 10px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
`;

export const HStack = styled.span`
  display: flex;
  width: max-content;
  gap: 10px;
  align-items: center;

  transform: rotate(-90deg);
`;

export const Label = styled.label<I.SliderRangeStyles>`
  color: ${colors.primary};
  font-size: ${fonts.sizes.default};

  ${({ boldLabel }) =>
    boldLabel &&
    css`
      font-weight: ${fonts.weights.bold};
    `};
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const textStyles = css`
  transform: rotate(-90deg);
  position: absolute;
  width: 250px;
  text-align: center;
`;

export const MinText = styled.p`
  ${textStyles};
  right: -145px;
`;

export const MaxText = styled.p`
  ${textStyles};
  left: -65px;
`;

export const Wrapper = styled.div`
  width: 100%;
  transform: rotate(180deg);
`;

export const Slider = styled.div<I.SliderRangeStyles>`
  height: 5px;
  position: relative;
  border-radius: 8px;

  ${({ position }) =>
    position === 'vertical'
      ? css`
          background: ${colors.primary};
        `
      : css`
          background: ${colors.secundary};
        `}
`;

export const Bar = styled.div<I.SliderRangeStyles>`
  height: 100%;
  left: ${({ left = 0 }) => `${left.toFixed(2)}%`};
  right: ${({ right = 0 }) => `${right.toFixed(2)}%`};
  border-radius: 8px;
  position: absolute;

  ${({ position }) =>
    position === 'vertical'
      ? css`
          background: ${colors.secundary};
        `
      : css`
          background: ${colors.primary};
        `}
`;

export const Field = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const SliderRange = styled.input<I.SliderRangeStyles>`
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;

  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  cursor: grab;

  ::-webkit-slider-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background: ${colors.white};
    border: 2px solid
      ${({ disabled }) =>
        !disabled ? colors.primary : colors.support.disabled};

    pointer-events: all;
    -webkit-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);

    :hover {
      box-shadow: 0px 0px 0px 5px rgb(38 60 112 / 16%);
    }

    :active {
      cursor: grabbing;
      box-shadow: 0px 0px 0px 8px rgb(38 60 112 / 16%);
    }
  }

  ::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border: none;
    border-radius: 50%;
    background: ${colors.white};
    border: 2px solid
      ${({ disabled }) =>
        !disabled ? colors.primary : colors.support.disabled};
    pointer-events: all;
    -moz-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  }

  :disabled {
    cursor: not-allowed;
    pointer-events: none;

    ::-webkit-slider-thumb {
      cursor: not-allowed;
      :hover {
        box-shadow: none;
      }
    }
  }
`;

const Loading = styled(ClipLoader)`
  background: ${colors.white};
  position: absolute;
  top: -11px;
  cursor: not-allowed;
`;

export const LeftLoading = styled(Loading)`
  left: -2px;
`;

export const RightLoading = styled(Loading)`
  right: -2px;
`;
