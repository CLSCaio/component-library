import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Router, RouterProps } from 'src/components';

export default {
  title: 'Layouts/Router',
  component: Router,
} as Meta;

export const Overview: Story<RouterProps> = args => <Router {...args} />;

Overview.args = {
  internalHeader: {
    img: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-wzlH6UF3a7bFTSZbC0V7yKa6Bz18udt7VdzaSefGVOYiDsEzk8OA4m_MR8wwruHUmU&usqp=CAU',
      alt: '',
    },
  },
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
