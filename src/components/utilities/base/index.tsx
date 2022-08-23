import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Base = ({ children, withoutBase }: I.BaseProps) => (
  <S.Container withoutBase={withoutBase}>{children}</S.Container>
);
