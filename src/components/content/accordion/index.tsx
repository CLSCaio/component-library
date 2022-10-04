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
      {list.map(({ title, description, isInnerHtml, children }) => (
        <S.Panel
          key={`accordion-${title}`}
          variant={variant}
          onClick={() => displayDescription(title)}
        >
          <S.Title variant={variant} id={title}>
            {title}
            {icon === 'none' ? null : icon === 'default' ? (
              <>
                <AiOutlinePlus
                  id={`openIcon-${title}`}
                  className="icons open"
                />
                <AiOutlineMinus id={`closeIcon-${title}`} className="icons" />
              </>
            ) : (
              <>
                <MdKeyboardArrowDown
                  id={`openIcon-${title}`}
                  className="icons open"
                />

                <MdKeyboardArrowUp
                  id={`closeIcon-${title}`}
                  className="icons"
                />
              </>
            )}
          </S.Title>

          <S.Text id={`accordion-${title}`}>
            {isInnerHtml ? (
              <Description text={description} />
            ) : (
              <p>{description}</p>
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
