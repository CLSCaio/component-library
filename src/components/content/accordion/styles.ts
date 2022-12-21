import styled, { css } from 'styled-components';

import { colors as themeColor } from '../../../global';

import * as I from './interface';

export const Container = styled.span<I.AccordionStyles>`
  width: 100%;
  max-width: ${({ maxW }) => (maxW ? `${maxW}px` : '100%')};
`;

export const Panel = styled.div<I.AccordionStyles>`
  width: 100%;
  height: max-content;

  ${({ variant, colors }) =>
    variant === 'default'
      ? css`
          border: 1px solid ${colors?.[2] || themeColor.black};
        `
      : variant === 'inline'
      ? css`
          border-bottom: 1px solid ${colors?.[2] || themeColor.black}; ;
        `
      : css`
          border: none;
        `}

  .icons {
    display: none;
  }

  .open {
    display: flex !important;
  }
`;

export const Title = styled.h3<I.AccordionStyles>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 18px;
  width: 100%;
  outline: none;

  ${({ variant, colors }) =>
    variant !== 'inline'
      ? css`
          background-color: ${colors?.[0]};
          :hover {
            background-color: ${colors?.[1]};
          }
        `
      : css`
          background-color: transparent;
          :hover {
            background-color: color;
          }
        `}
`;

export const Text = styled.span<I.AccordionStyles>`
  padding: 13px 18px;
  width: 100%;
  text-align: left;

  display: none;

  flex-direction: column;
  gap: 20px;
`;

export const Desc = styled.p`
  width: 100%;
`;
