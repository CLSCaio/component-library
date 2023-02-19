import React, { useEffect, useState } from 'react';

import { colors } from '@global';
import { Modal } from '@components';

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

  const elem = document.getElementById('eventWheel');

  const eventWheel = () => {
    elem?.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault();

      const y = event.deltaY;
      let scrollWheel;

      if (y > 0) {
        scrollWheel = 200;
      } else {
        scrollWheel = -200;
      }

      elem.scrollBy({
        left: scrollWheel,
        behavior: 'smooth',
      });
    });
  };

  useEffect(() => {
    eventWheel();
  }, []);

  useEffect(() => {
    const newArray: any[] = [];
    if (list) list.map(items => newArray.push([...Object.values(items)]));
    setTableList(newArray);
  }, [list]);

  return list.length < titles.length ? (
    <S.Container size={size}>
      <S.Table id="eventWheel" onWheel={eventWheel}>
        <S.Thead>
          <S.Tr>
            {titles.map((title, i) => (
              <S.Th
                key={`table-title-${+i}`}
                width={title?.width}
                textAlign={title?.textAlign || globalTextAlign}
                transform={title?.textTransform}
                size={size}
              >
                {title?.name}
              </S.Th>
            ))}
          </S.Tr>
        </S.Thead>

        {tableList.map((rows, i) => {
          const changeDivider =
            withDivider === 'pair'
              ? i % 2 === 0
                ? colors.secundary
                : ''
              : (i + 1) % 2 === 0
              ? colors.secundary
              : '';

          return (
            <S.Tbody
              key={`table-row-${+i}`}
              withHover={withHover}
              withDivider={withDivider}
              id={`table-row-${+i}`}
              color={withDivider ? changeDivider : ''}
            >
              <S.Tr>
                {rows.map((content, indice) => (
                  <S.Td
                    key={`table-row-content-${+indice}`}
                    id={`table-row-content-${+indice}`}
                    width={titles[indice].width}
                    textAlign={titles[indice].textAlign || globalTextAlign}
                    transform={titles[indice].textTransform}
                  >
                    {content}
                  </S.Td>
                ))}
              </S.Tr>
            </S.Tbody>
          );
        })}
      </S.Table>
    </S.Container>
  ) : (
    <Modal
      title="Rendering error"
      description="Please check table props and try again."
    />
  );
};
