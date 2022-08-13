import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Container = ({ children, ...rest }: I.ContainerProps) => (
  <S.Container {...rest}>{children}</S.Container>
);
