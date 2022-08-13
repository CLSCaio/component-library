import React from 'react';
import { Meta, Story } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Header, Group } from '../../..';
import { HeaderProps } from '../../../layouts/header/interface';

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
  ],
  type: 'default',
};
