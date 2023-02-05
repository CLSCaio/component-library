import styled, { css } from 'styled-components';

import { colors } from '@global';
import { convertTextAlign, convertSize } from '@convert';

import * as I from './interface';

export const Container = styled.div<I.TableStyles>`
  width: 100%;
  max-width: ${({ size }) => convertSize('1280px', size)};
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: max-content;

  border: 1px solid ${colors.table?.border};

  overflow-x: hidden;

  ::-webkit-scrollbar {
    height: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.table?.title};
  }

  :hover {
    overflow-x: auto;
    overflow-y: none;
  }
`;

export const Thead = styled.thead`
  width: max-content;
  background-color: ${colors.table?.title};
  padding: 15px;
  border-bottom: 1px solid ${colors.table?.border};
`;

export const Tr = styled.tr`
  display: flex;
  gap: 20px;
`;

export const Th = styled.th<I.TableStyles>`
  display: flex;
  align-items: center;
  width: ${({ width }) => (!width ? '170px' : `${width}px`)};
  text-transform: ${({ transform }) => transform};
  ${({ textAlign }) => convertTextAlign(textAlign)};
`;

export const Tbody = styled.tbody<I.TableStyles>`
  width: max-content;
  padding: 15px;
  border-bottom: 1px solid ${colors.table?.border};
  background-color: ${({ color, withDivider }) => withDivider && color};

  ${({ withHover }) =>
    withHover &&
    css`
      cursor: pointer;
      :hover {
        box-shadow: inset 0 0 1em ${colors.transparent};
      }
    `}
`;

export const Td = styled.td<I.TableStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${({ width }) => (!width ? '170px' : `${width}px`)};

  text-transform: ${({ transform }) => transform};

  ${({ textAlign }) => convertTextAlign(textAlign)};
`;
