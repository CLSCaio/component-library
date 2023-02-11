import styled, { css } from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { convertSize } from '@convert';
import { colors, fonts } from '@global';

import * as I from './interface';

const defaultIconsstyle = css`
  fill: ${colors.forms?.primary};
`;

export const Container = styled.div<I.SelectStyle>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
`;

export const Label = styled.label<I.SelectStyle>`
  color: ${({ disabled, error, store }) =>
    disabled
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

export const Field = styled.span<I.SelectStyle>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  cursor: ${({ disabled }) => disabled && 'not-allowed'};

  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  :read-only {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  :focus {
    ${({ border, store }) =>
      border && border === 'outline'
        ? `
        border-radius: 8px;
        border: 2px solid ${store?.forms?.focus || colors.forms?.focus}`
        : `
      border-bottom: 2px solid ${store?.forms?.focus || colors.forms?.focus};
  `};
  }

  :disabled {
    ${({ border, store }) =>
      border && border === 'outline'
        ? `
        border-radius: 8px;
        border: 2px solid ${store?.disabled || colors.disabled}`
        : `
      border-bottom: 2px solid ${store?.disabled || colors.disabled};
  `};
  }

  ${({ disabled, error, border, store }) =>
    border && border === 'outline'
      ? `
        border-radius: 5px;
        border: 2px solid ${
          disabled
            ? store?.disabled || colors.disabled
            : error
            ? store?.support?.error || colors.support?.error
            : store?.forms?.primary || colors.forms?.primary
        }`
      : `
        border: none;
        border-bottom: 2px solid

        ${
          disabled
            ? store?.disabled || colors.disabled
            : error
            ? store?.support?.error || colors.support?.error
            : store?.forms?.primary || colors.forms?.primary
        }
  `};

  ${({ datalistView }) =>
    datalistView &&
    datalistView === 'block' &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

export const Select = styled.input<I.SelectStyle>`
  outline: none;
  text-indent: 4px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: calc(100% - 50px);
  border: none;

  padding: ${({ border }) => (border === 'outline' ? '7px 0' : '0 0 7px 0')};

  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  :read-only {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  text-transform: ${({ transform }) => transform};

  :placeholder {
    color: ${({ disabled, store }) =>
      disabled
        ? store?.disabled || colors.disabled
        : store?.forms?.primary || colors.forms?.primary};
  }
`;

export const Datalist = styled.span<I.SelectStyle>`
  display: ${({ datalistView }) => datalistView};
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  border: 2px solid black;
  border-top: none;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  overflow: hidden;

  background-color: white;
  z-index: 100;
`;

export const Option = styled.p`
  padding: 10px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :hover {
    background-color: ${colors.forms?.hover};
    cursor: pointer;
  }
`;

export const Toggle = styled.span<I.SelectStyle>`
  all: unset;
  cursor: ${({ isLoading }) => (!isLoading ? 'pointer' : 'not-allowed')};
  padding-right: 5px;

  ${({ border }) =>
    border === 'inline' &&
    css`
      transform: translateY(-3px);
    `}

  display: flex;
  align-items: center;
`;

export const ClearInput = styled(AiOutlineClose)`
  ${defaultIconsstyle}
`;

export const ArrowDown = styled(IoIosArrowDown)`
  ${defaultIconsstyle}
`;

export const ArrowUp = styled(IoIosArrowUp)`
  ${defaultIconsstyle}
`;

export const Loading = styled(ClipLoader)``;
