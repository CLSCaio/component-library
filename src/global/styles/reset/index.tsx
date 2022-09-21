import { createGlobalStyle } from 'styled-components';

import { medias, sizes, weights } from '../..';

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
    width: 100vw;
    height: 100vh;
  }

  h1 {
    font-size: ${sizes.xXlarge};
    font-weight: ${weights.black};
  }

  h2, button {
    font-size: ${sizes.large};
    font-weight: ${weights.bold};
  }

  a, h3 {
    font-size: ${sizes.medium};
    font-weight: ${weights.bold};
  }

  h4, p, li, ul, span, input, label, select {
    font-size: ${sizes.default};
    font-weight: ${weights.regular};
  }

  h5 {
    font-size: ${sizes.small};
    font-weight: ${weights.light};
  }
`;
