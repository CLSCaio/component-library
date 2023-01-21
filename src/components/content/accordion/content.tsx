import React from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

import { ChangeIconProps } from './interface';

export const returnIcon = ({ title, icon }: ChangeIconProps) => {
  console.log(title);

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
