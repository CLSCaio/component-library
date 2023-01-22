import styled, { css } from 'styled-components';

import { medias, colors } from '../../../global';

import * as I from './interface';

const calcHeight = ({ menu, routes }: I.HeaderStyles) => {
  const lenght = routes?.length;
  const calc = lenght && (lenght + 1) * 60;
  const px = `${calc}px`;

  if (menu) {
    return css`
      height: ${px};
    `;
  }
  return css`
    height: 70px;
  `;
};

export const Container = styled.header<I.HeaderStyles>`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  ${({ menu, routes }) => calcHeight({ menu, routes })}

  overflow: hidden;
  top: 0;

  position: ${({ type }) => type || 'fixed'};

  background: ${({ bgColor }) => bgColor || 'transparent'};

  transition: 0.7s;

  border-bottom: 5px double ${colors.primary};

  ${medias.xXsmall} {
    align-items: center;
    justify-content: center;
    height: 70px;
  }

  z-index: 99;
`;

export const Separator = styled.span<I.HeaderStyles>`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  max-width: max-content;

  ${medias.xXsmall} {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
    max-width: ${({ maxW }) =>
      maxW && maxW === 'block' ? I.sizes.block : I.sizes.default};
  }
`;

export const Divider = styled.span`
  height: 75px;
`;
