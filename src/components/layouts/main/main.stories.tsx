import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Main, MainProps } from '../..';

export default {
  title: 'Layouts/Main',
  component: Main,
} as Meta;

export const Overview: Story<MainProps> = args => (
  <BrowserRouter>
    <Main {...args}>
      <h2>testando main</h2>
      <h1>testando 123</h1>
    </Main>
  </BrowserRouter>
);
