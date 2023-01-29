import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Header, HeaderProps } from '../..';

export default {
  title: 'Layouts/Header',
  component: Header,
} as Meta;

export const Overview: Story<HeaderProps> = args => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);

Overview.args = {
  routes: [
    {
      label: 'h1',
      href: '/h1',
    },
    {
      label: 'h2',
      href: '/h2',
    },
    {
      label: 'h3',
      href: '/h3',
    },
    {
      label: 'h4',
      href: '/h4',
    },
  ],
};
