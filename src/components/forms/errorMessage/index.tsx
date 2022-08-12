import React from 'react';
import * as I from './interface';
import * as S from './styles';

export const ErrorMessage = ({ error }: I.ErrorMessageProps) => (
  <S.ErrorContainer>
    <h4>{error}</h4>
  </S.ErrorContainer>
);
