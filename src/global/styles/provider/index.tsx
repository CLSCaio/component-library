import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { colors, sizes, weights, GlobalStyle } from '@global';

const theme = {
  colors,
  sizes,
  weights,
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
