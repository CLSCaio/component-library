import React from 'react';

import { Link } from '../../../../components';

import * as I from './interface';
import * as S from './styles';

export const Opc = ({ openMenu, routes, link }: I.OpcProps) => (
  <S.Container>
    {routes.map(
      ({ id, children, path }) =>
        path !== '/*' && (
          <Link
            type={link}
            key={id}
            link={path}
            onClick={() => openMenu(false)}
          >
            {children}
          </Link>
        ),
    )}
  </S.Container>
);
