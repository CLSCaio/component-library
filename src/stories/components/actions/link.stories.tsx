import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Link, LinkProps } from '../../..';

export default {
  title: 'Actions/Link',
  component: Link,
} as Meta;

export const Overview: Story<LinkProps> = args => (
  <BrowserRouter>
    <Link {...args} />
  </BrowserRouter>
);

Overview.args = {
  label: 'Link',
  href: {
    pathname:
      'https://clscaio.github.io/component-library/?path=/story/welcome--page',
  },
};
