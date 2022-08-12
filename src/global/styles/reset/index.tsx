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

  body, #root {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    ${sizes.xXlarge};
    ${weights.black};
  }

  h2, button {
    ${sizes.large};
    ${weights.bold};
  }

  h3, p, a, li, ul, span, input, label, select {
    ${sizes.default};
    ${weights.regular};
  }

  h4 {
    ${sizes.small};
    ${weights.light};
  }
`;
