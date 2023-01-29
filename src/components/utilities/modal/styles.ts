import styled, { css } from 'styled-components';
import { IoMdClose } from 'react-icons/io';

import { colors } from 'src/global';

import * as I from './interface';

const iconStyles = css<I.ModalStyles>`
  height: 25px;
  width: 25px;
  cursor: pointer;

  ${({ variant }) =>
    !variant || variant === 'light'
      ? css`
          fill: ${colors.black};
        `
      : css`
          fill: ${colors.white};
        `}
`;

const colorsStyles = css<I.ModalStyles>`
  ${({ variant }) =>
    !variant || variant === 'light'
      ? css`
          color: ${colors.black};
        `
      : css`
          color: ${colors.white};
        `};
`;

export const Container = styled.span<I.ModalStyles>`
  width: ${({ size }) => (size ? I.sizes[size] : I.sizes.small)};
  min-height: ${({ size }) => (size ? I.sizes[size] : I.sizes.small)};

  background-color: ${({ variant }) =>
    variant ? I.variants[variant] : I.variants.light};

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: ${({ isLoading }) =>
    !isLoading ? 'space-between' : 'center'};
  align-items: center;

  gap: 20px;

  position: relative;

  border-radius: 15px;
  border: 4px double
    ${({ variant }) =>
      variant
        ? variant === 'light'
          ? colors.black
          : colors.white
        : colors.black};

  .text {
    ${colorsStyles}
  }

  .btn-modal-1 {
    ${colorsStyles}
    hover: {
    }
  }

  .btn-modal-2 {
    ${colorsStyles}
    hover: {
    }
  }
`;

export const IconsContainer = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const CloseIcon = styled(IoMdClose)<I.ModalStyles>`
  ${iconStyles};
`;
