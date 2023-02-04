import React from 'react';
import { FormikProvider } from 'formik';

import { Input, Button, Select } from '@components';

import * as I from './interface';
import * as S from './styles';

export const Form = ({ components, button, form }: I.FormProps) => (
  <FormikProvider value={form}>
    <S.Form onSubmit={form.handleSubmit}>
      {components.map(({ options, ...rest }) =>
        !options ? (
          <Input key={rest.name} {...rest} />
        ) : (
          <Select key={rest.name} {...rest} options={options} />
        ),
      )}

      <Button {...button} type="submit" />
    </S.Form>
  </FormikProvider>
);
