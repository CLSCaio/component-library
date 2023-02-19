import styled, { css } from 'styled-components';

import { colors, fonts } from '@global';

import * as C from './content';
import * as I from './interface';

export const Container = styled.span<I.AccordionStyles>`
  width: 100%;
  max-width: ${({ maxW }) => (maxW ? `${maxW}px` : '100%')};
`;

export const Panel = styled.div<I.AccordionStyles>`
  width: 100%;
  height: max-content;

  ${({ variant, bgColor }) => C.returnBorder({ variant, bgColor })}

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

  ${({ hoverColor }) =>
    css`
      background-color: transparent;
      :hover {
        background-color: ${hoverColor || 'transparent'};
      }
    `}

  svg {
    width: 20px;
    height: 20px;
    fill: ${colors.black};
  }
`;

export const Title = styled.h2`
  font-size: ${fonts.sizes.large};
  font-weight: ${fonts.weights.bold};
  color: ${colors.primary};
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
  font-size: ${fonts.sizes.default};
  color: ${colors.primary};
`;
