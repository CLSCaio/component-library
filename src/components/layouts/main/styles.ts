import styled from 'styled-components';

import * as I from './interface';

export const Main = styled.main<I.MainStyles>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: ${({ calcMinHeight }) =>
    !calcMinHeight
      ? 'calc(100vh - 150px)'
      : `calc(100vh - ${calcMinHeight}px)`};
  max-width: ${({ maxW }) => (!maxW || maxW === 'default' ? '100%' : '1280px')};
  padding: ${({ mobileLayout }) => mobileLayout && '20px'};
`;
