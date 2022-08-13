import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Main = ({ children, ...rest }: I.MainProps) => (
  <S.Main {...rest}>{children}</S.Main>
);
