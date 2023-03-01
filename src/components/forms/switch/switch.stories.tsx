import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Meta, Story } from '@storybook/react';

import { Switch, SwitchProps } from '@components';

export default {
  title: 'Forms/Switch',
  component: Switch,
} as Meta;

export const Overview: Story<SwitchProps> = args => {
  const form = useFormik({
    initialValues: {
      Switch: '',
    },
    onSubmit: () => document.write(''),
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <FormikProvider value={form}>
        <Switch {...args} />
      </FormikProvider>
    </form>
  );
};

Overview.args = {
  name: 'Switch',
  tooltip: 'Im tooltip',
  label: 'Label Switch!',
};
