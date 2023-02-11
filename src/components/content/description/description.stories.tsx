import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Description, DescriptionProps } from '@components';

export default {
  title: 'Content/Description',
  component: Description,
} as Meta;

export const Overview: Story<DescriptionProps> = args => (
  <Description {...args} />
);

Overview.args = {
  text: 'description component',
};
