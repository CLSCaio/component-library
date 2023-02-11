import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Meta, Story } from '@storybook/react';
import * as yup from 'yup';

import { Input, InputProps } from '@components';

const error = {
  input: 'Write something in the input.',
};

const validationSchema = yup.object().shape({
  input: yup
    .string()
    .min(2)
    .max(20)
    .test('input', error.input, (value: any) => {
      if (value) {
        return value.trim().length >= 1;
      }
      return false;
    }),
});

export default {
  title: 'Forms/Input',
  component: Input,
} as Meta;

export const Overview: Story<InputProps> = args => {
  const form = useFormik({
    initialValues: {
      input: '',
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: () => document.write(''),
  });

  return (
    <form onSubmit={form.handleSubmit} style={{ width: '100%' }}>
      <FormikProvider value={form}>
        <Input {...args} />
      </FormikProvider>
    </form>
  );
};

Overview.args = {
  name: 'input',
  handleClean: true,
  label: {
    name: 'Label input!',
    position: 'top',
  },
};
