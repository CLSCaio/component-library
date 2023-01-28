import React from 'react';
import { FormikProvider } from 'formik';

import { Input, Button, Select } from '../..';

import * as I from './interface';
import * as S from './styles';

export const Form = ({
  // inputs,
  // selects,
  components,
  button,
  form,
}: I.FormProps) => (
  <FormikProvider value={form}>
    <S.Form onSubmit={form.handleSubmit}>
      {components.map(({ options, ...rest }) =>
        !options ? (
          <Input key={rest.name} {...rest} />
        ) : (
          <Select key={rest.name} {...rest} options={options} />
        ),
      )}

      <Button {...button} onClick={() => form.handleSubmit} />
    </S.Form>
  </FormikProvider>
);
