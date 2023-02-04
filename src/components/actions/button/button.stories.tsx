import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '@components';

export default {
  title: 'Actions/Button',
  component: Button,
} as Meta;

export const Overview: Story<ButtonProps> = args => <Button {...args} />;

Overview.args = {
  withShadow: true,
  label: 'button',
  onClick: () => console.log(),
};
