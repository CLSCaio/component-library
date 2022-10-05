import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

import ClipLoader from 'react-spinners/ClipLoader';

import { Description } from '../description';

import * as I from './interface';
import * as S from './styles';

export const Accordion = ({
  list,
  icon = 'default',
  variant = 'default',
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
      {list.map(({ title, description, isInnerHtml, children, id }) => (
        <S.Panel key={`accordion-${id || title}`} variant={variant}>
          <S.Title
            variant={variant}
            id={id || title}
            onClick={() => displayDescription(id || title)}
          >
            {title}
            {icon === 'none' ? null : icon === 'default' ? (
              <>
                <AiOutlinePlus
                  id={`openIcon-${id || title}`}
                  className="icons open"
                />
                <AiOutlineMinus
                  id={`closeIcon-${id || title}`}
                  className="icons"
                />
              </>
            ) : (
              <>
                <MdKeyboardArrowDown
                  id={`openIcon-${id || title}`}
                  className="icons open"
                />

                <MdKeyboardArrowUp
                  id={`closeIcon-${id || title}`}
                  className="icons"
                />
              </>
            )}
          </S.Title>

          <S.Text id={`accordion-${id || title}`}>
            {description && isInnerHtml ? (
              <Description text={description} />
            ) : (
              <S.Desc>{description}</S.Desc>
            )}
            {children}
          </S.Text>
        </S.Panel>
      ))}
    </S.Container>
  ) : (
    <ClipLoader />
  );
};
