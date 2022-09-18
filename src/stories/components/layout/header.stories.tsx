import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Header, HeaderProps, Group } from '../../..';

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
      reactComponent: <Group> dfdsf sdfd</Group>,
      label: 'h1',
      href: '/h1',
    },
    {
      reactComponent: <Group> dfdsf sdfd</Group>,
      label: 'h2',
      href: '/h2',
    },
    {
      reactComponent: <Group> dfdsf sdfd</Group>,
      label: 'h3',
      href: '/h3',
    },
    {
      reactComponent: <Group> dfdsf sdfd</Group>,
      label: 'h4',
      href: '/h4',
    },
  ],
};
