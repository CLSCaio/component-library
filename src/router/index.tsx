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
        link={{
          type: 'react',
          colors: internalHeader?.link?.color,
          variant: internalHeader?.link?.variant,
        }}
      />
    )}
    <Main withPad={withPad}>
      <Routes>
        {routes.map(({ reactComponent, href, ...route }) => (
          <Route
            {...route}
            path={href}
            key={route.label}
            element={reactComponent}
          />
        ))}
      </Routes>
    </Main>
  </BrowserRouter>
);
