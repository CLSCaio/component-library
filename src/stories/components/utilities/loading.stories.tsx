import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Loading } from '../../..';
import { LoadingProps } from '../../../components/interfaces';

export default {
  title: 'Utilities/Loading',
  component: Loading,
} as Meta;

export const Overview: Story<LoadingProps> = args => (
  <>
    <h1>Coloque &quot;isLoading&quot; para true para visualizar o Loading</h1>
    <Loading {...args} />
  </>
);

Overview.args = {
  withBase: true,
};
