import React from 'react';

import {
  Input,
  Button,
  Select,
  SelectSearch,
  FormikProvider,
} from '@components';

import * as I from './interface';

export const FormProvider = <Type extends {}>({
  components,
  button,
  form,
}: I.FormProviderProps<Type>) => (
  <FormikProvider {...form}>
    {components.map(({ as, options, ...rest }) => (
      <>
        {as === 'input' && <Input key={rest.name} {...rest} />}
        {as === 'select' && (
          <Select key={rest.name} {...rest} options={options || []} />
        )}
        {as === 'selectSearch' && (
          <SelectSearch key={rest.name} {...rest} options={options || []} />
        )}
      </>
    ))}

    <Button {...button} type="submit" />
  </FormikProvider>
);
