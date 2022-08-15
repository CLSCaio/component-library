import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Link = ({ link, label, normalLink, onClick }: I.LinkProps) => (
  <S.Container onClick={onClick}>
    {!normalLink ? (
      <S.To // With Router-dom
        to={link}
      >
        {label}
      </S.To>
    ) : (
      <S.Href // no Router-dom
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </S.Href>
    )}
  </S.Container>
);
