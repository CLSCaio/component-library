import React, { useEffect } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Meta, Story } from '@storybook/react';

import * as yup from 'yup';
import { Select, SelectProps } from '@components';

const error = {
  select: 'select a valid value.',
};

const validationSchema = yup.object().shape({
  select: yup.string().test('select', error.select, value => {
    if (value) {
      return value.trim().length >= 1;
    }
    return false;
  }),
});

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta;

export const Overview: Story<SelectProps> = args => {
  const form = useFormik({
    initialValues: {
      select: '',
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: values => console.log(values),
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <FormikProvider value={form}>
        <Select {...args} placeholder="Select a value..." />
      </FormikProvider>
    </form>
  );
};

Overview.args = {
  name: 'select',
  label: {
    name: 'Label select!',
    position: 'top',
  },
  options: [
    {
      value: '',
    },
    {
      value: 'string text',
    },
    {
      value: '200',
    },
    {
      value: 'true',
    },
  ],
};
