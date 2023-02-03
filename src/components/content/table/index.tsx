import React, { useEffect, useState } from 'react';

import { colors } from 'src/global';

import eventWheel from './mouseWheelScrollX';
import * as I from './interface';
import * as S from './styles';

export const Table = ({
  titles,
  list,
  size,
  withDivider,
  globalTextAlign,
  withHover,
}: I.TableProps) => {
  const [tableList, setTableList] = useState<any[][]>([]);

  useEffect(() => {
    const newArray: any[] = [];
    if (list) list.map(items => newArray.push([...Object.values(items)]));
    setTableList(newArray);
  }, [list]);

  return (
    <S.Container size={size}>
      <S.Table id="eventWheel" onWheel={e => eventWheel(e.currentTarget.id)}>
        <S.Thead>
          <S.Tr>
            {titles.map(title => (
              <S.Th
                width={title.width}
                textAlign={title.textAlign || globalTextAlign}
                transform={title.textTransform}
                key={`table-title-${title.name}`}
                size={size}
              >
                {title.name}
              </S.Th>
            ))}
          </S.Tr>
        </S.Thead>

        {tableList.map((rows, i) => (
          <S.Tbody
            withHover={withHover}
            withDivider={withDivider}
            id={`table-row-${+i}`}
            key={`table-row-${+i}`}
            color={i % 2 === 0 ? colors.grey[700] : ''}
          >
            <S.Tr>
              {rows.map((content, indice) => (
                <S.Td
                  id={`table-row-content-${+indice}`}
                  width={titles[indice].width}
                  textAlign={titles[indice].textAlign || globalTextAlign}
                  transform={titles[indice].textTransform}
                  key={`table-row-content-${+indice}`}
                >
                  {content}
                </S.Td>
              ))}
            </S.Tr>
          </S.Tbody>
        ))}
      </S.Table>
    </S.Container>
  );
};
