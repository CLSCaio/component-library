import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../reset';

import { colors, sizes, weights } from '../../themes';

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
