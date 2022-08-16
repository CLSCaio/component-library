import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Meta, Story } from '@storybook/react';

import * as yup from 'yup';
import { Select } from '../../..';
import { SelectProps } from '../../../components/interfaces';

const error = {
  select: 'Selecione um valor no select!',
};

const validationSchema = yup.object().shape({
  select: yup.string().test('select', error.select, (value: any) => {
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
    onSubmit: () => document.write(''),
  });

  return (
    <form onSubmit={form.handleSubmit} style={{ width: '100%' }}>
      <FormikProvider value={form}>
        <Select {...args} />
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
      label: 'Selecione um valor ...',
      value: '',
    },
    {
      label: 'valor 1',
      value: 'valor 1',
    },
    {
      label: 'valor 2',
      value: 'valor 2',
    },
  ],
};
