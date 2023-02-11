import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IoMdAddCircleOutline } from 'react-icons/io';

import { Button, ButtonProps } from '@components';

export default {
  title: 'Actions/Button',
  component: Button,
} as Meta;

export const Overview: Story<ButtonProps> = args => <Button {...args} />;

Overview.args = {
  icon: IoMdAddCircleOutline,
  withShadow: true,
  label: 'Adicionar',
  onClick: () => console.log(),
};
