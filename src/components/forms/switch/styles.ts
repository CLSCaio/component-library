import styled, { css } from 'styled-components';

import { convertSize } from '@convert';
import { colors, fonts } from '@global';

import * as I from './interface';

export const Container = styled.div<I.SwitchStyles>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('500px', maxW)};
`;

export const Field = styled.span`
  display: flex;
  gap: 5px;
  width: max-content;
`;

export const Toogle = styled.span<I.SwitchStyles>`
  ${({ checked }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 40px;
      height: 20px;
      border-radius: 30px;
      border: 1px solid ${colors.primary};
      background-color: ${!checked ? colors.white : colors.text[6]};
    `}

  ${({ disabled }) =>
    !disabled
      ? css`
          cursor: pointer;

          :hover {
            border-color: ${colors.support.disabled};
          }
        `
      : css`
          cursor: not-allowed;
          border-color: ${colors.support.disabled};
        `};
`;

export const Checkmark = styled.span<I.SwitchStyles>`
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${colors.primary};
  left: ${({ checked }) => (checked ? '1px' : '56%')};
`;

export const Switch = styled.input<I.SwitchStyles>`
  outline: none;
  display: none;
  text-indent: 4px;
  font-size: ${fonts.sizes.default};
  color: ${colors.black};

  background: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  border: none;
`;

export const Label = styled.label<I.SwitchStyles>`
  color: ${colors.primary};
  font-size: ${fonts.sizes.default};

  display: inline-block;
  word-wrap: break-word;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${fonts.weights.bold};
    `};
`;
