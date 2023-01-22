/* eslint-disable import/no-useless-path-segments */
import React from 'react';

import { Link } from '../../../..';

import * as I from './interface';
import * as S from './styles';

export const Opc = ({ openMenu, routes, link }: I.OpcProps) => (
  <S.Container>
    {routes.map(
      ({ label, href, onClick }) =>
        href !== '/*' && (
          <Link
            type={link?.type}
            colors={link?.colors}
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
