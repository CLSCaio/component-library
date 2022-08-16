import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { colors } from '../../../global';

const linkStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: ${colors.link};
  cursor: pointer;
  width: max-content;
  position: relative;
  text-decoration: none;
  letter-spacing: 0;
  gap: 10px;

  :hover,
  :active {
    letter-spacing: 3px;
  }

  :after,
  :before {
    backface-visibility: hidden;
    content: ' ';
    position: relative;
    transition: all 280ms ease-in-out;
    width: 0;
  }

  :hover:after,
  :hover:before {
    border: 0.5px solid ${colors.link};
    backface-visibility: hidden;
    border-color: ${colors.link};
    transition: width 350ms ease-in-out;
    width: 130%;
    bottom: auto;
    top: 0;
  }
`;

export const Container = styled.span`
  * {
    box-sizing: inherit;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease;
  }
`;

export const To = styled(Link)`
  ${linkStyles}
`;

export const Href = styled.a`
  ${linkStyles}
`;
