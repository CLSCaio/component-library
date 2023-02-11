import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Router, RouterProps } from '@components';

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
      reactComponent: <div> view 1 </div>,
      label: 'view 1',
      href: '/view1',
    },
    {
      reactComponent: <div> view 2 </div>,
      label: 'view 2',
      href: '/view2',
    },
    {
      reactComponent: <div> view 3 </div>,
      label: 'view 3',
      href: '/view3',
    },
  ],
};
