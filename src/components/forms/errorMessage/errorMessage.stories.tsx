import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ErrorMessage, ErrorMessageProps } from '@components';

export default {
  title: 'Forms/ErrorMessage',
  component: ErrorMessage,
} as Meta;

export const Overview: Story<ErrorMessageProps> = args => (
  <ErrorMessage {...args} />
);

Overview.args = {
  error: 'Error Message',
};
