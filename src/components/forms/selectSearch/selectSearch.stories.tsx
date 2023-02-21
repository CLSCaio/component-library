import React, { useEffect } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Meta, Story } from '@storybook/react';

import * as yup from 'yup';
import { SelectSearch, SelectSearchProps } from '@components';

const error = {
  selectSearch: 'Select a valid value.',
};

const validationSchema = yup.object().shape({
  selectSearch: yup.string().test('selectSearch', error.selectSearch, value => {
    if (value) {
      return value.trim().length >= 1;
    }
    return false;
  }),
});

export default {
  title: 'Forms/SelectSearch',
  component: SelectSearch,
} as Meta;

export const Overview: Story<SelectSearchProps> = args => {
  const form = useFormik({
    initialValues: {
      selectSearch: '',
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: values => console.log(values),
  });

  useEffect(() => {
    console.log(form.values.selectSearch);
  }, [form.values.selectSearch]);

  return (
    <FormikProvider value={form}>
      <form onSubmit={form.handleSubmit}>
        <SelectSearch {...args} placeholder="Select a value..." />
      </form>
    </FormikProvider>
  );
};

Overview.args = {
  name: 'selectSearch',
  label: {
    name: 'Label selectSearch!',
    position: 'top',
  },
  options: [
    {
      value: '',
      label: 'Select...',
    },
    {
      value: 'string text',
      label: 'testing',
    },
    {
      value: '200',
      label: 'number',
    },
    {
      value: 'true',
      label: 'boolean',
    },
  ],
};
