import styled, { css } from 'styled-components';

import { colors } from '@global';
import { convertSize } from '@convert';
import { mediaQuery } from '@hooks';

import * as I from './interface';

export const Container = styled.div<I.ButtonStyle>`
  position: relative;
  width: 100%;

  ${({ variant, disabled, user_colors }) =>
    variant === 'pulse' &&
    !disabled &&
    css`
      .btn:link,
      .btn:visited {
        padding: 15px 40px;
        display: inline-block;
        border-radius: 8px;
        transition: all 0.2s;
        position: absolute;
      }

      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px
          ${user_colors?.transparent || colors.transparent};
        color: ${user_colors?.button?.primary || colors.button?.primary};
        border-color: ${user_colors?.button?.primary || colors.button?.primary};
        background-color: ${user_colors?.button?.secundary ||
        colors.button?.secundary};
      }

      .btn::after {
        content: '';
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
      }

      .btn-bg::after {
        background-color: ${user_colors?.button?.primary ||
        colors.button?.primary};
      }

      .btn:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }

      .btn-animated {
        animation: moveInBottom 5s ease-out;
        animation-fill-mode: backwards;
      }

      @keyframes moveInBottom {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }

        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    `}

  ${({ variant, disabled, user_colors }) =>
    variant === 'floating' &&
    !disabled &&
    css`
      .btn {
        color: ${user_colors?.black || colors.black};
        padding: 0;
        min-width: fit-content;
        width: 40px;
        border-radius: 100%;
        background: ${user_colors?.button?.floating || colors.button?.floating};
        background: linear-gradient(
          90deg,
          ${user_colors?.button?.floating || colors.button?.floating} 0%,
          ${user_colors?.button?.floating || colors.button?.floating} 100%
        );
        border: none;
        transition: all 0.3s ease-in-out 0s;
      }

      .btn::before {
        content: '';
        width: calc(40px + 10px);
        height: calc(40px + 10px);
        border: 2px solid
          ${user_colors?.button?.floating || colors.button?.floating};
        box-shadow: 0 0 60px
          ${user_colors?.button?.floating || colors.button?.floating};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        opacity: 0;
        transition: all 0.3s ease-in-out 0s;
      }

      .btn:hover,
      .btn:focus {
        transform: translateY(-6px);
      }

      .btn:hover::before,
      .btn:focus::before {
        opacity: 1;
      }

      .btn::after {
        content: '';
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 6px double
          ${user_colors?.button?.floating || colors.button?.floating};
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ring 1.5s infinite;
      }

      .btn:hover::after,
      .btn:focus::after {
        animation: none;
        display: none;
      }

      @keyframes ring {
        0% {
          width: 30px;
          height: 30px;
          opacity: 1;
        }
        100% {
          width: 100px;
          height: 100px;
          opacity: 0;
        }
      }
    `}


  ${mediaQuery('xSmall')} {
    max-width: ${({ maxW }) => convertSize('220px', maxW)};
  }

  :hover {
    .icon-cls-master-lib {
      color: ${({ user_colors, variant }) =>
        variant === 'outline'
          ? user_colors?.button?.primary || colors.button?.primary
          : variant === 'default'
          ? user_colors?.button?.floating || colors.button?.floating
          : (variant === 'outline-reverse' && user_colors?.button?.secundary) ||
            colors.button?.secundary};
    }
  }
`;

export const Button = styled.button<I.ButtonStyle>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;

  position: relative;

  color: ${({ user_colors }) =>
    user_colors?.button?.secundary || colors.button?.secundary};
  background-color: ${({ user_colors }) =>
    user_colors?.button?.primary || colors.button?.primary};
  border: 2px solid
    ${({ user_colors }) =>
      user_colors?.button?.secundary || colors.button?.secundary};

  transition: 0.5s;
  width: 100%;
  padding: 15px 30px;
  height: 45px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  ${({ variant, disabled, user_colors }) =>
    (!variant || variant === 'default') &&
    !disabled &&
    css`
      color: ${user_colors?.button?.secundary || colors.button?.secundary};
      background-color: ${user_colors?.button?.primary ||
      colors.button?.primary};
      :hover {
        color: ${user_colors?.button?.floating || colors?.button?.floating};
      }
    `}

  ${({ variant, disabled, user_colors }) =>
    (variant === 'outline' || variant === 'outline-reverse') &&
    !disabled &&
    css`
      background-color: ${variant === 'outline'
        ? user_colors?.button?.primary || colors.button?.primary
        : user_colors?.button?.secundary || colors.button?.secundary};
      color: ${variant === 'outline'
        ? user_colors?.button?.secundary || colors.button?.secundary
        : user_colors?.button?.primary || colors.button?.primary};
      border-color: ${variant === 'outline'
        ? user_colors?.button?.secundary || colors.button?.secundary
        : user_colors?.button?.primary || colors.button?.primary};
      :hover {
        background-color: ${variant === 'outline'
          ? user_colors?.button?.secundary || colors.button?.secundary
          : user_colors?.button?.primary || colors.button?.primary};
        color: ${variant === 'outline'
          ? user_colors?.button?.primary || colors.button?.primary
          : user_colors?.button?.secundary || colors.button?.secundary};
        border-color: ${variant === 'outline'
          ? user_colors?.button?.primary || colors.button?.primary
          : user_colors?.button?.secundary || colors.button?.secundary};
      }
    `}
  
  :disabled {
    ${({ variant, user_colors }) =>
      variant !== 'floating'
        ? css`
            background-color: ${user_colors?.disabled || colors?.disabled};
            color: ${user_colors?.black || colors.black};
            border: 3px solid
              ${user_colors?.button?.secundary || colors.button?.secundary};
            cursor: not-allowed;
            opacity: 0.5;
          `
        : css`
            padding: 0;
            width: 40px;
            min-width: fit-content;
            border-radius: 100%;
            background-color: ${user_colors?.disabled || colors?.disabled};
            cursor: not-allowed;
            opacity: 0.5;

            ::after,
            :hover,
            :focus {
            }
          `}
  }

  ${({ withShadow, user_colors, disabled }) =>
    withShadow &&
    !disabled &&
    css`
      :hover {
        box-shadow: 0 0 15px
          ${user_colors?.button?.shadow || colors.button?.shadow};
      }
    `}

  :active {
    transform: scale(0.97);
  }
`;

export const IconBadge = styled.span<I.ButtonStyle>`
  position: absolute;
  z-index: 100;
  top: 9px;
  left: 20px;

  svg {
    color: ${({ user_colors, variant }) =>
      variant === 'outline' || variant === 'default'
        ? user_colors?.button?.secundary || colors.button?.secundary
        : user_colors?.button?.primary || colors.button?.primary};
    width: 25px;
    height: 25px;
  }
`;
