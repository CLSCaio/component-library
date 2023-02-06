import { createGlobalStyle } from 'styled-components';

import { fonts } from '@global';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 11px;

    @media (min-width: 500px) {
      font-size: 13px;
    }

    @media (min-width: 1080px) {
      font-size: 16px;
    }

    @media (min-width: 1920px) {
      font-size: 19px;
    }

    @media (min-width: 2560px) {
      font-size: 22px;
    }

    @media (min-width: 3840px) {
      font-size: 24px;
    }
  }

  body, #root, #__next {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  h1 {
    font-size: ${fonts.sizes.xLarge};
    font-weight: ${fonts.weights.black};
  }

  h2, button {
    font-size: ${fonts.sizes.large};
    font-weight: ${fonts.weights.bold};
  }

  a, h3 {
    font-size: ${fonts.sizes.medium};
    font-weight: ${fonts.weights.bold};
  }

  h4, p, li, ul, span, input, label, select, th, td {
    font-size: ${fonts.sizes.default};
    font-weight: ${fonts.weights.regular};
  }

  h5 {
    font-size: ${fonts.sizes.small};
    font-weight: ${fonts.weights.light};
  }
`;
