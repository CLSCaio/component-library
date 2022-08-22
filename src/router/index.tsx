import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main, Header } from '..';

import * as I from './interface';

export const Router = ({
  routes,
  externalHeader,
  internalHeader,
  withPad,
}: I.RouterProps) => (
  <BrowserRouter>
    {externalHeader || (
      <Header
        routes={routes}
        type={internalHeader?.type}
        bgColor={internalHeader?.bgColor}
        maxW={internalHeader?.maxW}
      />
    )}
    <Main withPad={withPad}>
      <Routes>
        {routes.map(({ component, children, id, ...route }) => (
          <Route {...route} key={id} element={component}>
            {children}
          </Route>
        ))}
      </Routes>
    </Main>
  </BrowserRouter>
);
