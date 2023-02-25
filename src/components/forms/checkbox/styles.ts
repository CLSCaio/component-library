import styled, { css } from 'styled-components';

import { convertSize } from '@convert';
import { colors, fonts } from '@global';

import * as I from './interface';

export const Container = styled.div<I.CheckboxStyles>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('500px', maxW)};
`;

export const Wrapper = styled.span`
  display: flex;
  gap: 5px;
  width: max-content;
`;

export const Label = styled.label<I.CheckboxStyles>`
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

export const Box = styled.span<I.CheckboxStyles>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid ${colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    !disabled
      ? css`
          cursor: pointer;

          :hover {
            border-color: ${colors.secundary};
          }
        `
      : css`
          cursor: not-allowed;
          border-color: ${colors.support.disabled};
        `};
`;

export const Checkbox = styled.input<I.CheckboxStyles>`
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
