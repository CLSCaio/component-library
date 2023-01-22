import styled, { css } from 'styled-components';

import { colors as themeColor } from 'src/global';

import * as C from './content';
import * as I from './interface';

export const Container = styled.span<I.AccordionStyles>`
  width: 100%;
  max-width: ${({ maxW }) => (maxW ? `${maxW}px` : '100%')};
`;

export const Panel = styled.div<I.AccordionStyles>`
  width: 100%;
  height: max-content;

  ${({ variant, colors }) => C.returnBorder({ variant, colors })}

  .icons {
    display: none;
  }

  .open {
    display: flex !important;
  }
`;

export const PanelHead = styled.span<I.AccordionStyles>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;

  cursor: pointer;

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

  svg {
    width: 20px;
    height: 20px;
    fill: ${themeColor.black};
  }
`;

export const Title = styled.h3``;

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
