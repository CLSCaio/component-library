import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Bar = ({
  menu,
  openMenu,
  img,
  title,
  titleIcon: Icon,
  closeIcon: Close,
  openIcon: Open,
}: I.BarProps) => (
  <S.Container>
    <S.IconImgGroup>
      {img && !Icon && (
        <S.IMG src={img.url} alt={img.alt} onClick={() => openMenu(!menu)} />
      )}
      {Icon && !img && <Icon onClick={() => openMenu(!menu)} />}
    </S.IconImgGroup>

    <S.OpenCloseMenuOpc>
      {!menu ? (
        !Open ? (
          <S.Bars onClick={() => openMenu(!menu)} />
        ) : (
          <Open onClick={() => openMenu(!menu)} />
        )
      ) : !Close ? (
        <S.Close onClick={() => openMenu(!menu)} />
      ) : (
        <Close onClick={() => openMenu(!menu)} />
      )}
    </S.OpenCloseMenuOpc>
    <h2>{title}</h2>
  </S.Container>
);
