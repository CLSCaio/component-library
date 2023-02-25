import styled, { css } from 'styled-components';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi';

import { colors, fonts } from '@global';

import * as I from './interface';

export const Container = styled.div<I.PaginationStyles>`
  display: flex;
  ${({ currentPageText }) =>
    !currentPageText
      ? ''
      : css`
          flex-direction: ${currentPageText !== 'left' ? 'column' : 'row'};
        `}

  width: max-content;
  gap: 10px;
`;

export const Text = styled.p<I.PaginationStyles>`
  display: flex;
  font-size: ${fonts.sizes.small};

  ${({ currentPageText }) =>
    !currentPageText
      ? css`
          align-self: flex-end;
        `
      : currentPageText !== 'left'
      ? css`
          order: ${currentPageText === 'bottom' ? 2 : 0};
          align-self: center;
        `
      : css`
          align-self: flex-end;
        `};
`;

export const Button = styled.button<I.PaginationStyles>`
  width: 30px;
  height: 30px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  background-color: 'gray';

  font-weight: 700;
  border: 1px solid ${colors.primary};
  border-radius: 8px;

  outline: none;

  ${({ isLoading }) =>
    isLoading
      ? css`
          background-color: ${colors.white};
          cursor: not-allowed;
          color: ${colors.support.disabled};
        `
      : css`
          :hover {
            background-color: ${colors.secundary};
          }
        `}

  :disabled {
    background-color: ${colors.support.disabled};
    cursor: not-allowed;
    color: ${colors.white};
  }
`;

export const IconBase = css<I.PaginationStyles>`
  ${({ isLoading }) =>
    !isLoading
      ? css`
          color: ${colors.primary};
          cursor: pointer;
          :hover {
            transform: scale(1.1);
          }
        `
      : css`
          color: ${colors.support.disabled};
          cursor: not-allowed;
        `};
`;

export const BackButton = styled(MdOutlineArrowBackIos)`
  ${IconBase}
`;

export const ForwardButton = styled(MdOutlineArrowForwardIos)`
  ${IconBase}
`;

export const FirstPageButton = styled(HiChevronDoubleLeft)`
  ${IconBase}
`;

export const LastPageButton = styled(HiChevronDoubleRight)`
  ${IconBase}
`;
