import styled from 'styled-components';

import { convertSize } from '@convert';

import * as I from './interface';

export const Form = styled.form<I.FormikProviderStyles>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  width: 100%;
  max-width: ${({ maxW }) => convertSize('1280px', maxW)};
`;
