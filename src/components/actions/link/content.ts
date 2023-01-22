import { css } from 'styled-components';
import { colors as defaultColors } from 'src/global';

import * as I from './interface';

export const defaultStyle = ({ colors }: I.LinkStyles) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: ${colors?.[0] || defaultColors.link};
  cursor: pointer;
  width: max-content;
  position: relative;
  text-decoration: none;
  letter-spacing: 0;
  gap: 10px;
`;

export const customStyles = ({ colors, variant }: I.LinkStyles) => {
  switch (variant) {
    case 'doubleLine':
      return css`
        :hover,
        :active {
          letter-spacing: 3px;
          color: ${colors?.[1] || colors?.[0] || defaultColors.link};
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
          border: 0.5px solid
            ${colors?.[1] || colors?.[0] || defaultColors.link};
          backface-visibility: hidden;
          border-color: ${colors?.[1] || colors?.[0] || defaultColors.link};
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
          color: ${colors?.[1] || colors?.[0] || defaultColors.link};
        }

        :after {
          backface-visibility: hidden;
          content: ' ';
          position: relative;
          transition: all 280ms ease-in-out;
          width: 0;
        }

        :hover:after {
          border: 0.5px solid
            ${colors?.[1] || colors?.[0] || defaultColors.link};
          backface-visibility: hidden;
          border-color: ${colors?.[1] || colors?.[0] || defaultColors.link};
          transition: width 350ms ease-in-out;
          width: 120%;
          bottom: auto;
          top: 0;
        }
      `;

    default:
      return css`
        :hover,
        :active {
          letter-spacing: 3px;
          color: ${colors?.[1] || colors?.[0] || defaultColors.link};
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
          border-color: ${colors?.[1] || colors?.[0] || defaultColors.link};
          transition: width 350ms ease-in-out;
          width: 120%;
          bottom: auto;
          top: 0;
        }
      `;
  }
};
