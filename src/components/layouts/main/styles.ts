import styled from 'styled-components';

import * as I from './interface';

export const Main = styled.main<I.MainStyles>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 150px);
  max-width: ${({ maxW }) =>
    maxW ? (typeof maxW === 'number' ? `${maxW}px` : I.sizes[maxW]) : '1280px'};

  padding: ${({ withPad }) => withPad && '30px 15px'};
`;
