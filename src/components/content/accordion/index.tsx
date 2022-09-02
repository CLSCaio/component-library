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
  const displayDescription = (indice: number) => {
    const acc = document.getElementById(`accordion${indice + 1}`);
    const openIcon = document.getElementById(`openIcon${indice + 1}`);
    const closeIcon = document.getElementById(`closeIcon${indice + 1}`);

    openIcon?.classList?.toggle('open');
    closeIcon?.classList?.toggle('open');
    acc?.classList?.toggle('open');
  };

  return list ? (
    <S.Container>
      {list.map(({ title, description, isInnerHtml }, i) => (
        <S.Panel
          key={`accordion-${title}`}
          variant={variant}
          onClick={() => displayDescription(i)}
        >
          <S.Title variant={variant} id={title}>
            {title}
            {icon === 'none' ? null : icon === 'default' ? (
              <>
                <AiOutlinePlus id={`openIcon${i + 1}`} className="icons open" />
                <AiOutlineMinus id={`closeIcon${i + 1}`} className="icons" />
              </>
            ) : (
              <>
                <MdKeyboardArrowDown
                  id={`openIcon${i + 1}`}
                  className="icons open"
                />

                <MdKeyboardArrowUp id={`closeIcon${i + 1}`} className="icons" />
              </>
            )}
          </S.Title>

          <S.Text id={`accordion${i + 1}`}>
            {isInnerHtml ? (
              <Description text={description} />
            ) : (
              <p>{description}</p>
            )}
          </S.Text>
        </S.Panel>
      ))}
    </S.Container>
  ) : (
    <ClipLoader />
  );
};
