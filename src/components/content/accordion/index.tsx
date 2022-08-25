import React, { useEffect, useState } from 'react';

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
  const displayDescription = (accId: string, indice: number) => {
    const acc = document.getElementById(accId);
    acc?.classList?.toggle('open');
  };

  return list ? (
    <S.Container>
      {list.map(({ title, description, isInnerHtml, isActive }, i) => (
        <S.Panel
          variant={variant}
          onClick={() => displayDescription(`accordion${i + 1}`, i)}
        >
          <S.Title variant={variant} id={title}>
            {title}
            {icon === 'none' ? null : icon === 'default' ? (
              !isActive ? (
                <AiOutlinePlus />
              ) : (
                <AiOutlineMinus />
              )
            ) : icon === 'arrow' && !isActive ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
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
