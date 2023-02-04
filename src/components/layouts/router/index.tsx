import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main, Header } from '@components';

import * as I from './interface';

export const Router = ({
  routes,
  externalHeader,
  internalHeader,
  mobileLayout,
}: I.RouterProps) => (
  <BrowserRouter>
    {externalHeader || <Header routes={routes} {...internalHeader} />}
    <Main mobileLayout={mobileLayout}>
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
