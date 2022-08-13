import styled from 'styled-components';

import * as I from './interface';

export const Main = styled.main<I.MainStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${({ maxW }) =>
    maxW ? (typeof maxW === 'number' ? `${maxW}px` : I.sizes[maxW]) : '1280px'};

  padding: ${({ withPad }) => withPad && '15px'};
`;
