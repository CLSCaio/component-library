import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const ErrorMessage = ({ error }: I.ErrorMessageProps) => (
  <S.ErrorContainer>
    <h5>{error}</h5>
  </S.ErrorContainer>
);
