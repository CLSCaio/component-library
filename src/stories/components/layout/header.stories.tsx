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
      component: <Group> dfdsf sdfd</Group>,
      label: 'h1',
      href: '/h1',
    },
    {
      component: <Group> dfdsf sdfd</Group>,
      label: 'h2',
      href: '/h2',
    },
    {
      component: <Group> dfdsf sdfd</Group>,
      label: 'h3',
      href: '/h3',
    },
    {
      component: <Group> dfdsf sdfd</Group>,
      label: 'h4',
      href: '/h4',
    },
  ],
};
