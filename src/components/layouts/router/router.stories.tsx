import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Router, RouterProps } from 'src/components';

export default {
  title: 'Layouts/Router',
  component: Router,
} as Meta;

export const Overview: Story<RouterProps> = args => <Router {...args} />;

Overview.args = {
  routes: [
    {
      reactComponent: <div> Home </div>,
      label: 'home',
      href: '/',
    },
    {
      reactComponent: <div> Tela 1 </div>,
      label: 'tela1',
      href: '/tela1',
    },
    {
      reactComponent: <div> Tela 2 </div>,
      label: 'tela2',
      href: '/tela2',
    },
    {
      reactComponent: <div> Tela 3 </div>,
      label: 'tela3',
      href: '/tela3',
    },
  ],
};
