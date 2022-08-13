import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main } from '..';

import * as I from './interface';

export const Router = ({ routes }: I.RouterProps) => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ component: Component, ...route }) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Main>
              <Component />
            </Main>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
);
