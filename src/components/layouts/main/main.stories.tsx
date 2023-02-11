import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Main, MainProps } from '@components';

export default {
  title: 'Layouts/Main',
  component: Main,
} as Meta;

export const Overview: Story<MainProps> = args => (
  <BrowserRouter>
    <Main {...args}>
      <h2>testing main</h2>
      <h1>testing 123</h1>
    </Main>
  </BrowserRouter>
);
