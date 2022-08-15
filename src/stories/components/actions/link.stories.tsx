import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Link } from '../../../components';
import { LinkProps } from '../../../components/actions/link/interface';

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
  link: 'https://clscaio.github.io/component-library/?path=/story/welcome--page',
};
