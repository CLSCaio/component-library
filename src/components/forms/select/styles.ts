import styled, { css } from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { convertSize } from '@convert';
import { colors, fonts } from '@global';

import * as I from './interface';

const colorStyle = css<I.SelectStyle>`
  ${({ error, disabled }) =>
    !error && !disabled
      ? colors.primary
      : error
      ? colors.support?.error
      : colors.support.disabled}
`;

const defaultIconStyle = css<I.SelectStyle>`
  color: ${colors.black};
  width: ${fonts.sizes.medium};
  height: ${fonts.sizes.medium};
`;

export const Container = styled.div<I.SelectStyle>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
`;

export const Label = styled.label<I.SelectStyle>`
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

  ${({ border }) =>
    border && border === 'outline'
      ? css`
          border-radius: 8px;
          border: 2px solid ${colorStyle};
        `
      : css`
          border: none;
          border-bottom: 2px solid ${colorStyle};
        `};

  :hover {
    border-color: ${colors.secundary};
  }

  :disabled {
    border-color: ${colors.support.disabled};
  }
`;

export const Select = styled.input<I.SelectStyle>`
  outline: none;
  text-indent: 4px;
  font-size: ${fonts.sizes.default};
  color: ${colors.black};

  background: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: calc(100% - 50px);
  border: none;

  text-transform: ${({ transform }) => transform};
  padding: ${({ border }) => (border === 'outline' ? '7px 0' : '0 0 7px 0')};

  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  :read-only {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
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

  height: auto;
  max-height: 200px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  overflow-y: auto;
  overflow-x: hidden;

  background-color: white;
  z-index: 100;

  ::-webkit-scrollbar {
    width: 5px;
    background: ${colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.secundary};
  }
`;

export const Option = styled.p`
  padding: 10px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :hover {
    background-color: ${colors.secundary};
    cursor: pointer;
  }
`;

export const Toggle = styled.span<I.SelectStyle>`
  all: unset;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  padding-right: 5px;

  ${({ border }) =>
    border === 'inline' &&
    css`
      transform: translateY(-3px);
    `}

  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ClearInput = styled(AiOutlineClose)`
  ${defaultIconStyle}
`;

export const ArrowDown = styled(IoIosArrowDown)`
  ${defaultIconStyle}
`;

export const ArrowUp = styled(IoIosArrowUp)`
  ${defaultIconStyle}
`;

export const Loading = styled(ClipLoader)``;
