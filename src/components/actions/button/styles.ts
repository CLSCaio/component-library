import styled, { css } from 'styled-components';

import { colors, medias } from '@global';
import { convertSize } from '@convert';

import * as I from './interface';

export const Container = styled.div<I.ButtonStyle>`
  position: relative;
  width: 100%;

  ${({ variant, disabled }) =>
    variant === 'pulse' &&
    !disabled &&
    css`
      .btn:link,
      .btn:visited {
        padding: 15px 40px;
        display: inline-block;
        border-radius: 15px;
        transition: all 0.2s;
        position: absolute;
      }

      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px ${colors.transparent};
        color: ${variant === 'pulse'
          ? colors.button?.primary
          : colors.button?.secundary};
        border-color: ${colors.button?.primary};
        background-color: transparent;
      }

      .btn::after {
        content: '';
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 15px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
      }

      .btn-bg::after {
        background-color: ${variant === 'pulse'
          ? colors.button?.primary
          : colors.button.secundary};
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

  ${({ variant, disabled }) =>
    variant === 'floating' &&
    !disabled &&
    css`
      .btn {
        color: ${colors.button?.primary};
        padding: 0;
        min-width: fit-content;
        width: 40px;
        border-radius: 100%;
        background: ${colors.button?.floating};
        background: linear-gradient(
          90deg,
          ${colors.button?.floating} 0%,
          ${colors.button?.floating} 100%
        );
        border: none;
        transition: all 0.3s ease-in-out 0s;
      }

      .btn::before {
        content: '';
        width: calc(40px + 10px);
        height: calc(40px + 10px);
        border: 2px solid ${colors.button?.floating};
        box-shadow: 0 0 60px ${colors.button?.floating};
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
        border: 6px double ${colors.button?.floating};
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

  ${medias.xXsmall} {
    max-width: ${({ maxW }) => convertSize('220px', maxW)};
  }
`;

export const Button = styled.button<I.ButtonStyle>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  color: ${colors.button?.secundary};
  background-color: ${colors.button?.primary};
  border: 2px solid ${colors.button?.secundary};
  transition: 0.7s;

  width: 100%;
  padding: 15px 30px;
  transition: 0.7s;
  height: 45px;
  border-radius: 15px;
  outline: none;
  cursor: pointer;

  ${({ variant, disabled }) =>
    (!variant || variant === 'default') &&
    !disabled &&
    css`
      :hover {
        color: ${colors?.others[1]};
      }
    `}

  ${({ variant, disabled }) =>
    (variant === 'outline' || variant === 'outline-reverse') &&
    !disabled &&
    css`
      background-color: ${variant === 'outline'
        ? colors.button?.primary
        : colors.button?.secundary};
      color: ${variant === 'outline'
        ? colors.button?.secundary
        : colors.button?.primary};
      border-color: ${variant === 'outline'
        ? colors.button?.secundary
        : colors.button?.primary};
      :hover {
        background-color: ${variant === 'outline'
          ? colors.button?.secundary
          : colors.button?.primary};
        color: ${variant === 'outline'
          ? colors.button?.primary
          : colors.button?.secundary};
        border-color: ${variant === 'outline'
          ? colors.button?.primary
          : colors.button?.secundary};
      }
    `}
  
  :disabled {
    ${({ variant }) =>
      variant !== 'floating'
        ? css`
            background-color: ${colors?.disabled};
            color: ${colors.button?.secundary};
            border: 3px solid ${colors.button?.secundary};
            cursor: not-allowed;
            opacity: 0.5;
          `
        : css`
            padding: 0;
            width: 40px;
            min-width: fit-content;
            border-radius: 100%;
            background-color: ${colors?.disabled};
            cursor: not-allowed;
            opacity: 0.5;

            ::after,
            :hover,
            :focus {
            }
          `}
  }

  ${({ withShadow }) =>
    withShadow &&
    css`
      :hover {
        box-shadow: 0 0 15px ${colors.button?.shadow};
      }
    `}

  :active {
    transform: scale(0.97);
  }
`;
