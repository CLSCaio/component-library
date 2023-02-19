import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import NextLink from 'next/link';

import { fonts } from '@global';

import * as C from './content';
import * as I from './interface';

export const globalStyles = ({ variant }: I.LinkStyles) => css`
  ${C.defaultStyle()};
  ${C.customStyles({ variant })};
  font-size: ${fonts.sizes.large};
  font-weight: ${fonts.weights.medium};
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
  ${({ variant }) => globalStyles({ variant })};
`;

export const Href = styled.a<I.LinkStyles>`
  ${({ variant }) => globalStyles({ variant })};
`;

export const NLink = styled(NextLink)<I.LinkStyles>`
  ${({ variant }) => globalStyles({ variant })};
`;
