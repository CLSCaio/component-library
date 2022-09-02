import styled, { css } from 'styled-components';

import { colors, medias } from '../../../global';

import * as I from './interface';

export const Container = styled.div<I.TableStyles>`
  width: 100%;
  max-width: ${({ size }) => (!size ? '1280px' : `${size}px`)};
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: max-content;

  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 7px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.grey.steel};
  }

  border: 1px solid ${colors.grey['200']};
`;

export const Row = styled.tr<I.TableStyles>`
  display: flex;
  width: max-content;
  padding: 12px 15px;
  border-bottom: 1px solid ${colors.grey['100']};
  background-color: ${({ color, colorDivider }) => colorDivider && color};

  gap: 25px;

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

export const Heading = styled.thead`
  display: flex;
  justify-content: space-between;

  gap: 25px;
  width: max-content;
  background-color: ${colors.grey.steel};
  padding: 15px;
  border-bottom: 1px solid ${colors.grey['200']};
`;

export const Title = styled.h2<I.TableStyles>`
  display: flex;
  align-items: center;
  ${({ textAlign }) =>
    !textAlign
      ? css`
          text-align: center;
        `
      : css`
          text-align: ${textAlign};
        `}

  ${({ textAlign }) =>
    textAlign === 'left'
      ? css`
          justify-content: flex-start;
        `
      : textAlign === 'right'
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: center;
        `}
    

  width: 150px;

  ${medias.small} {
    width: 293.2px;
  }
`;

export const Content = styled.p<I.TableStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 150px;

  ${({ textAlign }) =>
    !textAlign
      ? css`
          text-align: center;
        `
      : css`
          text-align: ${textAlign};
        `}

  ${({ textAlign }) =>
    textAlign === 'left'
      ? css`
          justify-content: flex-start;
        `
      : textAlign === 'right'
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: center;
        `}

  ${medias.small} {
    width: 293.2px;
  }
`;
