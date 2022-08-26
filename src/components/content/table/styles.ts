import styled, { css } from 'styled-components';

import { colors, medias } from 'src/global';

import * as I from './interface';

export const Table = styled.div`
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

export const Row = styled.span<I.TableStyles>`
  display: flex;
  width: max-content;
  padding: 12px 15px;
  border-bottom: 1px solid ${colors.grey['100']};
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

export const Heading = styled.span`
  display: flex;
  justify-content: space-between;

  gap: 25px;
  width: max-content;
  background-color: ${colors.grey.steel};
  padding: 15px;
  border-bottom: 1px solid ${colors.grey['200']};
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 150px;

  ${medias.small} {
    width: 293.2px;
  }
`;

export const Content = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 150px;

  ${medias.small} {
    width: 293.2px;
  }
`;
