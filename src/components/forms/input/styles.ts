import styled, { css } from 'styled-components';
import MaskedInput from 'react-text-mask';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { colors } from '../../../global';

import * as I from './interface';

const passwordIcon = css`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${colors.text.black};
`;

export const Container = styled.div<I.InputStyleProps>`
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

export const Label = styled.label<I.InputStyleProps>`
  color: ${({ disabled, readOnly, error }) =>
    disabled || readOnly
      ? colors.elements.disabled
      : error
      ? colors.support.error
      : colors.text.black};
`;

export const Field = styled.span`
  width: 100%;
  position: relative;
`;

export const Input = styled(MaskedInput)<I.InputStyleProps>`
  border: none;
  border-bottom: 2px solid
    ${({ disabled, readOnly, error }) =>
      disabled || readOnly
        ? colors.elements.disabled
        : error
        ? colors.support.error
        : colors.text.black};
  outline: none;
  text-indent: 5px;
  background: none;

  cursor: ${({ disabled, readOnly }) =>
    (disabled || readOnly) && 'not-allowed'};

  text-transform: ${({ transform }) => transform};

  width: 100%;

  :focus {
    border-bottom: 2px solid ${colors.elements.focus};
  }

  :disabled,
  :readonly {
    border-bottom: 2px solid ${colors.elements.disabled};
  }

  :placeholder {
    color: ${({ disabled, readOnly }) =>
      disabled || readOnly ? colors.elements.disabled : colors.text.black};
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;
  appearance: textfield;
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
