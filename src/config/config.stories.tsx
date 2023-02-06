import React from 'react';

import { Meta, Story } from '@storybook/react';

import { useConfig } from '@config';
import { ColorsProps } from '@global';
import { Description } from '@components';

export default {
  title: 'Foundations/UseConfig',
  component: useConfig,
} as Meta;

export const Overview: Story<ColorsProps> = args => {
  useConfig(args);

  return (
    <Description text="ENTERING THIS SCREEN YOU ACTIVATE THE COLOR CONFIGURATION SET ON THE OBJECT BELOW (CONTROLS)" />
  );
};

Overview.args = {
  button: {
    primary: '#008000',
    secundary: '#000',
    floating: '#008',
  },
  link: {
    primary: '#008000',
    hover: '#008',
  },
  table: {
    primary: '#008000',
    border: '#008',
    separator: '#569',
  },
  forms: {
    primary: '#008000',
    focus: '#569',
    hover: '#008',
    border: '#772846',
  },
};
