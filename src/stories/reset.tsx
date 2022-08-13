import { createGlobalStyle } from 'styled-components';

import { medias, sizes, weights } from '../global';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 11px;
    width: 100%;
    height: 100%;

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
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: ${sizes.xXlarge};
    font-weight: ${weights.black};
  }

  h2, button {
    font-size: ${sizes.large};
    font-weight: ${weights.bold};
  }

  h3, p, a, li, ul, span, input, label, select {
    font-size: ${sizes.default};
    font-weight: ${weights.regular};
  }

  h4 {
    font-size: ${sizes.small};
    font-weight: ${weights.light};
  }
`;
