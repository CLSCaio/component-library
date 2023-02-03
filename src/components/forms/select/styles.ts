import styled, { css } from 'styled-components';

import { convertSize } from '../../../typesConvert';
import { colors, weights } from '../../../global';

import * as I from './interface';

export const Container = styled.div<I.SelectStyle>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
`;

export const Label = styled.label<I.SelectStyle>`
  color: ${({ disabled, readOnly, error }) =>
    disabled || readOnly
      ? colors.disabled
      : error
      ? colors.suport.error
      : colors.forms.primary};

  ${({ boldLabel }) =>
    boldLabel &&
    css`
      font-weight: ${weights.bold};
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
  text-indent: 5px;
  background: none;

  padding: ${({ border }) => (border === 'outline' ? '7px 0' : '0 0 7px 0')};

  cursor: ${({ disabled, readOnly }) =>
    (disabled || readOnly) && 'not-allowed'};

  text-transform: ${({ transform }) => transform};

  width: 100%;

  :hover {
    border-color: ${colors.forms.hover};
  }

  :focus {
    ${({ border }) =>
      border && border === 'outline'
        ? `
        border-radius: 5px;
        border: 2px solid ${colors.forms.focus}`
        : `
      border-bottom: 2px solid ${colors.forms.focus};
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
      disabled || readOnly ? colors.disabled : colors.forms.primary};
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
            ? colors.suport.error
            : colors.forms.primary
        }`
      : `
        border: none;
        border-bottom: 2px solid

        ${
          disabled || readOnly
            ? colors.disabled
            : error
            ? colors.suport.error
            : colors.forms.primary
        }
  `};
`;

export const Option = styled.option`
  background-color: ${colors.others[4]};
  color: ${colors.forms.primary};
`;
