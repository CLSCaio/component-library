import styled from 'styled-components';

import { mediaQuery } from '@hooks';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 40px;
  gap: 10px;

  ${mediaQuery('xSmall')} {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: max-content;
    padding: 0;
    gap: 50px;
  }
`;
