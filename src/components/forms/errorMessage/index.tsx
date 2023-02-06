import React from 'react';

import { colors_config } from '@config';

import * as I from './interface';
import * as S from './styles';

export const ErrorMessage = ({ error }: I.ErrorMessageProps) => {
  const { store } = colors_config();

  return (
    <S.ErrorContainer store={store}>
      <h5>{error}</h5>
    </S.ErrorContainer>
  );
};
