import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors, medias } from '../../../..';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 40px;
  gap: 30px;

  ${medias.small} {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: max-content;
    padding: 0;
  }
`;

export const Router = styled(Link)`
  padding: 5px 20px;
  text-decoration: none;
  width: max-content;

  :hover {
    color: ${colors.hover};

    border-bottom: 2px solid ${colors.hover};
  }
`;
