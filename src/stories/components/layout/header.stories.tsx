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
      name: 'h1',
      path: '/h1',
    },
    {
      component: <Group> dfdsf sdfd</Group>,
      name: 'h2',
      path: '/h2',
    },
    {
      component: <Group> dfdsf sdfd</Group>,
      name: 'h3',
      path: '/h3',
    },
    {
      component: <Group> dfdsf sdfd</Group>,
      name: 'h4',
      path: '/h4',
    },
    // {
    //   component: <Group> dfdsf sdfd</Group>,
    //   name: 'h5',
    //   path: '/h5',
    // },
    // {
    //   component: <Group> dfdsf sdfd</Group>,
    //   name: 'h6',
    //   path: '/h6',
    // },
  ],
};
