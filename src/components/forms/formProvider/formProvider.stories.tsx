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
  input: string;
  selectSearch: string;
  select: string;
  min: string;
  max: string;
};

const validationSchema = yup.object().shape({
  input: yup
    .string()
    .min(2)
    .max(20)
    .test('input1', error.input1, (value: any) => {
      if (value) {
        return value.trim().length >= 1;
      }
      return false;
    }),
});

const initialValues = {
  input: '',
  selectSearch: '',
  select: '',
  min: '',
  max: '',
};

const components: FormComponentsProps[] = [
  { as: 'input', name: ['input'], inputProps: { label: { name: 'input' } } },
  {
    as: 'selectSearch',
    name: ['selectSearch'],
    selectSearchProps: {
      placeholder: 'Selecione...',
      label: { name: 'selectSearch' },
      options: [
        {
          value: 'value 1',
        },
        {
          value: 'value 2',
        },
      ],
    },
  },
  {
    as: 'select',
    name: ['select'],
    selectProps: {
      placeholder: 'Selecione...',
      label: { name: 'select' },
      options: [
        {
          value: 'value 1',
        },
        {
          value: 'value 2',
        },
      ],
    },
  },
  {
    as: 'sliderRange',
    name: ['min', 'max'],
    sliderRangeProps: {
      label: { name: 'Slider Range' },
      min: 1000,
      max: 10000,
      type: 'money',
    },
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
