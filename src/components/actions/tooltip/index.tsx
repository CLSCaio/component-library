import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import { medias } from '@global';
import { IsMobile } from '@hooks';

import * as I from './interface';
import * as S from './styles';

export const Tooltip = ({
  description,
  placement = 'begin',
  color,
  disabled,
  isLoading,
}: I.TooltipProps) => {
  const isMobile = !IsMobile(medias.xSmall);

  return (
    <S.Container
      placement={isMobile ? placement : 'middle'}
      disabled={disabled || isLoading}
    >
      <S.Description
        color={color}
        sinal
        placement={isMobile ? placement : 'middle'}
      >
        {description}
      </S.Description>
      <S.Icon color={color}>
        <BsInfoCircle />
      </S.Icon>
    </S.Container>
  );
};
