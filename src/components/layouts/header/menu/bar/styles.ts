import styled from 'styled-components';

import { GoThreeBars } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';

import { medias } from '@global';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: max-content;
  gap: 8px;
`;

export const IMG = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;

export const IconImgGroup = styled.span`
  display: none;
  ${medias.xXsmall} {
    display: flex;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const OpenCloseMenuOpc = styled.span`
  display: flex;

  svg {
    width: 30px;
    height: 30px;

    cursor: pointer;
  }

  ${medias.xXsmall} {
    display: none;
  }
`;

export const Bars = styled(GoThreeBars)`
  display: flex;

  ${medias.xXsmall} {
    display: none;
  }
`;

export const Close = styled(AiOutlineClose)`
  display: flex;

  ${medias.xXsmall} {
    display: none;
  }
`;
