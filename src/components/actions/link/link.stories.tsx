import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Link, LinkProps } from '../../index';

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
    defautlLink:
      'https://clscaio.github.io/component-library/?path=/story/welcome--page',
  },
};
