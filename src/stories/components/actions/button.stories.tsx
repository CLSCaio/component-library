import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from '../../..';
import { ButtonProps } from '../../../components/interfaces';

export default {
  title: 'Actions/Button',
  component: Button,
} as Meta;

export const Overview: Story<ButtonProps> = args => <Button {...args} />;

Overview.args = {
  label: 'button',
};
