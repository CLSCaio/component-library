import React from 'react';

import { Link } from '@components';

import * as I from './interface';
import * as S from './styles';

export const Opc = ({ openMenu, routes, link }: I.OpcProps) => (
  <S.Container>
    {routes.map(
      ({ label, href, onClick }) =>
        href !== '/*' && (
          <Link
            type={link?.type}
            variant={link?.variant}
            key={label}
            href={{ defautlLink: href }}
            onClick={() => {
              openMenu(false);
              onClick && onClick();
            }}
            label={label}
          />
        ),
    )}
  </S.Container>
);
