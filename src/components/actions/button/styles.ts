import styled, { css } from 'styled-components';

import { colors as defaultColors, medias } from 'src/global';
import { sizesConvert } from 'src/typesConvert';

import * as I from './interface';

export const Container = styled.div<I.ButtonStyle>`
  position: relative;
  width: 100%;

  ${({ variant, disabled, colors }) =>
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
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        color: ${colors?.third || defaultColors.others[1]};
        border-color: ${colors?.third || defaultColors.others[1]};
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
        background-color: ${colors?.third || defaultColors.others[1]};
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

  ${({ variant, disabled, colors }) =>
    variant === 'floating' &&
    !disabled &&
    css`
      .btn {
        color: ${colors?.primary || defaultColors.primary};
        padding: 0;
        min-width: fit-content;
        width: 40px;
        border-radius: 100%;
        background: #4fd1c5;
        background: linear-gradient(
          90deg,
          rgba(129, 230, 217, 1) 0%,
          rgba(79, 209, 197, 1) 100%
        );
        border: none;
        transition: all 0.3s ease-in-out 0s;
      }

      .btn::before {
        content: '';
        width: calc(40px + 10px);
        height: calc(40px + 10px);
        border: 2px solid #00ffcb;
        box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
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
        border: 6px double #00ffcb;
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
    max-width: ${({ maxW }) => (!maxW ? '250px' : sizesConvert(maxW))};
  }
`;

export const Button = styled.button<I.ButtonStyle>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  color: ${({ colors }) => colors?.secundary || defaultColors.secundary};
  background-color: ${({ colors }) => colors?.third || defaultColors.others[1]};
  border: 2px solid ${({ colors }) => colors?.primary || defaultColors.primary};
  transition: 0.7s;

  width: 100%;
  padding: 15px 30px;
  min-width: 150px;
  transition: 0.7s;
  height: 40px;
  border-radius:  15px;
  outline: none;
  cursor: pointer;

  ${({ variant, disabled, colors }) =>
    (!variant || variant === 'default') &&
    !disabled &&
    css`
      :hover {
        color: ${colors?.primary || defaultColors.primary};
      }
    `}

  ${({ variant, disabled, colors }) =>
    variant === 'outline' &&
    !disabled &&
    css`
      background-color: transparent;
      color: ${colors?.primary || defaultColors.primary};
      border-color: ${colors?.third || defaultColors.others[1]};
      :hover {
        border: 3px solid ${colors?.primary || defaultColors.primary};
        background-color: ${colors?.third || defaultColors.others[1]};
        color: ${colors?.secundary || defaultColors.secundary};
      }
    `}

  ${({ variant, disabled, colors }) =>
    variant === 'outline-reverse' &&
    !disabled &&
    css`
      border: 2px solid ${colors?.primary || defaultColors.primary};
      :hover {
        border: 2px solid ${colors?.third || defaultColors.others[1]};
        background-color: transparent;
        color: ${colors?.primary || defaultColors.primary};
        box-shadow: 0 0 15px ${colors?.third || defaultColors.others[1]};
      }
    `}
  
  :active {
    transform: scale(0.8);
  }

  :disabled {
    ${({ variant, colors }) =>
      variant !== 'floating'
        ? css`
            background-color: ${defaultColors.disabled};
            color: ${colors?.secundary || defaultColors.secundary};
            border: 3px solid ${colors?.primary || defaultColors.primary};
            cursor: not-allowed;
            opacity: 0.5;
          `
        : css`
            padding: 0;
            width: 40px;
            min-width: fit-content;
            border-radius: 100%;
            background-color: ${defaultColors.disabled};
            cursor: not-allowed;
            opacity: 0.5;

            ::after,
            :hover,
            :focus {
            }
          `}
`;
