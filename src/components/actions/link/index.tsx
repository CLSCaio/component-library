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
  variant = 'doubleLine',
}: I.LinkProps) => (
  <S.Container onClick={onClick}>
    {type === 'react' && ( // React link
      <S.To colors={colors} variant={variant} to={href.defautlLink}>
        {label}
      </S.To>
    )}

    {type === 'default' && ( // Normal link
      <S.Href
        href={href.defautlLink}
        target="_blank"
        rel="noreferrer"
        colors={colors}
        variant={variant}
      >
        {label}
      </S.Href>
    )}

    {type === 'next' && ( // Next link
      <NextLink href={{ ...href?.customLink } || href.defautlLink} as={href.as}>
        <S.Href colors={colors} variant={variant}>
          {label}
        </S.Href>
      </NextLink>
    )}
  </S.Container>
);
