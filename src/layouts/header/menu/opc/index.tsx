import React from 'react';

import { Link } from '../../../../components';

import * as I from './interface';
import * as S from './styles';

export const Opc = ({ openMenu, routes, link }: I.OpcProps) => (
  <S.Container>
    {routes.map(
      ({ name, path }) =>
        path !== '/*' && (
          <Link
            type={link}
            key={name}
            label={name}
            link={path}
            onClick={() => openMenu(false)}
          />
        ),
    )}
  </S.Container>
);
