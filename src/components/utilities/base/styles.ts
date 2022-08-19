import styled from 'styled-components';

import * as I from './interface';

export const Container = styled.span<I.BaseStyles>`
  width: 100vw;
  height: 100vh;

  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  background: ${({ transparent }) =>
    transparent ? 'transparent' : 'rgba(0, 0, 0, 0.6)'};
`;
