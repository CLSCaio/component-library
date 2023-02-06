import styled from 'styled-components';
import { colors } from '@global';

import * as I from './interface';

export const ErrorContainer = styled.div<I.ErrorMessageStyles>`
  display: flex;
  align-items: flex-end;

  height: max-content;

  gap: 8px;
  margin-top: 3px;

  color: ${({ store }) => store?.support?.error || colors.support?.error};
`;
