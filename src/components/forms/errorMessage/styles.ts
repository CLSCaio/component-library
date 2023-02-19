import styled from 'styled-components';
import { colors, fonts } from '@global';

export const ErrorContainer = styled.div`
  display: flex;
  align-items: flex-end;

  height: max-content;

  gap: 8px;
  margin-top: 3px;

  font-size: ${fonts.sizes.small};
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.support?.error};
`;
