import React from 'react';

import { colors_config } from '@config';
import * as I from './interface';
import * as S from './styles';

export const Link = ({
  href,
  label,
  type = 'react',
  onClick,
  variant = 'doubleLine',
  target,
}: I.LinkProps) => {
  const { store } = colors_config();
  return (
    <S.Container onClick={onClick}>
      {type === 'react' && ( // React link
        <S.To variant={variant} to={href} target={target} store={store}>
          {label}
        </S.To>
      )}

      {type === 'default' && ( // Normal link
        <S.Href
          store={store}
          href={href}
          target={target || '_blank'}
          rel="noreferrer"
          variant={variant}
        >
          {label}
        </S.Href>
      )}

      {type === 'next' && ( // Next link
        <S.NLink href={href} store={store} variant={variant}>
          {label}
        </S.NLink>
      )}
    </S.Container>
  );
};
