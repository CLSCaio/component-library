import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Group = ({ children, ...rest }: I.GroupProps) => (
  <S.Container {...rest}>{children}</S.Container>
);
