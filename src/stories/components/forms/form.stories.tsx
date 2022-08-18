import React from 'react';
import { Meta, Story } from '@storybook/react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { Form, FormProps } from '../../..';

export default {
  title: 'Forms/Form',
  component: Form,
} as Meta;

const error = {
  input1: 'Escreva algo no input!',
};

const validationSchema = yup.object().shape({
  input1: yup
    .string()
    .min(2, 'Minimo de 2 caracteres.')
    .max(20, 'Maximo de 20 caracteres.')
    .test('input1', error.input1, (value: any) => {
      if (value) {
        return value.trim().length >= 1;
      }
      return false;
    }),
});

export const Overview: Story<FormProps> = ({ form, ...args }) => {
  const forms = useFormik({
    initialValues: {
      input: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: () => document.write(''),
  });
  return <Form form={forms} {...args} />;
};

Overview.args = {
  inputs: [
    { name: 'input1', label: { name: 'input 1' } },
    { name: 'input2', label: { name: 'input 2' } },
    { name: 'input3', label: { name: 'input 3' } },
  ],

  button: {
    label: 'confirmar',
  },

  selects: [
    {
      name: 'select',
      label: { name: 'select' },
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
    },
  ],
};
