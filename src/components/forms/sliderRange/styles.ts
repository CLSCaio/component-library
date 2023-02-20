import styled, { css } from 'styled-components';

import { convertSize } from '@convert';
import { colors, fonts } from '@global';

import * as I from './interface';

export const Container = styled.div<I.SliderRangeStyles>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
`;

export const Label = styled.label<I.SliderRangeStyles>`
  color: ${colors.primary};
  font-size: ${fonts.sizes.default};

  ${({ boldLabel }) =>
    boldLabel &&
    css`
      font-weight: ${fonts.weights.bold};
    `};

  margin-left: ${({ positionLabel, border }) =>
    positionLabel === 'top' && border === 'outline' && '10px'};
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div<I.SliderRangeStyles>`
  width: 100%;
  margin-top: 10px;

  ${({ position }) =>
    position === 'vertical'
      ? css`
          transform: rotate(-90deg);
        `
      : position === 'vertical-reverse'
      ? css`
          transform: rotate(90deg);
        `
      : position === 'horizontal-reverse' &&
        css`
          transform: rotate(180deg);
        `}
`;

export const Slider = styled.div<I.SliderRangeStyles>`
  height: 5px;
  position: relative;
  border-radius: 8px;
  background: ${({ variant }) =>
    variant === 'doubleThumb' ? '#ccc' : 'black'};
`;

export const Bar = styled.div<I.SliderRangeStyles>`
  height: 100%;
  left: ${({ left = 0 }) => `${left.toFixed(2)}%`};
  right: ${({ right = 0 }) => `${right.toFixed(2)}%`};
  border-radius: 8px;
  position: absolute;
  background: ${({ variant }) =>
    variant === 'doubleThumb' ? 'black' : '#ccc'};
`;

export const Field = styled.div`
  position: relative;
`;

export const Input = styled.input`
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
    background: #fff;
    border: 2px solid black;

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
    background: #fff;
    border: 2px solid black;
    pointer-events: all;
    -moz-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  }
`;
