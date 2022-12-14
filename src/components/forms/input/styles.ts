import styled, { css } from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { colors, weights } from '../../../global';

import * as I from './interface';

const passwordIcon = css`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${colors.black};
`;

export const Container = styled.div<I.InputStyle>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  max-width: ${({ maxW }) =>
    maxW === 'block'
      ? I.widths.block
      : maxW === 'max-content'
      ? I.widths.maxContent
      : `${maxW}px`};
`;

export const Label = styled.label<I.InputStyle>`
  color: ${({ disabled, readOnly, error }) =>
    disabled || readOnly
      ? colors.disabled
      : error
      ? colors.error
      : colors.black};

  ${({ boldLabel }) =>
    boldLabel &&
    css`
      font-weight: ${weights.bold};
    `};

  margin-left: ${({ labelposition, border }) =>
    labelposition === 'top' && border === 'outline' && '10px'};
`;

export const Field = styled.span`
  width: 100%;
  position: relative;
`;

export const Input = styled.input<I.InputStyle>`
  outline: none;
  text-indent: 9px;
  background: none;

  padding: ${({ border }) => (border === 'outline' ? '7px 0' : '0 0 7px 0')};

  cursor: ${({ disabled, readOnly }) =>
    (disabled || readOnly) && 'not-allowed'};

  text-transform: ${({ transform }) => transform};

  width: 100%;

  :focus {
    ${({ border }) =>
      border && border === 'outline'
        ? `
        border-radius: 5px;
        border: 2px solid ${colors.focus}`
        : `
      border-bottom: 2px solid ${colors.focus};
  `};
  }

  :disabled,
  :readonly {
    ${({ border }) =>
      border && border === 'outline'
        ? `
        border-radius: 5px;
        border: 2px solid ${colors.disabled}`
        : `
      border-bottom: 2px solid ${colors.disabled};
  `};
  }

  :placeholder {
    color: ${({ disabled, readOnly }) =>
      disabled || readOnly ? colors.disabled : colors.black};
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;
  appearance: textfield;

  ${({ disabled, readOnly, error, border }) =>
    border && border === 'outline'
      ? `
        border-radius: 5px;
        border: 2px solid ${
          disabled || readOnly
            ? colors.disabled
            : error
            ? colors.error
            : colors.black
        }`
      : `
        border: none;
        border-bottom: 2px solid

        ${
          disabled || readOnly
            ? colors.disabled
            : error
            ? colors.error
            : colors.black
        }
  `};
`;

export const Toggle = styled.button.attrs(() => ({ type: 'button' }))`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const ClosedEye = styled(AiFillEyeInvisible)`
  ${passwordIcon};
`;

export const OpenedEye = styled(AiFillEye)`
  ${passwordIcon}
`;

export const Flag = styled.img`
  width: 45px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-86%);
`;
