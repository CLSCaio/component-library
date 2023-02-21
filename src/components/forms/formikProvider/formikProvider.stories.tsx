import React from 'react';
import { Meta, Story } from '@storybook/react';
import * as yup from 'yup';

import {
  FormikProvider,
  Input,
  Select,
  SelectSearch,
  Button,
} from '@components';

export default {
  title: 'Forms/FormikProvider',
  component: FormikProvider,
} as Meta;

const error = {
  input1: 'Write something in the input.',
};

type SubmitProps = {
  input1: string;
  input2: string;
  select1: string;
  selectSearch: string;
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
  input2: '',
  select1: '',
  selectSearch: '',
};

const onSubmit = async (values: SubmitProps) => console.log(values);

export const Overview: Story = args => (
  <FormikProvider
    onSubmit={onSubmit}
    initialValues={initialValues}
    validationSchema={validationSchema}
  >
    <Input name="input1" placeholder="Input 1" />
    <Input name="input2" placeholder="Input 2" />
    <Select
      name="select1"
      placeholder="Select"
      options={[{ value: 'option1', label: 'option 1' }]}
    />
    <SelectSearch
      name="selectSearch"
      placeholder="SelectSearch"
      options={[{ value: 'option1', label: 'option 1' }]}
    />
    <Button label="click here" type="submit" />
  </FormikProvider>
);

Overview.args = {};
