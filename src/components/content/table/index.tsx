import React from 'react';

import { colors } from 'src/global';

import * as I from './interface';

import * as S from './styles';

export const Table = ({ list, ...rest }: I.TableProps) => (
  <S.Container {...rest}>
    <S.Table>
      <S.Heading>
        {list.titles.map(title => (
          <S.Title {...rest}> {title}</S.Title>
        ))}
      </S.Heading>

      {list.columns.map((rows, i) => (
        <S.Row
          {...rest}
          click={list.onClick}
          onClick={() => list.onClick}
          color={i % 2 === 0 ? colors.grey.sky : ''}
        >
          {rows.map(descriptions => (
            <S.Content {...rest}> {descriptions}</S.Content>
          ))}
        </S.Row>
      ))}
    </S.Table>
  </S.Container>
);
