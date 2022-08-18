import React from 'react';
import { FormikProvider } from 'formik';

import { Input, Button, Select } from '../..';

import * as I from './interface';
import * as S from './styles';

export const Form = ({
  inputs,
  selects,
  design,
  button,
  form,
}: I.FormProps) => (
  <FormikProvider value={form}>
    <S.Form onSubmit={form.handleSubmit}>
      {inputs && inputs.map(({ ...rest }) => <Input {...rest} {...design} />)}

      {selects &&
        selects.map(({ ...rest }) => <Select {...rest} {...design} />)}

      <Button
        onClick={() => form.handleSubmit}
        disabled={!(form.isValid && form.dirty) || form.isSubmitting}
        {...button}
      />
    </S.Form>
  </FormikProvider>
);
