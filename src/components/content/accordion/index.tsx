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
}: I.AccordionProps) => {
  const displayDescription = (title: string) => {
    const acc = document.getElementById(`accordion-${title}`);
    const openIcon = document.getElementById(`openIcon-${title}`);
    const closeIcon = document.getElementById(`closeIcon-${title}`);

    openIcon?.classList?.toggle('open');
    closeIcon?.classList?.toggle('open');
    acc?.classList?.toggle('open');
  };

  return list ? (
    <S.Container>
      {list.map(({ title, description, isInnerHtml, children }) => {
        const formattedTitle = title.replaceAll(' ', '');
        return (
          <S.Panel
            key={`accordion-${formattedTitle}`}
            variant={variant}
            onClick={() => displayDescription(formattedTitle)}
          >
            <S.Title variant={variant} id={formattedTitle}>
              {title}
              {icon === 'none' ? null : icon === 'default' ? (
                <>
                  <AiOutlinePlus
                    id={`openIcon-${formattedTitle}`}
                    className="icons open"
                  />
                  <AiOutlineMinus
                    id={`closeIcon-${formattedTitle}`}
                    className="icons"
                  />
                </>
              ) : (
                <>
                  <MdKeyboardArrowDown
                    id={`openIcon-${formattedTitle}`}
                    className="icons open"
                  />

                  <MdKeyboardArrowUp
                    id={`closeIcon-${formattedTitle}`}
                    className="icons"
                  />
                </>
              )}
            </S.Title>

            <S.Text id={`accordion-${formattedTitle}`}>
              {isInnerHtml ? (
                <Description text={description} />
              ) : (
                <p>{description}</p>
              )}
            </S.Text>

            {children}
          </S.Panel>
        );
      })}
    </S.Container>
  ) : (
    <ClipLoader />
  );
};
