import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { FaFrownOpen, FaCodepen, FaOpencart } from 'react-icons/fa';

import { Header, HeaderProps } from 'src/components';

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
  titleIcon: FaFrownOpen,
  closeIcon: FaCodepen,
  openIcon: FaOpencart,
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
