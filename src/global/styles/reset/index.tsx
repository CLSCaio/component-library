import { createGlobalStyle } from 'styled-components';

import { medias, fonts } from '@global';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 11px;

    ${medias.small} {
      font-size: 13px;
    }

   ${medias.default} {
      font-size: 16px;
    }

   ${medias['fullHD+']} {
      font-size: 19px;
    }

   ${medias['2k']} {
      font-size: 22px;
    }

   ${medias['4k']} {
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
    font-size: ${fonts.sizes.xXlarge};
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

  h4, p, li, ul, span, input, label, select {
    font-size: ${fonts.sizes.default};
    font-weight: ${fonts.weights.regular};
  }

  h5 {
    font-size: ${fonts.sizes.small};
    font-weight: ${fonts.weights.light};
  }
`;
