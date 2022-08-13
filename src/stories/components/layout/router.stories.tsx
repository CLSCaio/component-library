import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Router } from '../../../router';
import { RouterProps } from '../../../router/interface';

export default {
  title: 'Layouts/Router',
  component: Router,
} as Meta;

export const Overview: Story<RouterProps> = args => <Router {...args} />;

Overview.args = {
  routes: [
    {
      component: <div> Home </div>,
      name: 'home',
      path: '/',
    },
    {
      component: <div> Tela 1 </div>,
      name: 'tela1',
      path: '/tela1',
    },
    {
      component: <div> Tela 2 </div>,
      name: 'tela2',
      path: '/tela2',
    },
    {
      component: <div> Tela 3 </div>,
      name: 'tela3',
      path: '/tela3',
    },
  ],
  withHeader: {
    header: true,
  },
};
