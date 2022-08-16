import styled, { css } from 'styled-components';
import { IoMdClose } from 'react-icons/io';

import { colors } from '../../../../global';

import * as I from './interface';

const iconStyles = css<I.ModalConfigStyles>`
  height: 1.5rem;
  width: 1.5rem;
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

const colorsStyles = css<I.ModalConfigStyles>`
  ${({ variant }) =>
    !variant || variant === 'light'
      ? css`
          color: ${colors.black};
        `
      : css`
          color: ${colors.white};
        `};
`;

export const Container = styled.span<I.ModalConfigStyles>`
  width: ${({ size }) => (size ? I.sizes[size] : I.sizes.small)};
  min-height: ${({ size }) => (size ? I.sizes[size] : I.sizes.small)};

  background-color: ${({ variant }) =>
    variant ? I.variants[variant] : I.variants.light};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
  padding: 15px;

  position: fixed;

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

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: ${({ size }) =>
      size
        ? size === 'small'
          ? '100px'
          : size === 'medium'
          ? '300px'
          : '500px'
        : '100px'};
  }
`;

export const Icon = styled(IoMdClose)<I.ModalConfigStyles>`
  ${iconStyles};
`;
