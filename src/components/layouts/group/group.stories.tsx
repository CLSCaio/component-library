import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Group, GroupProps } from '@components';

export default {
  title: 'Layouts/Group',
  component: Group,
} as Meta;

export const Overview: Story<GroupProps> = args => (
  <Group {...args}>
    {' '}
    <h1> caio </h1> <h1> sousa </h1>{' '}
  </Group>
);

Overview.args = {
  direction: 'column',
  gap: [10, 5],
};
