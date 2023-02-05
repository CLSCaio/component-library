import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { colors, fonts, GlobalStyle } from '@global';

const theme = {
  colors,
  sizes: fonts.sizes,
  weights: fonts.weights,
};

type ProviderProps = {
  children: ReactNode;
  themes?: {};
};

export const Provider = ({ children, themes = theme }: ProviderProps) => (
  <ThemeProvider theme={themes}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
);
