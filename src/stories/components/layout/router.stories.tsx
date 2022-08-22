import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Router, RouterProps } from '../../..';

export default {
  title: 'Layouts/Router',
  component: Router,
} as Meta;

export const Overview: Story<RouterProps> = args => <Router {...args} />;

Overview.args = {
  routes: [
    {
      component: <div> Home </div>,
      label: 'home',
      href: '/',
    },
    {
      component: <div> Tela 1 </div>,
      label: 'tela1',
      href: '/tela1',
    },
    {
      component: <div> Tela 2 </div>,
      label: 'tela2',
      href: '/tela2',
    },
    {
      component: <div> Tela 3 </div>,
      label: 'tela3',
      href: '/tela3',
    },
  ],
};
