import styled, { css } from 'styled-components';

import { colors, medias } from 'src/global';
import { convertTextAlign, sizesConvert } from 'src/typesConvert';

import * as I from './interface';

export const Container = styled.div<I.TableStyles>`
  width: 100%;
  max-width: ${({ size }) => (!size ? '1280px' : sizesConvert(size))};
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: max-content;

  border: 1px solid ${colors.grey['200']};

  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 1px;
    height: 3px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.grey.steel};
  }

  :hover {
    overflow-x: auto;
    overflow-y: none;
  }
`;

export const Row = styled.span<I.TableStyles>`
  display: flex;
  width: max-content;
  padding: 15px 0;
  border-bottom: 1px solid ${colors.grey['100']};
  background-color: ${({ color, colorDivider }) => colorDivider && color};

  ${({ click }) =>
    click &&
    css`
      cursor: pointer;

      :hover {
        box-shadow: inset 0 0 1em ${colors.third};
      }

      :disabled {
        cursor: not-allowed;
      }
    `}
`;

export const Heading = styled.span`
  display: flex;
  justify-content: space-between;
  width: max-content;
  background-color: ${colors.grey.steel};
  padding: 15px 0;
  border-bottom: 1px solid ${colors.grey['200']};
  gap: 5px;
`;

export const Title = styled.h2<I.TableStyles>`
  display: flex;
  align-items: center;
  width: 250px;
  padding: 0 15px;

  ${({ textAlign }) => convertTextAlign(textAlign)};
`;

export const Content = styled.p<I.TableStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 250px;
  padding: 0 15px;

  ${({ textAlign }) => convertTextAlign(textAlign)};
`;
