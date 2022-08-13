import styled from 'styled-components';

import { medias, colors } from '../../../global';

import * as I from './interface';

export const Container = styled.header<I.HeaderStyleProps>`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  height: ${({ menu }) => (menu ? '270px' : '70px')};

  overflow: hidden;
  top: 0;

  position: ${({ type }) => (type && type === 'fixed' ? 'fixed' : 'static')};

  background: ${({ bgColor }) => bgColor || 'transparent'};

  transition: 0.7s;

  border-bottom: 5px double ${colors.primary};

  ${medias.small} {
    align-items: center;
    justify-content: center;
    height: 70px;
  }
`;

export const Separator = styled.span<I.HeaderStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  max-width: max-content;

  ${medias.small} {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
    max-width: ${({ maxW }) =>
      maxW && maxW === 'block' ? I.sizes.block : I.sizes.default};
  }
`;
