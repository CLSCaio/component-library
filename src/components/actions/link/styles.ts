import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import NextLink from 'next/link';

import * as C from './content';
import * as I from './interface';

export const globalStyles = ({ store, variant }: I.LinkStyles) => css`
  ${C.defaultStyle({ store })};
  ${C.customStyles({ variant, store })};
`;

export const Container = styled.span`
  * {
    box-sizing: inherit;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease;
  }
`;

export const To = styled(Link)<I.LinkStyles>`
  ${({ variant, store }) => globalStyles({ variant, store })};
`;

export const Href = styled.a<I.LinkStyles>`
  ${({ variant, store }) => globalStyles({ variant, store })};
`;

export const NLink = styled(NextLink)<I.LinkStyles>`
  ${({ variant, store }) => globalStyles({ variant, store })};
`;
