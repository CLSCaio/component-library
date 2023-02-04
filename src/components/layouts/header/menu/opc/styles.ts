import styled from 'styled-components';

import { medias } from '@global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 40px;
  gap: 10px;

  ${medias.xXsmall} {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: max-content;
    padding: 0;
    gap: 50px;
  }
`;
