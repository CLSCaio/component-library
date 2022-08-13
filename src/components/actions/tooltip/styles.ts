import styled, { css } from 'styled-components';

import { medias, colors } from 'src/global';

import * as I from './interface';

const handlePlacementTooltip = ({ placement }: I.TooltipStyles) => {
  switch (placement) {
    case 'downBegin':
      return css`
        left: 5%;
        transform: translate(-2%);
      `;
    case 'downMiddle':
      return css`
        left: 55%;
        transform: translateX(-50%);
      `;
    default:
      return css`
        left: -20%;
        transform: translate(-87%);
      `;
  }
};

const handlePlacementTooltipArrow = ({ placement }: I.TooltipStyles) => {
  switch (placement) {
    case 'downBegin':
      return css`
        left: 4%;

        transform: translateX(5%);
        ${medias.xXsmall} {
          transform: translateX(-12%);
        }
      `;
    case 'downMiddle':
      return css`
        left: 50%;
        transform: translate(-56%);
      `;
    default:
      return css`
        left: 90%;
        transform: translateX(30%);

        ${medias.xXsmall} {
          transform: translateX(10%);
        }
      `;
  }
};

export const Container = styled.div<I.TooltipStyles>`
  position: relative;

  p:hover {
    opacity: 0.7;
  }

  &:hover p:first-of-type {
    opacity: 1;
    visibility: visible;
  }

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;

    p:hover {
      opacity: 1;
    }
  
    &:hover p:first-of-type {
      opacity: 0;
      visibility: none;
    }

    * {
      color: ${colors.disabled};
    }
  `}
`;

export const Description = styled.p<I.TooltipStyles>`
  position: absolute;

  width: max-content;

  ${medias.xXsmall} {
    width: 214px;
  }

  ${medias.small} {
    width: 304px;
  }

  padding: 12px 20px;

  z-index: 15;

  border-radius: 4px;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.4s;

  bottom: calc(100% + 8px);

  ${({ placement }) => handlePlacementTooltip({ placement })}

  text-align: center;
  color: ${colors.white};

  background: ${({ color }) =>
    color
      ? color === 'black'
        ? colors.black
        : color === 'steelBlue'
        ? colors.hover
        : color === 'steelGray'
        ? colors.disabled
        : colors.others[color]
      : colors.black};

  &::before {
    content: '';
    border-width: 1px;
    border-style: solid;
    border-color: ${({ color }) =>
        color
          ? color === 'black'
            ? colors.black
            : color === 'steelBlue'
            ? colors.hover
            : color === 'steelGray'
            ? colors.disabled
            : colors.others[color]
          : colors.black}
      transparent;
    border-width: 4px 4px 0 4px;
    top: 100%;
    position: absolute;

    ${({ placement }) => handlePlacementTooltipArrow({ placement })}
  }
`;

export const Icon = styled.span<I.TooltipStyles>`
  display: flex;

  svg {
    color: ${({ color }) =>
      color
        ? color === 'black'
          ? colors.black
          : color === 'steelBlue'
          ? colors.hover
          : color === 'steelGray'
          ? colors.disabled
          : colors.others[color]
        : colors.black};
    width: 16px;
    height: 16px;

    ${medias.medium} {
      width: 20px;
      height: 20px;
    }
  }
`;
