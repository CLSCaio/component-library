import React, { useState } from 'react';

import * as Menu from './menu';

import * as I from './interface';
import * as S from './styles';

export const Header = ({ routes, maxW, type, bgColor }: I.HeaderProps) => {
  const [menu, openMenu] = useState(false);

  return (
    <S.Container menu={menu} type={type} bgColor={bgColor}>
      <S.Separator maxW={maxW}>
        <Menu.Bar openMenu={openMenu} menu={menu} />

        <Menu.Opc routes={routes} openMenu={openMenu} />
      </S.Separator>
    </S.Container>
  );
};
