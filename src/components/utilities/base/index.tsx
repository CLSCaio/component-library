import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Base = ({ children, transparent }: I.BaseProps) => (
  <S.Container transparent={transparent}>{children}</S.Container>
);
