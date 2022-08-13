import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main, Header } from '..';

import * as I from './interface';

export const Router = ({ routes, withHeader }: I.RouterProps) => (
  <BrowserRouter>
    {withHeader?.header && (
      <Header
        routes={routes}
        type={withHeader.type}
        bgColor={withHeader.bgColor}
        maxW={withHeader.maxW}
      />
    )}
    <Main>
      <Routes>
        {routes.map(({ component, name, ...route }) => (
          <Route {...route} key={name} element={component} />
        ))}
      </Routes>
    </Main>
  </BrowserRouter>
);
