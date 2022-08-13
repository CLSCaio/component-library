import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Header, Group } from '../../../components';
import { HeaderProps } from '../../../components/layouts/header/interface';

export default {
  title: 'Layouts/Header',
  component: Header,
} as Meta;

export const Overview: Story<HeaderProps> = args => <Header {...args} />;

Overview.args = {
  routes: [
    {
      component: (
        <Group>
          <h1> daslçdkasçd k</h1>{' '}
        </Group>
      ),
      name: 'h1',
      path: '/h1',
    },
  ],
  type: 'default',
};
