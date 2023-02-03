import styled from 'styled-components';
import { colors } from '../../../global';

export const ErrorContainer = styled.div`
  display: flex;
  align-items: flex-end;

  height: max-content;

  gap: 8px;
  margin-top: 3px;

  color: ${colors.suport.error};
`;
