import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Opc = ({ openMenu, routes }: I.OpcProps) => (
  <S.Container>
    {routes.map(({ name, path }) => (
      <S.Router key={name} href={path} onClick={() => openMenu(false)}>
        {name}
      </S.Router>
    ))}
  </S.Container>
);
