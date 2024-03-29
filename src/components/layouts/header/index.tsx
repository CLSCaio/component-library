import React, { useState } from 'react';

import * as Menu from './menu';

import * as I from './interface';
import * as S from './styles';

export const Header = ({
  routes,
  maxW,
  type,
  bgColor,
  link,
  titleIcon,
  openIcon,
  closeIcon,
  title,
  withoutBorder,
  img,
}: I.HeaderProps) => {
  const [menu, openMenu] = useState(false);

  return (
    <>
      <S.Container
        menu={menu}
        withoutBorder={withoutBorder}
        type={type}
        bgColor={bgColor}
        routes={routes}
      >
        <S.Separator maxW={maxW}>
          <Menu.Bar
            openMenu={openMenu}
            menu={menu}
            img={img}
            titleIcon={titleIcon}
            openIcon={openIcon}
            closeIcon={closeIcon}
            title={title}
          />

          <Menu.Opc routes={routes} openMenu={openMenu} link={link} />
        </S.Separator>
      </S.Container>
      <S.Divider />
    </>
  );
};
