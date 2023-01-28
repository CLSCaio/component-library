import React, { useEffect } from 'react';

import { colors } from 'src/global';

import * as I from './interface';

import eventWheel from './mouseWheelScrollX';
import * as S from './styles';

export const Table = ({ list, ...rest }: I.TableProps) => (
  <S.Container {...rest}>
    <S.Table id="eventWheel" onWheel={e => eventWheel(e.currentTarget.id)}>
      <S.Heading>
        {list.titles.map(title => (
          <S.Title key={`table-${title}`} {...rest}>
            {title}
          </S.Title>
        ))}
      </S.Heading>

      {list.columns.map((rows, i) => (
        <S.Row
          {...rest}
          id={`row-table-${i + 1}`}
          key={`table-row${rows}`}
          click={list.onClick}
          onClick={e => list.onClick && list.onClick(e)}
          color={i % 2 === 0 ? colors.grey.sky : ''}
        >
          {rows.map(descriptions => (
            <S.Content key={`table-content-${descriptions}`} {...rest}>
              {descriptions}
            </S.Content>
          ))}
        </S.Row>
      ))}
    </S.Table>
  </S.Container>
);
