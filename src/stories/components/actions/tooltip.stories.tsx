import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Tooltip } from '../../../components';
import { TooltipProps } from '../../../components/actions/Tooltip/interface';

export default {
  title: 'Actions/Tooltip',
  component: Tooltip,
} as Meta;

export const Overview: Story<TooltipProps> = args => <Tooltip {...args} />;

Overview.args = {
  description: 'eu sou um tooltip',
};
