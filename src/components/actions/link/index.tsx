import React from 'react';
import NextLink from 'next/link';

import * as I from './interface';
import * as S from './styles';

export const Link = ({
  href,
  label,
  type = 'react',
  onClick,
  colors,
}: I.LinkProps) => (
  <S.Container onClick={onClick}>
    {type === 'react' && ( // React link
      <S.To colors={colors} to={href}>
        {label}
      </S.To>
    )}

    {type === 'default' && ( // Normal link
      <S.Href href={href} target="_blank" rel="noreferrer" colors={colors}>
        {label}
      </S.Href>
    )}

    {type === 'next' && ( // Next link
      <NextLink href={href}>
        <S.Href colors={colors}>{label}</S.Href>
      </NextLink>
    )}
  </S.Container>
);
