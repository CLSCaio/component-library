import styled, { css } from 'styled-components';

import { colors, fonts } from '@global';
import { convertSize } from '@convert';
import { mediaQuery } from '@hooks';

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
        border-radius: 8px;
        transition: all 0.2s;
        position: absolute;
      }

      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px ${colors.transparent};
        color: ${colors.primary};
        border-color: ${colors.primary};
        background-color: ${colors.secundary};
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
        background-color: ${colors.primary};
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
        color: ${colors.black};
        padding: 0;
        min-width: fit-content;
        width: 40px;
        border-radius: 100%;
        background: ${colors.others[2]};
        background: linear-gradient(
          90deg,
          ${colors.others[2]} 0%,
          ${colors.others[2]} 100%
        );
        border: none;
        transition: all 0.3s ease-in-out 0s;
      }

      .btn::before {
        content: '';
        width: calc(40px + 10px);
        height: calc(40px + 10px);
        border: 2px solid ${colors.others[2]};
        box-shadow: 0 0 60px ${colors.others[2]};
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
        border: 6px double ${colors.others[2]};
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

  :hover {
    .icon-cls-master-lib {
      color: ${({ variant }) =>
        variant === 'outline'
          ? colors.primary
          : variant === 'default'
          ? colors.others[2]
          : variant === 'outline-reverse' && colors.secundary};
    }
  }

  ${mediaQuery('xSmall')} {
    max-width: ${({ maxW }) => convertSize('220px', maxW)};
  }
`;

export const Button = styled.button<I.ButtonStyle>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;

  position: relative;

  font-size: ${fonts.sizes.large};
  font-weight: ${fonts.weights.bold};

  color: ${colors.secundary};
  background-color: ${colors.primary};
  border: 2px solid ${colors.secundary};

  transition: 0.5s;
  width: 100%;
  padding: 15px 30px;
  height: 45px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  ${({ variant, disabled }) =>
    (!variant || variant === 'default') &&
    !disabled &&
    css`
      color: ${colors.secundary};
      background-color: ${colors.primary};
      :hover {
        color: ${colors.others[2]};
      }
    `}

  ${({ variant, disabled }) =>
    (variant === 'outline' || variant === 'outline-reverse') &&
    !disabled &&
    css`
      background-color: ${variant === 'outline'
        ? colors.primary
        : colors.secundary};
      color: ${variant === 'outline' ? colors.secundary : colors.primary};
      border-color: ${variant === 'outline'
        ? colors.secundary
        : colors.primary};
      :hover {
        background-color: ${variant === 'outline'
          ? colors.secundary
          : colors.primary};
        color: ${variant === 'outline' ? colors.primary : colors.secundary};
        border-color: ${variant === 'outline'
          ? colors.primary
          : colors.secundary};
      }
    `}
  
  :disabled {
    ${({ variant }) =>
      variant !== 'floating'
        ? css`
            background-color: ${colors.support.disabled};
            color: ${colors.black};
            border: 3px solid ${colors.secundary};
            cursor: not-allowed;
            opacity: 0.5;
          `
        : css`
            padding: 0;
            width: 40px;
            min-width: fit-content;
            border-radius: 100%;
            background-color: ${colors.support.disabled};
            cursor: not-allowed;
            opacity: 0.5;

            ::after,
            :hover,
            :focus {
            }
          `}
  }

  ${({ withShadow, disabled }) =>
    withShadow &&
    !disabled &&
    css`
      :hover {
        box-shadow: 0 0 15px ${colors.black};
      }
    `}

  :active {
    transform: scale(0.97);
  }

  ${mediaQuery('medium')} {
    font-size: ${fonts.sizes.medium};
  }
`;

export const IconBadge = styled.span<I.ButtonStyle>`
  position: absolute;
  z-index: 100;
  top: 9px;
  left: 20px;

  svg {
    color: ${({ variant }) =>
      variant === 'outline' || variant === 'default'
        ? colors.secundary
        : colors.primary};
    width: 25px;
    height: 25px;
  }
`;
