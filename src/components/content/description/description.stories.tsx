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
  text: "pode passar algum html harder code como um <strong> 'strong' </strong> ou um <br/> 'br' para pular linha e etc...",
};
