import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Meta, Story } from '@storybook/react';

import { SliderRange, SliderRangeProps } from '@components';

export default {
  title: 'Forms/SliderRange',
  component: SliderRange,
} as Meta;

export const Overview: Story<SliderRangeProps> = args => {
  const form = useFormik({
    initialValues: {
      sliderMin: '',
      sliderMax: '',
    },
    onSubmit: values => console.log(values),
  });

  return (
    <FormikProvider value={form}>
      <form onSubmit={form.handleSubmit}>
        <SliderRange {...args} />
      </form>
    </FormikProvider>
  );
};

Overview.args = {
  maxW: 600,
  type: 'money',
  position: 'vertical',
  label: {
    name: 'Label ',
    tooltip: 'tooltip',
    position: 'top',
  },
  min: 0,
  max: 100000000,
  name: ['sliderMin', 'sliderMax'],
};
