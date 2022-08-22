import React from 'react';
import NextLink from 'next/link';

import * as I from './interface';
import * as S from './styles';

export const Link = ({
  link,
  type = 'react',
  onClick,
  children,
}: I.LinkProps) => (
  <S.Container onClick={onClick}>
    {type === 'react' && ( // React link
      <S.To to={link}>{children}</S.To>
    )}

    {type === 'default' && ( // Normal link
      <S.Href href={link} target="_blank" rel="noreferrer">
        {children}
      </S.Href>
    )}

    {type === 'next' && ( // Next link
      <NextLink href={link}>
        <S.Href>{children}</S.Href>
      </NextLink>
    )}
  </S.Container>
);
