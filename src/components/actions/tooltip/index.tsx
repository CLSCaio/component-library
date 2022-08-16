import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import * as I from './interface';
import * as S from './styles';

export const Tooltip = ({
  description,
  placement = 'begin',
  color,
  disabled,
}: I.TooltipProps) => (
  <S.Container placement={placement} disabled={disabled}>
    <S.Description color={color} sinal placement={placement}>
      {description}
    </S.Description>
    <S.Icon color={color}>
      <BsInfoCircle />
    </S.Icon>
  </S.Container>
);
