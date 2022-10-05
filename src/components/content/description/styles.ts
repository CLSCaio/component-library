import styled, { css } from 'styled-components';

import * as I from './interface';

export const Text = styled.p<I.DescriptionStyles>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
`;
