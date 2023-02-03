import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as C from './content';
import * as I from './interface';

export const Container = styled.span`
  * {
    box-sizing: inherit;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease;
  }
`;

export const To = styled(Link)<I.LinkStyles>`
  ${C.defaultStyle()};
  ${({ variant }) => C.customStyles({ variant })};
`;

export const Href = styled.a<I.LinkStyles>`
  ${C.defaultStyle()};
  ${({ variant }) => C.customStyles({ variant })};
`;
