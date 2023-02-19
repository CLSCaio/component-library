import styled, { css } from 'styled-components';

import { fonts } from '@global';

import * as I from './interface';

export const Text = styled.p<I.DescriptionStyles>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};

  font-size: ${fonts.sizes.default};

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
`;
