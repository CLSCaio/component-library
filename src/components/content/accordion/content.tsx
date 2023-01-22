import React from 'react';
import { css } from 'styled-components';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

import { colors as themeColor } from 'src/global';

import * as I from './interface';

export const returnIcon = ({ title, icon }: I.ChangeIconProps) => {
  const validIcon = {
    none: null,
    default: (
      <>
        <AiOutlinePlus id={`openIcon-${title}`} className="icons open" />
        <AiOutlineMinus id={`closeIcon-${title}`} className="icons close" />
      </>
    ),
    arrow: (
      <>
        <MdKeyboardArrowDown id={`openIcon-${title}`} className="icons open" />
        <MdKeyboardArrowUp id={`closeIcon-${title}`} className="icons" />
      </>
    ),
  };

  return validIcon[icon];
};

export const returnBorder = ({ variant, colors }: I.AccordionStyles) => {
  if (!variant)
    return css`
      border: none;
    `;

  const validVariant = {
    default: css`
      border: 1px solid ${colors?.[2] || themeColor.black};
    `,
    inline: css`
      border-bottom: 1px solid ${colors?.[2] || themeColor.black};
    `,
    onlyBg: css`
      border-bottom: 1px solid ${colors?.[2] || themeColor.black};
    `,
  };

  return validVariant[variant];
};
