import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Meta, Story } from '@storybook/react';

import { Checkbox, CheckboxProps } from '@components';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta;

export const Overview: Story<CheckboxProps> = args => {
  const form = useFormik({
    initialValues: {
      checkbox: '',
    },
    onSubmit: () => document.write(''),
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <FormikProvider value={form}>
        <Checkbox {...args} />
      </FormikProvider>
    </form>
  );
};

Overview.args = {
  // align: 'column',
  name: 'checkbox',
  tooltip: 'kdjsalkdjsakl',
  label:
    'Label Checkbox! dlakdsj dlksajdlkajsdlkjasldasjdlkasjdlasjdlasjdlkasjdlksajdlkjsaldkjsalkdjaslkdjsalkdjalksjdlksajdlksajdklsa jdlksajdlksajdlkjdl kjsadlkajskl djsalkdj aslkdjlksj dlksja dkl',
};
