import { css } from 'styled-components';
import { colors } from '@global';

import * as I from './interface';

export const defaultStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: ${colors.link.primary};
  cursor: pointer;
  width: max-content;
  position: relative;
  text-decoration: none;
  letter-spacing: 0;
  gap: 10px;
`;

export const customStyles = ({ variant }: I.LinkStyles) => {
  switch (variant) {
    case 'doubleLine':
      return css`
        :hover,
        :active {
          letter-spacing: 3px;
          color: ${colors.link.primary};
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
          border: 0.5px solid ${colors.link.primary};
          backface-visibility: hidden;
          border-color: ${colors.link.primary};
          transition: width 350ms ease-in-out;
          width: 120%;
          bottom: auto;
          top: 0;
        }
      `;

    case 'underline':
      return css`
        :hover,
        :active {
          letter-spacing: 3px;
          color: ${colors.link.primary};
        }

        :after {
          backface-visibility: hidden;
          content: ' ';
          position: relative;
          transition: all 280ms ease-in-out;
          width: 0;
        }

        :hover:after {
          border: 0.5px solid ${colors.link.primary};
          backface-visibility: hidden;
          border-color: ${colors.link.primary};
          transition: width 350ms ease-in-out;
          width: 120%;
          bottom: auto;
          top: 0;
        }
      `;

    case 'stretch':
      return css`
        :hover,
        :active {
          letter-spacing: 3px;
          color: ${colors.link.primary};
        }

        :after {
          backface-visibility: hidden;
          content: ' ';
          position: relative;
          transition: all 280ms ease-in-out;
          width: 0;
        }

        :hover:after {
          backface-visibility: hidden;
          border-color: ${colors.link.primary};
          transition: width 350ms ease-in-out;
          width: 120%;
          bottom: auto;
          top: 0;
        }
      `;
    default:
      return css`
        color: ${colors.link.primary};
        :hover {
          color: ${colors.link.hover};
        }
      `;
  }
};
