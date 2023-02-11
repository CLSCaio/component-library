import React from 'react';
import { Meta, Story } from '@storybook/react';
import * as yup from 'yup';

import { FormProvider, FormComponentsProps } from '@components';

export default {
  title: 'Forms/FormProvider',
  component: FormProvider,
} as Meta;

const error = {
  input1: 'Write something in the input.',
};

type SubmitProps = {
  input1: string;
  input2: string;
  selectSearch1: string;
  input3: string;
  select1: string;
  select2: string;
};

const validationSchema = yup.object().shape({
  input1: yup
    .string()
    .min(2)
    .max(20)
    .test('input1', error.input1, (value: any) => {
      if (value) {
        return value.trim().length >= 1;
      }
      return false;
    }),
  input2: yup
    .string()
    .min(2)
    .max(20)
    .test('input1', error.input1, (value: any) => {
      if (value) {
        return value.trim().length >= 1;
      }
      return false;
    })
    .required(),
});

const initialValues = {
  input1: '',
  selectSearch1: '',
  input2: '',
  input3: '',
  select1: '',
  select2: '',
};

const components: FormComponentsProps[] = [
  { as: 'input', name: 'input1', label: { name: 'input 1' } },
  {
    as: 'selectSearch',
    name: 'selectSearch1',
    placeholder: 'Selecione...',
    label: { name: 'selectSearch 1' },
    options: [
      {
        value: 'value 1',
      },
      {
        value: 'value 2',
      },
    ],
  },
  { as: 'input', name: 'input2', label: { name: 'input 2' } },
  {
    as: 'select',
    placeholder: 'Selecione...',
    name: 'select1',
    label: { name: 'select 1' },
    options: [
      {
        value: 'value 1',
      },
      {
        value: 'value 2',
      },
    ],
  },
  { as: 'input', name: 'input3', label: { name: 'input 3' } },
  {
    as: 'select',
    placeholder: 'Selecione...',
    name: 'select2',
    label: { name: 'select 2' },
    options: [
      {
        value: 'value 1',
      },
      {
        value: 'value 2',
      },
    ],
  },
];

const onSubmit = async (values: SubmitProps) => console.log(values);

export const Overview: Story = args => (
  <FormProvider
    button={{
      label: 'test here',
    }}
    form={{
      onSubmit,
      initialValues,
      validationSchema,
    }}
    components={components}
  />
);
