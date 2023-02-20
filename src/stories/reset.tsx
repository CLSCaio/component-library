import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 12px;
    width: 100%;
    height: 100%;

    @media (min-width: 500px) {
      font-size: 14px;
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


  body {
    margin: 20px;
  }

  body, #root, form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;
  }


`;
