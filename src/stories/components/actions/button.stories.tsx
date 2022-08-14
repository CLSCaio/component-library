import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from '../../../components';
import { ButtonProps } from '../../../components/actions/button/interface';

export default {
  title: 'Actions/Button',
  component: Button,
} as Meta;

export const Overview: Story<ButtonProps> = args => <Button {...args} />;

Overview.args = {
  label: 'button',
};
