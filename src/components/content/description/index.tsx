import React from 'react';

import * as I from './interface';
import * as S from './styles';

export const Description = ({ text }: I.DescriptionProps) => (
  <S.Text dangerouslySetInnerHTML={{ __html: text }} />
);
