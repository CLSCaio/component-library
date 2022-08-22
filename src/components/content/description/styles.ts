import styled, { css } from 'styled-components';

import * as I from './interface';

export const Text = styled.p<I.DescriptionStyles>`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : 'max-content')};

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
`;
