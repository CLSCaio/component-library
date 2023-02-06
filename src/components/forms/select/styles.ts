import styled, { css } from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { convertSize } from '@convert';
import { colors, fonts } from '@global';

import * as I from './interface';

export const Container = styled.div<I.SelectStyle>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
`;

export const Label = styled.label<I.SelectStyle>`
  color: ${({ disabled, readOnly, error, store }) =>
    disabled || readOnly
      ? store?.disabled || colors.disabled
      : error
      ? store?.support?.error || colors.support?.error
      : store?.forms?.primary || colors.forms?.primary};

  ${({ boldLabel }) =>
    boldLabel &&
    css`
      font-weight: ${fonts.weights.bold};
    `};

  margin-left: ${({ positionLabel, border }) =>
    positionLabel === 'top' && border === 'outline' && '10px'};
`;

export const Field = styled.span`
  width: 100%;
  position: relative;
`;

export const Select = styled.select<I.SelectStyle>`
  outline: none;
  text-indent: 9px;
  background: none;

  padding: ${({ border }) => (border === 'outline' ? '7px 0' : '0 0 7px 0')};

  cursor: ${({ disabled, readOnly }) =>
    (disabled || readOnly) && 'not-allowed'};

  text-transform: ${({ transform }) => transform};

  width: 100%;

  :hover {
    border-color: ${({ store }) => store?.forms?.hover || colors.forms?.hover};
  }

  :focus {
    ${({ border, store }) =>
      border && border === 'outline'
        ? `
        border-radius: 5px;
        border: 2px solid ${store?.forms?.focus || colors.forms?.focus}`
        : `
      border-bottom: 2px solid ${store?.forms?.focus || colors.forms?.focus};
  `};
  }

  :disabled,
  :readonly {
    ${({ border, store }) =>
      border && border === 'outline'
        ? `
        border-radius: 5px;
        border: 2px solid ${store?.disabled || colors.disabled}`
        : `
      border-bottom: 2px solid ${store?.disabled || colors.disabled};
  `};
  }

  :placeholder {
    color: ${({ disabled, readOnly, store }) =>
      disabled || readOnly
        ? store?.disabled || colors.disabled
        : store?.forms?.primary || colors.forms?.primary};
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;
  appearance: textfield;

  ${({ disabled, readOnly, error, border, store }) =>
    border && border === 'outline'
      ? `
        border-radius: 5px;
        border: 2px solid ${
          disabled || readOnly
            ? store?.disabled || colors.disabled
            : error
            ? store?.support?.error || colors.support?.error
            : store?.forms?.primary || colors.forms?.primary
        }`
      : `
        border: none;
        border-bottom: 2px solid

        ${
          disabled || readOnly
            ? store?.disabled || colors.disabled
            : error
            ? store?.support?.error || colors.support?.error
            : store?.forms?.primary || colors.forms?.primary
        }
  `};
`;
export const Option = styled.option``;
