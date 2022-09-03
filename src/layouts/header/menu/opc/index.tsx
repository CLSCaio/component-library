import React from 'react';

import { Link } from '../../../../components';

import * as I from './interface';
import * as S from './styles';

export const Opc = ({ openMenu, routes, link }: I.OpcProps) => (
  <S.Container>
    {routes.map(
      ({ label, href }) =>
        href !== '/*' && (
          <Link
            type={link?.type}
            colors={link?.colors}
            variant={link?.variant}
            key={label}
            href={{ pathname: href }}
            onClick={() => openMenu(false)}
            label={label}
          />
        ),
    )}
  </S.Container>
);
