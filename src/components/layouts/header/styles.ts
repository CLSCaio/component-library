import styled, { css } from 'styled-components';

import { convertSize } from '@convert';
import { colors } from '@global';
import { mediaQuery } from '@hooks';

import calcHeaderHeight from './calcHeaderHeight';
import * as I from './interface';

export const Container = styled.header<I.HeaderStyles>`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  ${({ menu, routes }) => calcHeaderHeight({ menu, routes })}

  overflow: hidden;
  top: 0;

  position: ${({ type }) => type || 'fixed'};

  background: ${({ bgColor }) => bgColor || colors.white};

  transition: 0.7s;

  ${({ withoutBorder }) =>
    !withoutBorder &&
    css`
      border-bottom: 5px double ${colors.primary};
    `}

  ${mediaQuery('xSmall')} {
    align-items: center;
    justify-content: center;
    height: 70px;
  }

  z-index: 99;
`;

export const Separator = styled.span<I.HeaderStyles>`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  max-width: max-content;

  ${mediaQuery('xSmall')} {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
    max-width: ${({ maxW }) => convertSize('1280px', maxW)};
  }
`;

export const Divider = styled.span`
  height: 75px;
`;
