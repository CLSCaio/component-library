import styled, { css } from 'styled-components';

import { medias, colors } from 'src/global';

import * as I from './interface';

const returnTextColor = ({ color }: I.TooltipStyles) => {
  if (color) {
    switch (color) {
      case 'black':
      case 'transparent':
      case 'others-3':
      case 'others-5':
        return css`
          ${colors.white};
        `;

      default:
        return css`
          ${colors.black};
        `;
    }
  } else
    return css`
      ${colors.white};
    `;
};

const returnColor = ({ color, sinal }: I.TooltipStyles) => {
  if (!sinal) {
    switch (color) {
      case 'others-1':
        return css`
          ${colors.others[1]};
        `;
      case 'others-2':
        return css`
          ${colors.others[2]};
        `;
      case 'others-3':
        return css`
          ${colors.others[3]};
        `;
      case 'others-4':
        return css`
          ${colors.others[4]};
        `;
      case 'others-5':
        return css`
          ${colors.others[5]};
        `;
      case 'white':
        return css`
          ${colors.white};
        `;

      case 'transparent':
        return css`
          ${colors.third};
        `;
      default:
        return css`
          ${colors.black};
        `;
    }
  } else {
    switch (color) {
      case 'others-1':
        return css`
          border-color: ${colors.others[1]} transparent;
        `;
      case 'others-2':
        return css`
          border-color: ${colors.others[2]} transparent;
        `;
      case 'others-3':
        return css`
          border-color: ${colors.others[3]} transparent;
        `;
      case 'others-4':
        return css`
          border-color: ${colors.others[4]} transparent;
        `;
      case 'others-5':
        return css`
          border-color: ${colors.others[5]} transparent;
        `;
      case 'white':
        return css`
          border-color: ${colors.white} transparent;
        `;
      case 'transparent':
        return css`
          border-color: ${colors.third} transparent;
        `;
      default:
        return css`
          border-color: ${colors.black} transparent;
        `;
    }
  }
};

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
    css`
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

  color: ${({ color }) => returnTextColor({ color })};

  bottom: calc(100% + 8px);

  ${({ placement }) => handlePlacementTooltip({ placement })}

  text-align: center;

  background: ${({ color }) => returnColor({ color })};

  &::before {
    content: '';
    border-width: 1px;
    border-style: solid;
    ${({ color, sinal }) => returnColor({ color, sinal })};
    border-width: 4px 4px 0px 4px;
    top: 100%;
    position: absolute;

    ${({ placement }) => handlePlacementTooltipArrow({ placement })}
  }
`;

export const Icon = styled.span<I.TooltipStyles>`
  display: flex;

  svg {
    color: ${({ color }) => returnColor({ color })};
    width: 16px;
    height: 16px;

    ${medias.medium} {
      width: 20px;
      height: 20px;
    }
  }
`;
