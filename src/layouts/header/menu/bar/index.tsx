import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Bar = ({ menu, openMenu, img, title }: I.BarProps) => (
  <S.Container>
    {img && <S.IMG src={img.url} alt={img.alt} />}
    {!menu ? (
      <S.Bars onClick={() => openMenu(!menu)} />
    ) : (
      <S.Close onClick={() => openMenu(!menu)} />
    )}

    <p>{title}</p>
  </S.Container>
);
