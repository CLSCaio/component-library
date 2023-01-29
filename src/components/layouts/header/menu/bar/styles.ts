import styled from 'styled-components';

import { GoThreeBars } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';

import { medias } from 'src/global';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: max-content;
  gap: 5px;
`;

export const IMG = styled.img`
  display: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;

  ${medias.xXsmall} {
    display: flex;
  }
`;

export const Bars = styled(GoThreeBars)`
  display: flex;
  width: 30px;
  height: 30px;

  cursor: pointer;

  ${medias.xXsmall} {
    display: none;
  }
`;

export const Close = styled(AiOutlineClose)`
  display: flex;
  width: 30px;
  height: 30px;

  cursor: pointer;

  ${medias.xXsmall} {
    display: none;
  }
`;
