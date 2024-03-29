import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Description } from '@components';

import * as C from './content';
import * as I from './interface';
import * as S from './styles';

export const Accordion = ({
  list,
  icon = 'default',
  variant = 'default',
  bgColor,
  hoverColor,
  maxW,
}: I.AccordionProps) => {
  const displayDescription = (id: string) => {
    const acc = document.getElementById(`accordion-${id}`);
    const openIcon = document.getElementById(`openIcon-${id}`);
    const closeIcon = document.getElementById(`closeIcon-${id}`);

    openIcon?.classList?.toggle('open');
    closeIcon?.classList?.toggle('open');
    acc?.classList?.toggle('open');
  };

  return list ? (
    <S.Container maxW={maxW}>
      {list.map(({ title, description, isInnerHtml, children, id }, i) => {
        const validTitle = title.replace(/[' ']/g, '-').toLowerCase();
        const validId = id || validTitle;

        return (
          <S.Panel
            key={`accordion-panel-${+i}`}
            variant={variant}
            bgColor={bgColor}
          >
            <S.PanelHead
              hoverColor={hoverColor}
              variant={variant}
              id={validId}
              onClick={() => displayDescription(validId)}
            >
              <S.Title>{title}</S.Title>
              {C.returnIcon({ title: validId, icon })}
            </S.PanelHead>

            <S.Text id={`accordion-${validId}`}>
              {description && isInnerHtml ? (
                <Description text={description} />
              ) : (
                <S.Desc>{description}</S.Desc>
              )}
              {children}
            </S.Text>
          </S.Panel>
        );
      })}
    </S.Container>
  ) : (
    <ClipLoader />
  );
};
